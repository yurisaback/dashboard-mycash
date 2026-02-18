# Supabase — mycash+ v2.0

## Migrations

Execute as migrations **nessa ordem** no [SQL Editor](https://supabase.com/dashboard/project/_/sql) do Supabase:

1. `00001_create_enums.sql`
2. `00002_create_tables.sql`
3. `00003_create_rls_policies.sql`
4. `00004_handle_new_user_trigger.sql`
5. `00005_storage_setup.sql`

## Storage Buckets

Crie os buckets no Dashboard → Storage → New bucket:

| Bucket         | Public | Limite | Tipos permitidos          |
|----------------|--------|--------|---------------------------|
| avatars        | Sim    | 5MB    | image/jpeg, png, gif, webp |
| account-logos  | Sim    | 1MB    | image/jpeg, png, svg      |
| documents      | Não    | 10MB   | pdf, jpeg, png            |
| media          | Não    | 50MB   | images, mp4, webm         |

**Estrutura de pastas:** `{user_id}/arquivo.ext` (ex: `abc123/profile.png`)

## Variáveis de ambiente

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua_anon_key
```

## Autenticação

- **Sign up:** `supabase.auth.signUp({ email, password, options: { data: { name } } })`
- **Sign in:** `supabase.auth.signInWithPassword({ email, password })`
- **Sign out:** `supabase.auth.signOut()`
- **Session:** `supabase.auth.getSession()` / `onAuthStateChange`

Ao cadastrar, o trigger `handle_new_user` cria automaticamente o registro em `public.users`.
