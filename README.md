# mycash+ - Dashboard de Gestão Financeira Familiar

Sistema de gestão financeira familiar desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Roteamento SPA
- **Supabase** - Backend (configuração futura)
- **Recharts** - Gráficos e visualizações

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens, ícones, fontes
├── components/       # Componentes React organizados por domínio
│   ├── layout/      # Componentes de layout (Sidebar, Header)
│   ├── dashboard/   # Componentes específicos do dashboard
│   ├── ui/          # Componentes UI genéricos
│   └── common/      # Componentes comuns
├── contexts/        # Contexts React para estado global
├── hooks/           # Custom hooks
├── pages/           # Componentes de página
├── services/        # Integração com APIs (Supabase)
├── styles/          # Estilos globais e configuração Tailwind
├── types/           # Definições de tipos TypeScript
├── utils/           # Funções utilitárias
└── constants/       # Constantes globais
```

## 🎨 Design System

O projeto utiliza um design system baseado em variáveis CSS do Figma:

- **Cores Semânticas**: `--color-primary`, `--color-background-primary`, etc.
- **Cores Primitivas**: `--gray-900`, `--lime-500`, etc.
- **Espaçamentos**: Tokens semânticos e primitivos
- **Tipografia**: Escala tipográfica responsiva
- **Breakpoints**: Mobile (<768px), Tablet (≥768px), Desktop (≥1280px), Wide (≥1920px)

## 📱 Responsividade

O projeto é **mobile-first** e totalmente responsivo:

- **Mobile**: < 768px
- **Tablet**: ≥ 768px e < 1280px
- **Desktop**: ≥ 1280px e < 1920px
- **Wide/4K**: ≥ 1920px

## 🔧 Configuração

### Variáveis de Ambiente

Copie `.env.example` para `.env` e configure as variáveis do Supabase:

```bash
cp .env.example .env
```

## 📝 Tipos Principais

- `Transaction` - Transações financeiras (receitas/despesas)
- `Goal` - Objetivos financeiros
- `CreditCard` - Cartões de crédito
- `BankAccount` - Contas bancárias
- `FamilyMember` - Membros da família

## 🛣️ Rotas

- `/` ou `/dashboard` - Dashboard principal
- `/cards` - Gestão de cartões
- `/transactions` - Transações detalhadas
- `/profile` - Perfil do usuário

## 📚 Documentação

Consulte `DOCUMENTATION.md` para detalhes completos sobre a implementação e sequência de prompts.

## ⚠️ Nota Importante

Este projeto **NÃO utiliza localStorage ou sessionStorage**. Todo o estado é gerenciado via React state (useState, useReducer) e será integrado com Supabase no futuro para persistência real.

## 📄 Licença

Este projeto é privado e confidencial.
