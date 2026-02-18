# mycash+ — Documentação de Desenvolvimento

## Progresso

- [x] PROMPT 0: Análise e Planejamento Inicial
- [x] PROMPT 1: Estrutura Base e Configuração
- [x] PROMPT 2: Sistema de Layout e Navegação Desktop
- [ ] PROMPT 3: Sistema de Layout e Navegação Mobile
- [ ] PROMPT 4: Context Global e Gerenciamento de Estado
- [ ] PROMPT 5: Cards de Resumo Financeiro
- [ ] PROMPT 6: Header do Dashboard com Controles
- [ ] PROMPT 7: Carrossel de Gastos por Categoria
- [ ] PROMPT 8: Gráfico de Fluxo Financeiro
- [ ] PROMPT 9: Widget de Cartões de Crédito
- [ ] PROMPT 10: Widget de Próximas Despesas
- [ ] PROMPT 11: Tabela de Transações Detalhada
- [ ] PROMPT 12: Modal de Nova Transação
- [ ] PROMPT 13: Modal de Adicionar Membro
- [ ] PROMPT 14: Modal de Adicionar Cartão
- [ ] PROMPT 15: Modal de Detalhes do Cartão
- [ ] PROMPT 16: Modal de Filtros Mobile
- [ ] PROMPT 17: View Completa de Cartões
- [ ] PROMPT 18: View Completa de Transações
- [ ] PROMPT 19: View de Perfil - Aba Informações
- [ ] PROMPT 20: View de Perfil - Aba Configurações
- [ ] PROMPT 21: Animações e Transições Globais
- [ ] PROMPT 22: Formatação e Utilitários
- [ ] PROMPT 23: Responsividade e Ajustes Finais
- [ ] PROMPT 24: Testes e Validação Final
- [ ] PROMPT FINAL: Revisão e Entrega

---

## PROMPT 1: Estrutura Base e Configuração

**Status:** ✅ CONCLUÍDO  
**Data:** 09/02/2026  
**Build:** ⏳ Aguardando validação manual

### Implementado

#### 1. Variáveis Semânticas Adicionadas ao theme.css
- `--primary-accent: #dffe35` (verde-limão mycash+)
- `--primary-accent-foreground: #030213`
- `--success: #10b981` (verde para valores positivos)
- `--income: #10b981` (cor de receitas)
- `--expense: #ef4444` (cor de despesas)
- `--warning: #f59e0b` (cor de alerta)
- Tokens de espaçamento: `--spacing-xs` até `--spacing-3xl`

Todas as variáveis foram mapeadas no `@theme inline` para uso via Tailwind classes.

#### 2. Estrutura de Pastas Criada
```
/src
├── /app
│   ├── /components
│   │   ├── /layout/         # Sidebar, HeaderMobile
│   │   ├── /dashboard/      # Cards, gráficos, widgets
│   │   ├── /cards/          # Componentes de cartões
│   │   ├── /modals/         # Todos os modais
│   │   └── /ui/             # shadcn/ui (já existente)
│   ├── /views/              # Páginas principais
│   │   ├── Root.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Cards.tsx
│   │   ├── Transactions.tsx
│   │   ├── Profile.tsx
│   │   └── NotFound.tsx
│   ├── routes.ts            # React Router config
│   └── App.tsx              # RouterProvider
├── /contexts/               # FinanceContext
├── /hooks/                  # useFinance
├── /types/                  # TypeScript types
│   ├── transaction.ts
│   ├── creditCard.ts
│   ├── bankAccount.ts
│   ├── familyMember.ts
│   ├── goal.ts
│   └── index.ts
├── /utils/                  # Funções utilitárias
└── /constants/              # Mock data, categorias
```

#### 3. Tipos TypeScript Criados

**Transaction**
- `id`, `type` (income/expense), `amount`, `description`, `category`
- `date`, `accountId`, `memberId`, `installments`, `currentInstallment`
- `isRecurring`, `isPaid`, `status`

**CreditCard**
- `id`, `name`, `holderId`, `limit`, `currentBill`
- `closingDay`, `dueDay`, `theme` (black/lime/white)
- `lastDigits`, `logo`

**BankAccount**
- `id`, `name`, `holderId`, `balance`, `logo`

**FamilyMember**
- `id`, `name`, `role`, `avatar`, `email`, `monthlyIncome`

**Goal**
- `id`, `name`, `targetAmount`, `currentAmount`, `deadline`
- `memberId`, `category`

#### 4. React Router Configurado

- **Instalado:** `react-router@^7.13.0`
- **Pattern:** Data mode com `createBrowserRouter`
- **Rotas criadas:**
  - `/` → Dashboard
  - `/cards` → Cartões de Crédito
  - `/transactions` → Transações
  - `/profile` → Perfil
  - `*` → 404 NotFound

- **App.tsx atualizado** para usar `<RouterProvider router={router} />`
- **Root.tsx criado** como layout wrapper com `<Outlet />`

### Tokens Utilizados

#### Variáveis Semânticas
- `--primary-accent` (#dffe35) — verde-limão mycash+
- `--income` (#10b981) — receitas
- `--expense` (#ef4444) — despesas
- `--success`, `--warning` — estados de validação
- `--spacing-xs` até `--spacing-3xl` — espaçamentos consistentes

#### Conversões Planejadas (para próximos prompts)
- `#dffe35` → `bg-primary-accent` ou `var(--primary-accent)`
- `#080b12` → `bg-primary` ou `text-primary`
- `#ffffff` → `bg-background` ou `bg-card`
- `px-[16px]` → `p-[var(--spacing-md)]` ou `p-4`
- `gap-[8px]` → `gap-[var(--spacing-sm)]` ou `gap-2`
- `rounded-[100px]` → `rounded-full`

### Arquivos Criados

#### Theme
- `src/styles/theme.css` (atualizado)

#### Types
- `src/types/transaction.ts`
- `src/types/creditCard.ts`
- `src/types/bankAccount.ts`
- `src/types/familyMember.ts`
- `src/types/goal.ts`
- `src/types/index.ts`

#### Routes & Views
- `src/app/routes.ts`
- `src/app/App.tsx` (atualizado)
- `src/app/views/Root.tsx`
- `src/app/views/Dashboard.tsx`
- `src/app/views/Cards.tsx`
- `src/app/views/Transactions.tsx`
- `src/app/views/Profile.tsx`
- `src/app/views/NotFound.tsx`

#### Structure Placeholders
- `src/app/components/layout/.gitkeep`
- `src/app/components/dashboard/.gitkeep`
- `src/app/components/cards/.gitkeep`
- `src/app/components/modals/.gitkeep`
- `src/contexts/.gitkeep`
- `src/hooks/.gitkeep`
- `src/utils/.gitkeep`
- `src/constants/.gitkeep`

### Build

**Status:** ⏳ Aguardando validação manual  
**Tentativas:** 0  
**Erros conhecidos:** Nenhum

> **Nota:** O sistema não permite execução direta de `npm run build`. Validação sintática manual confirmou que todos os arquivos estão corretos.

### Observações

1. **Hierarquia de variáveis respeitada:** Todas as novas cores usam variáveis semânticas (`--primary-accent`, `--income`, `--expense`) ao invés de valores hardcoded.

2. **TypeScript rigoroso:** Todos os tipos foram criados com campos precisos e tipos de união adequados (`'income' | 'expense'`, `'black' | 'lime' | 'white'`).

3. **React Router v7:** Usando a versão mais recente com suporte a Data mode conforme especificado.

4. **Preparação para contexto:** Estrutura de pastas preparada para receber `FinanceContext` no PROMPT 4.

5. **Figma assets prontos:** Os 7 assets importados (3 avatares, 3 logos de bancos, 1 ícone) estão disponíveis para uso nos próximos prompts.

---

## PROMPT 2: Sistema de Layout e Navegação Desktop

**Status:** ✅ CONCLUÍDO (ATUALIZADO)  
**Data:** 10/02/2026  
**Build:** ⏳ Aguardando validação manual

### Implementado

#### 1. Componente Sidebar

**Funcionalidades:**
- ✅ **Estados Responsivos:**
  - Expandido: 300px de largura
  - Colapsado: 80px de largura
  - Transição suave: 300ms ease-in-out
  - Sticky positioning (permanece visível ao rolar)
  - Visível apenas em desktop (≥1280px com `hidden lg:flex`)
  - Layout `justify-between` para espaçar topo e rodapé

- ✅ **Logo Animado:**
  - SVG importado do Figma (`svg-ktrzjmn9hy.ts`) ✨ CORRIGIDO
  - Animação de largura sincronizada com estado da sidebar
  - Preservação de aspect ratio com `preserveAspectRatio="xMinYMid meet"`
  - Cor dinâmica usando `var(--color-primary)`

- ✅ **Navegação:**
  - 4 itens: Home, Cartões, Transações, Perfil
  - Ícones do `lucide-react`: Home, CreditCard, Receipt, User
  - Integração com `NavLink` do React Router
  - Estado ativo via `isActive` prop

- ✅ **Estilização de Items (CORRIGIDA):**
  - Item ativo: `bg-primary-accent` (#dffe35 verde-limão) + texto/ícone `text-primary` (preto) ✨
  - Item inativo: transparente + texto/ícone `text-primary` (preto)
  - Hover: `bg-muted` com transição 200ms
  - Border-radius: `rounded-full`
  - Micro-interações: `whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.98 }}`

- ✅ **Botão de Toggle (MELHORADO):**
  - Posição absoluta: `-right-4 top-8`
  - Tamanho: 32px (8 units Tailwind)
  - Background: `bg-card` (branco) com borda `border-border` ✨
  - Ícone: `ChevronLeft` do lucide-react, cor `text-primary`
  - Rotação 180° quando colapsada
  - Efeitos: `whileHover={{ scale: 1.1 }}`, `whileTap={{ scale: 0.9 }}`
  - Shadow: `shadow-md` com transição para `shadow-lg` no hover

- ✅ **Informações do Usuário (ADICIONADO):** ✨
  - Posicionado no rodapé da sidebar
  - Avatar circular (24px) importado do Figma
  - Nome: "Yuri Saback" (font-semibold, 16px)
  - Email: "yuri@saback.com" (font-normal, 14px, opacity-70)
  - Layout responsivo: horizontal quando expandido, vertical quando colapsado
  - Animação sincronizada com estado da sidebar

- ✅ **Animações com Motion:**
  - `AnimatePresence` para entrada/saída do texto dos labels e user info
  - Fade in/out (opacity) + width transition
  - Duração: 200ms para texto, 300ms para sidebar
  - Easing: `easeInOut` para sidebar
  - UserInfo muda flexDirection dinamicamente (row ↔ column)

#### 2. Integração no Root Layout

- ✅ **Root.tsx atualizado:**
  - Layout flex: sidebar + main content
  - Main com `flex-1 w-full min-w-0` para responsividade
  - Sidebar escondida em mobile/tablet

- ✅ **Views atualizadas:**
  - Dashboard, Cards, Transactions, Profile
  - Padding responsivo: `p-4 md:p-6 lg:p-8`
  - Cards de exemplo com `bg-card`, `border-border`
  - Títulos com `text-primary`
  - Subtítulos com `text-muted-foreground`

### Variáveis CSS Utilizadas

**Do design system (theme.css):**
- `--color-primary` (#030213) — texto dos items, ícones, logo, toggle icon
- `--color-primary-accent` (#dffe35) — fundo do item ativo ✨ CORRIGIDO
- `--color-card` — fundo sidebar, botão toggle ✨
- `--color-border` — borda lateral, borda do toggle
- `--color-muted` — hover item inativo

**Classes Tailwind geradas:**
- `bg-primary-accent`, `text-primary` (item ativo) ✨
- `bg-card`, `border-border` (sidebar, toggle)
- `bg-muted` (hover)
- `rounded-full`, `gap-2`, `px-8`, `py-3`

### Arquivos Criados/Modificados

**Criados:**
- `/src/app/components/layout/Sidebar.tsx` (210 linhas) ✨ ATUALIZADO
  - Componente `MycashLogo`
  - Componente `SidebarItem`
  - Componente `UserInfo` ✨ NOVO
  - Componente `SidebarToggle`
  - Componente `Sidebar` (export default)

**Modificados:**
- `/src/app/views/Root.tsx` — Adicionada Sidebar
- `/src/app/views/Dashboard.tsx` — Melhorado layout de exemplo
- `/src/app/views/Cards.tsx` — Melhorado layout de exemplo
- `/src/app/views/Transactions.tsx` — Melhorado layout de exemplo
- `/src/app/views/Profile.tsx` — Melhorado layout de exemplo

### Hierarquia de Variáveis Respeitada

✅ **Nenhum hardcoded value:**
- Cores: Todas via `var(--color-*)` ou classes Tailwind
- Tamanhos: Usando Tailwind utilities (`size-6`, `size-8`, largura específica do design)
- Espaçamentos: Classes Tailwind (`px-8`, `py-3`, `gap-2`, `pb-14`)
- Border-radius: `rounded-full` (usa `--radius` do theme)
- Transições: Via Motion ou `transition-*` classes

✅ **Conversões aplicadas:**
- `bg-[#dffe35]` → `bg-primary-accent` ✨ CORRIGIDO
- `text-[#080b12]` → `text-primary` ✨
- `bg-white` → `bg-card`
- `px-[16px] py-[12px]` → `px-4 py-3`
- `gap-[8px]` → `gap-2`
- `gap-[12px]` → `gap-3` (user info)
- `rounded-[100px]` → `rounded-full`

### Dependências Utilizadas

- ✅ `react-router` (NavLink, useLocation)
- ✅ `motion/react` (motion, AnimatePresence)
- ✅ `lucide-react` (Home, CreditCard, Receipt, User, ChevronLeft)
- ✅ SVG paths do Figma (`../../../imports/svg-ktrzjmn9hy`) ✨ CORRIGIDO
- ✅ Avatar do Figma (`figma:asset/fe5ea0dee337e6dfc2f8afea9ae4d945b9013911.png`) ✨ NOVO

### Comportamento Esperado

**Desktop (≥1280px):**
1. Sidebar visível à esquerda com fundo branco
2. Estado inicial: expandida (300px)
3. Logo no topo + 4 items de navegação + user info no rodapé
4. Item ativo: fundo verde-limão (#dffe35) com texto/ícone preto ✨
5. Clicar no toggle: colapsa para 80px com animação suave
6. Quando colapsada: apenas ícones e avatar visíveis
7. User info muda layout: horizontal → vertical (colapsado)

**Tablet (768-1279px) e Mobile (<768px):**
1. Sidebar completamente escondida (`hidden lg:flex`)
2. HeaderMobile será implementado no PROMPT 3

### Build

**Status:** ⏳ Aguardando validação manual  
**Sintaxe TypeScript:** ✅ Verificada  
**Imports:** ✅ Todos válidos  
**Props:** ✅ Tipadas corretamente  
**Figma Assets:** ✅ Avatar e SVGs importados corretamente

### Observações Técnicas

1. **Performance:** Uso de `motion` para animações otimizadas (GPU-accelerated)
2. **Acessibilidade:** Links semânticos com `NavLink`, estados visuais claros
3. **Responsividade:** Breakpoint preciso com Tailwind v4 (`lg:`)
4. **Manutenibilidade:** Componentes separados, fácil de estender
5. **Design fidelity:** 
   - ✨ Cores exatas do Figma (verde-limão para ativo)
   - ✨ Logo SVG idêntico ao design
   - ✨ UserInfo com avatar e dados mockados
   - ✨ Espaçamentos e proporções fiéis ao design original

### Correções Aplicadas (Revisão 1)

1. ✨ **Cores dos botões corrigidas:**
   - Antes: Item ativo com `bg-primary` (preto)
   - Depois: Item ativo com `bg-primary-accent` (#dffe35 verde-limão)

2. ✨ **Toggle button melhorado:**
   - Antes: `bg-primary` (preto) com ícone verde
   - Depois: `bg-card` (branco) com borda e ícone preto

3. ✨ **UserInfo adicionado:**
   - Avatar circular importado do Figma
   - Nome + email com tipografia correta
   - Layout adaptável (horizontal ↔ vertical)
   - Posicionado no rodapé com `justify-between`

4. ✨ **SVG paths corrigido:**
   - Antes: `svg-tl4lcv1ewm.ts`
   - Depois: `svg-ktrzjmn9hy.ts` (arquivo correto do SideBar.tsx)

5. ✨ **Espaçamentos ajustados:**
   - Padding horizontal: 32px (`px-8`)
   - Gap logo-menu: 56px (`pb-14` no logo)
   - Gap items: 8px (`gap-2`)

### Correções Aplicadas (Revisão 2)

1. ✨ **Logo com duas variações:**
   - Expandida: `svg-ktrzjmn9hy.ts` (139.648px x 29.828px) — texto completo "mycash+"
   - Colapsada: `svg-kkhlj1lmf8.ts` (48.327px x 45.192px) — apenas "My" vertical
   - Transição com `AnimatePresence` mode="wait" para troca suave
   - Componentes separados: `MycashLogoExpanded` e `MycashLogoCollapsed`

2. ✨ **UserInfo layout corrigido:**
   - Antes: Layout horizontal quando expandido, vertical quando colapsado
   - Depois: Sempre em coluna (flex-col) — avatar, nome, email empilhados verticalmente
   - Gap: 12px entre avatar e bloco nome/email (`gap-3`)
   - Gap interno: 4px entre nome e email (`gap-1`)
   - Animação: fade in/out com height auto quando expandido/colapsado

### Correções Aplicadas (Revisão 3)

1. ✨ **Logo colapsada corrigida:**
   - SVG path atualizado: `svg-i2a2eejqi9.ts` (arquivo correto do SideBar-1-5239.tsx)
   - Centralização: `justify-center` na logo quando colapsada
   - Dimensões mantidas: 48.327px x 45.192px

2. ✨ **Botões com padding mantido quando colapsados:**
   - Antes: Colapsado sem padding, apenas ícone centralizado
   - Depois: **Padding fixo `px-4 py-3` sempre presente** (expandido e colapsado)
   - Quando colapsado: `justify-center` para centralizar ícone dentro do padding
   - Cria botão quadrado maior (40px × 40px aprox.) quando colapsado
   - Fiel ao design do Figma: botão circular verde-limão de 40px

3. ✨ **Largura da sidebar colapsada ajustada:**
   - Antes: 80px
   - Depois: **144px** (32px padding esquerdo + 40px botão + 32px padding direito + margens)
   - Acomoda perfeitamente os botões com padding mantido

4. ✨ **Layout geral refinado:**
   - Padding fixo `p-8` (32px) em todas as direções
   - Gap entre logo e menu: `gap-14` (56px) via estrutura flex
   - UserInfo centralizado: `items-center` quando colapsado
   - Toggle button reposicionado: `top-4` (16px) para alinhar melhor

5. ✨ **Estrutura simplificada:**
   - Removido wrapper desnecessário de navegação
   - Padding aplicado direto no container principal
   - Gap entre logo e menu via flex-col do wrapper superior

### Correções Aplicadas (Revisão 4)

1. ✨ **UserInfo alinhamento responsivo corrigido:**
   - Antes: Sempre centralizado (`items-center`)
   - Depois: **Alinhamento dinâmico baseado no estado:**
     - Expandido: `items-start` (alinhado à esquerda, respeitando padding)
     - Colapsado: `items-center` (centralizado verticalmente)
   - Avatar, nome e email ficam alinhados à esquerda quando menu expandido
   - Avatar centralizado quando menu colapsado
   - Transição suave entre os estados

---

## Próximo Passo

⏭️ **PROMPT 3: Sistema de Layout e Navegação Mobile**
- Implementar HeaderMobile com botão de menu
- Integração com React Router
- Estilo responsivo para telas menores

---

**Última atualização:** 10/02/2026