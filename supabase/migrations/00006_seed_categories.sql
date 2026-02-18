-- mycash+ v2.0 — Seed de categorias padrão
-- NOTA: Categorias são por usuário. Este seed insere categorias GLOBAIS
-- que serão copiadas para cada novo usuário no primeiro acesso,
-- ou você pode criar categorias via trigger no handle_new_user.
-- Por simplicidade, categorias serão criadas no primeiro login do app.
-- Este arquivo pode ser usado como referência ou para um usuário seed.

-- Categorias de RECEITA (INCOME)
-- Exemplo para user_id = '00000000-0000-0000-0000-000000000000' (substituir por user real)
-- INSERT INTO categories (user_id, name, icon, type, color) VALUES
--   ('USER_ID', 'Salário', '💰', 'INCOME', '#22c55e'),
--   ('USER_ID', 'Freelance', '💼', 'INCOME', '#3b82f6'),
--   ('USER_ID', 'Investimentos', '📈', 'INCOME', '#8b5cf6'),
--   ('USER_ID', 'Aluguel Recebido', '🏠', 'INCOME', '#f59e0b'),
--   ('USER_ID', 'Outros', '📌', 'INCOME', '#6b7280');

-- Categorias de DESPESA (EXPENSE)
-- INSERT INTO categories (user_id, name, icon, type, color) VALUES
--   ('USER_ID', 'Alimentação', '🍔', 'EXPENSE', '#ef4444'),
--   ('USER_ID', 'Transporte', '🚗', 'EXPENSE', '#f97316'),
--   ('USER_ID', 'Moradia', '🏠', 'EXPENSE', '#eab308'),
--   ('USER_ID', 'Saúde', '💊', 'EXPENSE', '#ec4899'),
--   ('USER_ID', 'Educação', '📚', 'EXPENSE', '#6366f1'),
--   ('USER_ID', 'Lazer', '🎮', 'EXPENSE', '#14b8a6'),
--   ('USER_ID', 'Compras', '🛒', 'EXPENSE', '#a855f7'),
--   ('USER_ID', 'Contas', '📄', 'EXPENSE', '#64748b'),
--   ('USER_ID', 'Outros', '📌', 'EXPENSE', '#6b7280');

-- As categorias serão criadas dinamicamente no primeiro acesso do usuário
-- via service/categories.service.ts usando as constantes do constants/index.ts
