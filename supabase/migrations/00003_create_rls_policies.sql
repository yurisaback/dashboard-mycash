-- mycash+ v2.0 — Row Level Security (RLS)
-- Cada usuário acessa apenas seus próprios dados (user_id = auth.uid())
-- Depende de: 00002_create_tables.sql

-- ============================================
-- USERS
-- ============================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY users_select ON users
  FOR SELECT USING (id = auth.uid());

CREATE POLICY users_insert ON users
  FOR INSERT WITH CHECK (id = auth.uid());

CREATE POLICY users_update ON users
  FOR UPDATE USING (id = auth.uid());

-- ============================================
-- FAMILY_MEMBERS
-- ============================================
ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY family_members_select ON family_members
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY family_members_insert ON family_members
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY family_members_update ON family_members
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY family_members_delete ON family_members
  FOR DELETE USING (user_id = auth.uid());

-- ============================================
-- CATEGORIES
-- ============================================
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY categories_select ON categories
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY categories_insert ON categories
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY categories_update ON categories
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY categories_delete ON categories
  FOR DELETE USING (user_id = auth.uid());

-- ============================================
-- ACCOUNTS
-- ============================================
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

CREATE POLICY accounts_select ON accounts
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY accounts_insert ON accounts
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY accounts_update ON accounts
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY accounts_delete ON accounts
  FOR DELETE USING (user_id = auth.uid());

-- ============================================
-- TRANSACTIONS
-- ============================================
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY transactions_select ON transactions
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY transactions_insert ON transactions
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY transactions_update ON transactions
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY transactions_delete ON transactions
  FOR DELETE USING (user_id = auth.uid());

-- ============================================
-- RECURRING_TRANSACTIONS
-- ============================================
ALTER TABLE recurring_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY recurring_transactions_select ON recurring_transactions
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY recurring_transactions_insert ON recurring_transactions
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY recurring_transactions_update ON recurring_transactions
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY recurring_transactions_delete ON recurring_transactions
  FOR DELETE USING (user_id = auth.uid());

-- ============================================
-- GOALS
-- ============================================
ALTER TABLE goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY goals_select ON goals
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY goals_insert ON goals
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY goals_update ON goals
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY goals_delete ON goals
  FOR DELETE USING (user_id = auth.uid());
