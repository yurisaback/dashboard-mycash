-- mycash+ v2.0 — Enums
-- Execute no Supabase SQL Editor ou via supabase db push

-- Transaction
CREATE TYPE transaction_type AS ENUM ('INCOME', 'EXPENSE');

-- Account
CREATE TYPE account_type AS ENUM ('CHECKING', 'SAVINGS', 'CREDIT_CARD');

-- Recurrence
CREATE TYPE recurrence_frequency AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- Transaction Status
CREATE TYPE transaction_status AS ENUM ('PENDING', 'COMPLETED', 'CANCELLED');

-- Goal (existente no app)
CREATE TYPE goal_status AS ENUM ('active', 'completed', 'cancelled');
