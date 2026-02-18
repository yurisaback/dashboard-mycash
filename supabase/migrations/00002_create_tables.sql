-- mycash+ v2.0 — Tabelas
-- Depende de: 00001_create_enums.sql

-- ============================================
-- 👤 USUÁRIOS (perfil, sincronizado com auth.users)
-- ============================================
CREATE TABLE users (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email      TEXT NOT NULL UNIQUE,
  name       TEXT NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- 👨‍👩‍👧‍👦 MEMBROS DA FAMÍLIA
-- ============================================
CREATE TABLE family_members (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name           TEXT NOT NULL,
  role           TEXT NOT NULL,
  avatar_url     TEXT,
  monthly_income DECIMAL(12, 2) NOT NULL DEFAULT 0,
  color          TEXT NOT NULL DEFAULT '#3247FF',
  is_active      BOOLEAN NOT NULL DEFAULT true,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_family_members_user_id ON family_members(user_id);

-- ============================================
-- 🏷️ CATEGORIAS
-- ============================================
CREATE TABLE categories (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id   UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name      TEXT NOT NULL,
  icon      TEXT NOT NULL DEFAULT '📌',
  type      transaction_type NOT NULL,
  color     TEXT NOT NULL DEFAULT '#3247FF',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_categories_user_id_type ON categories(user_id, type);

-- ============================================
-- 💳 CONTAS E CARTÕES (UNIFICADO)
-- ============================================
CREATE TABLE accounts (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type           account_type NOT NULL,
  name           TEXT NOT NULL,
  bank           TEXT NOT NULL,
  last_digits    TEXT,
  holder_id      UUID NOT NULL REFERENCES family_members(id) ON DELETE RESTRICT,
  -- Conta corrente/poupança
  balance        DECIMAL(12, 2) NOT NULL DEFAULT 0,
  -- Cartão de crédito
  credit_limit   DECIMAL(12, 2),
  current_bill   DECIMAL(12, 2) NOT NULL DEFAULT 0,
  due_day        INT CHECK (due_day IS NULL OR (due_day >= 1 AND due_day <= 31)),
  closing_day    INT CHECK (closing_day IS NULL OR (closing_day >= 1 AND closing_day <= 31)),
  theme          TEXT DEFAULT 'black',
  logo_url       TEXT,
  -- Metadata
  color          TEXT NOT NULL DEFAULT '#3247FF',
  is_active      BOOLEAN NOT NULL DEFAULT true,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_accounts_user_id_type ON accounts(user_id, type);
CREATE INDEX idx_accounts_holder_id ON accounts(holder_id);

-- ============================================
-- 💰 TRANSAÇÕES
-- ============================================
CREATE TABLE transactions (
  id                       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                  UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type                     transaction_type NOT NULL,
  amount                   DECIMAL(12, 2) NOT NULL,
  description              TEXT NOT NULL,
  date                     DATE NOT NULL,
  category_id              UUID REFERENCES categories(id) ON DELETE SET NULL,
  account_id               UUID REFERENCES accounts(id) ON DELETE SET NULL,
  member_id                UUID REFERENCES family_members(id) ON DELETE SET NULL,
  installment_number       INT CHECK (installment_number IS NULL OR (installment_number >= 1 AND installment_number <= 12)),
  total_installments       INT NOT NULL DEFAULT 1 CHECK (total_installments >= 1 AND total_installments <= 12),
  parent_transaction_id    UUID REFERENCES transactions(id) ON DELETE CASCADE,
  is_recurring             BOOLEAN NOT NULL DEFAULT false,
  recurring_transaction_id UUID,
  status                   transaction_status NOT NULL DEFAULT 'COMPLETED',
  notes                    TEXT,
  created_at               TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at               TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_transactions_user_id_date ON transactions(user_id, date);
CREATE INDEX idx_transactions_category_id ON transactions(category_id);
CREATE INDEX idx_transactions_account_id ON transactions(account_id);
CREATE INDEX idx_transactions_member_id ON transactions(member_id);
CREATE INDEX idx_transactions_parent ON transactions(parent_transaction_id);
CREATE INDEX idx_transactions_status ON transactions(status);

-- ============================================
-- 💫 TRANSAÇÕES RECORRENTES (TEMPLATE)
-- ============================================
CREATE TABLE recurring_transactions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type        transaction_type NOT NULL DEFAULT 'EXPENSE',
  amount      DECIMAL(12, 2) NOT NULL,
  description TEXT NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  account_id  UUID REFERENCES accounts(id) ON DELETE SET NULL,
  member_id   UUID REFERENCES family_members(id) ON DELETE SET NULL,
  frequency   recurrence_frequency NOT NULL,
  day_of_month INT CHECK (day_of_month IS NULL OR (day_of_month >= 1 AND day_of_month <= 31)),
  day_of_week  INT CHECK (day_of_week IS NULL OR (day_of_week >= 0 AND day_of_week <= 6)),
  start_date   DATE NOT NULL,
  end_date     DATE,
  is_active    BOOLEAN NOT NULL DEFAULT true,
  notes        TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE transactions
  ADD CONSTRAINT fk_recurring_transaction
  FOREIGN KEY (recurring_transaction_id) REFERENCES recurring_transactions(id) ON DELETE SET NULL;

CREATE INDEX idx_recurring_user_active ON recurring_transactions(user_id, is_active);
CREATE INDEX idx_recurring_category ON recurring_transactions(category_id);
CREATE INDEX idx_recurring_account ON recurring_transactions(account_id);

-- ============================================
-- 🎯 OBJETIVOS (Goals)
-- ============================================
CREATE TABLE goals (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name           TEXT NOT NULL,
  description    TEXT,
  target_amount  DECIMAL(12, 2) NOT NULL,
  current_amount DECIMAL(12, 2) NOT NULL DEFAULT 0,
  deadline       DATE NOT NULL,
  status         goal_status NOT NULL DEFAULT 'active',
  member_id      UUID REFERENCES family_members(id) ON DELETE SET NULL,
  category       TEXT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_goals_user_id ON goals(user_id);
