# Plano de Integração Supabase — mycash+ v2.0

## Visão geral

Migrar o sistema de dados mock para Supabase (PostgreSQL), com autenticação, RLS, Storage e CRUD completo. O schema segue o modelo Prisma fornecido, adaptado para Supabase Auth.

---

## Fase 1 — Estrutura do banco de dados

### 1.1 Tabelas (ordem de criação por dependência)

| Ordem | Tabela | Descrição |
|-------|--------|-----------|
| 1 | `users` | Perfil do usuário (sincronizado com `auth.users`) |
| 2 | `family_members` | Membros da família |
| 3 | `categories` | Categorias de receita/despesa |
| 4 | `accounts` | Contas e cartões (unificado) |
| 5 | `transactions` | Transações |
| 6 | `recurring_transactions` | Templates de recorrência |
| 7 | `goals` | Objetivos financeiros (existente no app) |

### 1.2 Enums

```sql
CREATE TYPE transaction_type AS ENUM ('INCOME', 'EXPENSE');
CREATE TYPE account_type AS ENUM ('CHECKING', 'SAVINGS', 'CREDIT_CARD');
CREATE TYPE recurrence_frequency AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');
CREATE TYPE transaction_status AS ENUM ('PENDING', 'COMPLETED', 'CANCELLED');
CREATE TYPE goal_status AS ENUM ('active', 'completed', 'cancelled');
```

### 1.3 Mapeamento Prisma → Supabase

- `User` → `users` (id = auth.uid())
- `FamilyMember` → `family_members`
- `Category` → `categories`
- `Account` → `accounts` (unifica CreditCard e BankAccount)
- `Transaction` → `transactions`
- `RecurringTransaction` → `recurring_transactions`
- `Goal` → `goals` (adicionado; não existe no schema Prisma)

---

## Fase 2 — Row Level Security (RLS)

### 2.1 Princípio

Cada usuário autenticado acessa apenas seus próprios dados (por `user_id`).

### 2.2 Políticas por tabela

| Tabela | SELECT | INSERT | UPDATE | DELETE |
|--------|--------|--------|--------|--------|
| users | `auth.uid() = id` | Trigger on signup | `auth.uid() = id` | — |
| family_members | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` |
| categories | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` |
| accounts | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` |
| transactions | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` |
| recurring_transactions | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` |
| goals | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` | `user_id = auth.uid()` |

### 2.3 Comando padrão

```sql
ALTER TABLE <tabela> ENABLE ROW LEVEL SECURITY;

CREATE POLICY "<tabela>_select" ON <tabela>
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "<tabela>_insert" ON <tabela>
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "<tabela>_update" ON <tabela>
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "<tabela>_delete" ON <tabela>
  FOR DELETE USING (user_id = auth.uid());
```

---

## Fase 3 — Autenticação

### 3.1 Fluxo

1. Login: `supabase.auth.signInWithPassword({ email, password })`
2. Cadastro: `supabase.auth.signUp({ email, password, options: { data: { name } } })`
3. Logout: `supabase.auth.signOut()`
4. Recuperar sessão: `supabase.auth.getSession()` / `onAuthStateChange`

### 3.2 Trigger: criar `users` no signup

```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 3.3 Páginas/componentes

- **LoginPage** (nova): email + senha
- **SignUpPage** (nova): email, senha, nome
- **AuthGuard**: redireciona para login se não autenticado
- **ProfilePage**: botão Sair → signOut

---

## Fase 4 — Storage

### 4.1 Buckets

| Bucket | Uso | Política |
|--------|-----|----------|
| `avatars` | Avatares (users, family_members) | `auth.uid()` = owner |
| `account-logos` | Logos de contas/cartões | `auth.uid()` = owner |
| `documents` | Comprovantes, PDFs, etc. | `auth.uid()` = owner |
| `media` | Imagens e vídeos gerais | `auth.uid()` = owner |

### 4.2 Políticas de Storage

```sql
-- Exemplo avatars
CREATE POLICY "avatars_select" ON storage.objects
  FOR SELECT USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "avatars_insert" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "avatars_update" ON storage.objects
  FOR UPDATE USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "avatars_delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
```

### 4.3 Estrutura de pastas

```
avatars/{user_id}/profile.png
avatars/{user_id}/member_{member_id}.png
account-logos/{user_id}/{account_id}.png
documents/{user_id}/{transaction_id}/comprovante.pdf
media/{user_id}/...
```

---

## Fase 5 — Services e CRUD

### 5.1 Estrutura de pastas

```
src/
  services/
    supabase.ts          # Cliente (já existe)
    auth.service.ts      # Login, signup, logout, sessão
    users.service.ts     # Perfil do usuário
    familyMembers.service.ts
    categories.service.ts
    accounts.service.ts  # Contas + cartões
    transactions.service.ts
    recurringTransactions.service.ts
    goals.service.ts
    storage.service.ts   # Upload/download
```

### 5.2 Assinaturas principais

```typescript
// Exemplo: transactions.service.ts
export const transactionsService = {
  getAll: (userId: string, filters?: TransactionFilters) => supabase.from('transactions').select('*, category:categories(*), account:accounts(*)').eq('user_id', userId)...
  getById: (id: string) => ...
  create: (data: InsertTransaction) => ...
  update: (id: string, data: UpdateTransaction) => ...
  delete: (id: string) => ...
}
```

---

## Fase 6 — Migração do FinanceContext

### 6.1 Antes → Depois

| Antes | Depois |
|-------|--------|
| `useState(MOCK_*)` | `useEffect` + `supabase.from().select()` |
| `addTransaction` local | `transactionsService.create()` + `refetch` |
| `getFilteredTransactions()` local | Query com filtros ou RPC |

### 6.2 Padrão sugerido

- **AuthProvider**: gerencia sessão e `user`
- **FinanceProvider**: depende de `user`; carrega dados quando `user` existe
- **React Query ou SWR** (opcional): cache e revalidação

---

## Fase 7 — Adaptação de tipos

### 7.1 Account unificado

O Prisma unifica `CreditCard` e `BankAccount` em `Account`. O frontend precisa:

- `Account` com `type: 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD'`
- Helpers: `isCreditCard(account)`, `isBankAccount(account)`
- Componentes: mapear `accounts` filtrando por `type`

### 7.2 Category

- Antes: `category: string`
- Depois: `categoryId: string` + join com `categories`
- Manter categorias padrão em seed ou migration

---

## Cronograma de execução

| Etapa | Descrição | Prioridade |
|-------|-----------|------------|
| 1 | SQL: enums + tabelas | Alta |
| 2 | SQL: RLS policies | Alta |
| 3 | SQL: trigger handle_new_user | Alta |
| 4 | Criar buckets + políticas Storage | Média |
| 5 | Auth: Login/SignUp + AuthGuard | Alta |
| 6 | Services CRUD (users, family_members, categories, accounts, transactions, goals) | Alta |
| 7 | Remover mockData e conectar FinanceContext | Alta |
| 8 | Storage service + upload de avatares | Média |
| 9 | RecurringTransactions (se usado) | Baixa |
| 10 | Testes e ajustes finais | Alta |

---

## Arquivos SQL

```
supabase/migrations/
  00001_create_enums.sql
  00002_create_tables.sql
  00003_create_rls_policies.sql
  00004_handle_new_user_trigger.sql
  00005_storage_setup.sql    # RLS para storage
  00006_seed_categories.sql  # Referência (categorias criadas no app)
```

**Ordem de execução:** 1 → 2 → 3 → 4 → 5 (no SQL Editor do Supabase Dashboard).

**Buckets Storage:** Crie manualmente no Dashboard (Storage → New bucket):
- `avatars` (public, 5MB, images)
- `account-logos` (public, 1MB, images)
- `documents` (private, 10MB, pdf/images)
- `media` (private, 50MB, images/videos)

---

## Services criados

| Service | Métodos |
|---------|---------|
| authService | signUp, signIn, signOut, getSession, getUser, onAuthStateChange |
| usersService | getProfile, updateProfile |
| storageService | upload, getPublicUrl, getSignedUrl, delete, uploadAvatar, uploadAccountLogo |
| familyMembersService | getAll, create, update, delete |
| categoriesService | getAll, create, createDefaults, update, delete |
| accountsService | getAll, getCreditCards, getBankAccounts, create, update, delete |
| transactionsService | getAll, create, update, delete |
| goalsService | getAll, create, update, delete |

---

## Variáveis de ambiente

```env
VITE_SUPABASE_URL=https://<project>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon_key>
```

---

## Próximos passos de implementação (Fase 2)

1. **AuthProvider** — Context para sessão e user
2. **Páginas Login e SignUp** — Formulários de autenticação
3. **AuthGuard** — Proteger rotas que exigem login
4. **Migrar FinanceContext** — Trocar `useState(MOCK_*)` por chamadas aos services
5. **Adaptadores** — Mapear `Account` (unificado) para `CreditCard`/`BankAccount` nos componentes
6. **Seed de categorias** — Chamar `categoriesService.createDefaults(userId)` no primeiro acesso
7. **Remover** — `mockData.ts` e imports de MOCK_*

---

## Notas

1. **Goals**: não existe no schema Prisma; será incluído no banco para manter funcionalidade atual.
2. **Account**: modelo unificado; o frontend precisa de adaptadores para compatibilidade com componentes existentes.
3. **Categorias**: seed com `INCOME_CATEGORIES` e `EXPENSE_CATEGORIES` do `constants/index.ts`.
4. **RLS**: garantir que todas as tabelas tenham RLS habilitado antes de desativar o mock.
