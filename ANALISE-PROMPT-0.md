# ✅ PROMPT 0: Análise Completa do Projeto mycash+ — CONCLUÍDO

**Data**: 09/02/2026  
**Status**: ✅ CONCLUÍDO  
**Build**: N/A (análise textual)

---

## 📚 PRÉ-EXECUÇÃO

✓ Rules relidas e aplicadas  
✓ Figma consultado e analisado (via descrição da imagem fornecida)  
✓ Link do Figma: https://www.figma.com/design/4E99pXeMvbGTG7KaCJDwPV/Workshop---Do-figma-MCP-ao-Cursor-AI-v.3--Community-?node-id=2021-3854&t=QQsMbEysvEjrqEnl-4  
✓ Hierarquia de variáveis verificada

---

## 📦 ANÁLISE IMPLEMENTADA

### 1. Componentes Visuais Identificados

#### A. Componentes de Layout Global

**Sidebar (Barra Lateral Esquerda - Desktop ≥1280px):**
- `Logo`: "Mycash+" no topo
- `NavigationMenu`: Links principais
  - "Home" (ativo, destacado em amarelo neon)
  - "Cartões"
  - "Transações" (inferido)
  - "Perfil" (inferido)
- `UserProfileSnippet`: No rodapé da sidebar
  - Nome: "Yuri Saback"
  - Email: "yurisaback@gmail.com"

**TopBar / Header (Cabeçalho Superior - Desktop):**
- `HamburgerMenuIcon`: Ícone de menu hamburger (à esquerda do campo de busca)
- `SearchInput`: Campo de pesquisa com placeholder "Pesquisar"
- `FilterIcon`: Ícone de filtro ao lado do campo de busca
- `DatePicker`: Exibe período "01 Jan - 31 Jan 2026"
- `UserAvatars`: Múltiplas fotos de perfil de usuários (multi-usuário)
- `AddButton`: Ícone de "+" em círculo (adicionar usuários/ações)
- `NewTransactionButton`: Botão primário "Nova transação" (canto superior direito)

#### B. Componentes da Área de Conteúdo Principal (Dashboard)

**OverviewCardsGrid (Primeira linha - Grid de 4 cards):**
- `OverviewCard` (4 instâncias):
  - Aluguel (30%)
  - Alimentação
  - Mercado
  - Academia
- Cada card contém:
  - `CircularProgressIndicator`: Círculo com porcentagem
  - `CategoryLabel`: Nome da categoria
  - `AmountDisplay`: Valor financeiro (ex: "R$ 4.000,00")

**FinancialSummaryCardsGrid (Segunda linha - Grid de 3 cards):**
- `FinancialSummaryCard` (3 instâncias):
  - Saldo total (R$ 2.000,00)
  - Receitas
  - Despesas
- Cada card contém:
  - `Icon`: Ícones semânticos (cifrão, setas)
  - `Label`: Nome do resumo
  - `AmountDisplay`: Valor financeiro

**CardsAndAccountsList:**
- `CardAccountItem` (3 instâncias):
  - Nubank (R$ 5.245,00, Vence dia 10, ****9999)
  - Inter
  - Picpay
- Cada item contém:
  - `BankLogo`: Ícone do banco
  - `AccountName`: Nome do banco
  - `Balance`: Saldo
  - `DueDate`: Data de vencimento
  - `MaskedCardNumber`: Número mascarado
  - `ActionIcons`: Ícones de "+" e seta

**FinancialFlowChartCard:**
- `ChartTitle`: "Fluxo financeiro"
- `Legend`: "Receitas" (verde) e "Despesas" (vermelho)
- `AreaChart`: Gráfico de área
  - Eixo Y: Valores financeiros
  - Eixo X: Meses (JAN a DEZ)
  - Duas séries: Receitas e Despesas

**UpcomingExpensesListCard:**
- `CardTitle`: "Próximas despesas"
- `AddItemButton`: Ícone de "+" para adicionar nova despesa
- `ExpenseItem` (múltiplos):
  - "Conta de luz" (Vence dia 21/01 - Crédito Nubank ****5897, R$ 154,00)
  - Outras despesas...
- Cada item contém:
  - `ExpenseDescription`: Descrição da despesa
  - `DueDateAndAccount`: Data de vencimento e conta
  - `Amount`: Valor
  - `StatusIcon`: Ícone de check verde

**DetailedStatementTableCard:**
- `TableTitle`: "Extrato detalhado"
- `StatementSearchInput`: Campo de busca "Buscar lançamentos"
- `DropdownFilter`: Dropdown "Despesas" para filtrar
- `Table`:
  - `TableHeaders`: Membro, Datas, Descrição, Categorias, Conta/cartão, Parcelas, Valor
  - `TableRow` (múltiplas linhas):
    - `MemberAvatar`: Foto de perfil pequena
    - `Date`: Data da transação
    - `Description`: Descrição (ex: "Conta de água")
      - Ícones de seta (vermelha para despesa, verde para receita)
    - `Category`: Categoria (ex: "Manutenção")
    - `Account`: Conta/cartão (ex: "Conta corrente")
    - `Installments`: Parcelas (ex: "1/1")
    - `Value`: Valor (ex: "R$ 100,00")
- `Pagination`:
  - Texto: "Mostrando 1 a 5 de 17"
  - Botões: Setas e números (1 2 3 4 5)

---

### 2. Variáveis Semânticas e Primitivas do Design System

#### A. Cores

**Semânticas (Inferidas - aguardando confirmação do design system):**
- `--color-primary`: Amarelo neon (#DFFF00 ou similar) - usado no menu "Home" ativo
- `--color-background-primary`: Fundo principal da aplicação (branco)
- `--color-background-secondary`: Fundo dos cards (branco ligeiramente mais escuro ou com sombra)
- `--color-text-primary`: Texto principal - títulos, valores financeiros (preto/cinza escuro)
- `--color-text-secondary`: Texto auxiliar - datas de vencimento, emails (cinza médio)
- `--color-text-tertiary`: Placeholder text (cinza mais claro)
- `--color-border-default`: Bordas de campos de input, separadores (cinza claro)
- `--color-success`: Usado para Receitas no gráfico, ícones de check (verde)
- `--color-danger`: Usado para Despesas no gráfico, setas de descrição de despesa (vermelho/rosa)
- `--color-icon-default`: Cor padrão para ícones (cinza escuro)

**Primitivas (Inferidas com base nas Project Rules - padrão `--gray-X`):**
- `--gray-900`: Textos muito escuros/quase pretos
- `--gray-700`: Textos principais, rótulos
- `--gray-500`: Textos secundários, placeholders
- `--gray-200`: Bordas, linhas divisórias, backgrounds leves
- `--gray-50`: Backgrounds de cards ou seções
- `--lime-500`: Para o destaque amarelo neon (se não houver `primary` definido)
- `--green-500`: Para a cor de sucesso
- `--red-500`: Para a cor de perigo/despesa

#### B. Espaçamentos

**Semânticas (Inferidas):**
- `--spacing-page-padding-x`: Padding horizontal padrão do conteúdo principal
  - Mobile: `px-4` (16px)
  - Tablet: `px-6` (24px)
  - Desktop: `px-8` (32px)
- `--spacing-card-padding`: Padding interno dos cartões
- `--spacing-gap-md`: Espaçamento entre itens dentro de um card ou entre pequenos componentes
- `--spacing-gap-lg`: Espaçamento entre cartões ou seções maiores

**Primitivas (Inferidas com base em Tailwind):**
- `--spacing-xs`: 4px ou 8px (espaçamento entre ícone e texto pequeno)
- `--spacing-sm`: 12px ou 16px (padding interno de inputs pequenos)
- `--spacing-md`: 24px (padding vertical de cartões, ou `px-6` do tablet)
- `--spacing-lg`: 32px (padding horizontal `px-8` do desktop)
- `--spacing-xl`: 48px ou mais (altura mínima de inputs no mobile)

#### C. Tipografia

**Font Family:** Sans-serif moderna e limpa (ex: Inter, Rubik, ou similar)

**Semânticas (Inferidas):**
- `--font-size-heading-lg`: Títulos de seção (ex: "Fluxo financeiro")
- `--font-size-heading-md`: Subtítulos (ex: "Saldo total", "Cards & Contas")
- `--font-size-body-lg`: Valores financeiros principais
- `--font-size-body-md`: Texto padrão, labels de cards, items de tabela
- `--font-size-body-sm`: Texto menor, datas de vencimento, descrições auxiliares
- `--font-weight-bold`: Títulos, valores principais
- `--font-weight-semibold`: Labels importantes
- `--font-weight-normal`: Texto padrão

**Primitivas (Inferidas com base em Tailwind):**
- `text-xs`: Muito pequeno (ex: números de página)
- `text-sm`: Textos auxiliares (ex: datas de vencimento)
- `text-base`: Texto padrão, 16px (regra de input mobile)
- `text-lg`: Títulos de cartão menores
- `text-xl`, `text-2xl`: Títulos maiores, valores principais
- `font-normal`, `font-semibold`, `font-bold`

#### D. Shapes e Bordas

- `--border-radius-md`: Arredondamento padrão para cartões e botões (8-12px)
- `--border-radius-full`: Para avatares e indicadores de progresso circular
- `--border-width-sm`: Largura de borda para inputs ou divisores
- `--shadow-sm` / `--shadow-md`: Sombras leves para os cartões, dando profundidade

---

### 3. Estrutura de Navegação Analisada

#### Desktop (≥ 1280px)

**Sidebar:**
- **Visível por padrão**: Sidebar presente no lado esquerdo
- **Estados**:
  - `Expanded` (padrão): Larga, com texto "Home", "Cartões", etc. (estado mostrado na imagem)
  - `Collapsed`: Estreita, apenas ícones (acionado por clique no hamburger ou lógica de breakpoint)
- **Comportamento**: A sidebar **empurra o conteúdo** principal, não o sobrepõe
- **Conteúdo**:
  - Logo no topo
  - Menu de navegação
  - Perfil do usuário no rodapé

#### Mobile e Tablet (< 1280px)

**Header Mobile:**
- **Aparição**: Sidebar **NÃO renderiza** em mobile/tablet
- **Conteúdo**:
  - Botão de menu (ícone de hambúrguer) que abre um overlay/drawer
  - Ações principais: Botão "Nova transação" (ou versão mobile)
  - Campo de busca adaptado (opcional)

**Drawer:**
- Overlay flutuante que aparece ao clicar no botão de menu
- Contém os mesmos itens de navegação da sidebar
- Fecha ao clicar fora ou selecionar um item

**Regra Crítica:**
- ❌ **NUNCA renderizar Sidebar + Header Mobile juntos**
- Isso implica em lógica condicional para renderizar um ou outro baseado no breakpoint

#### Transição entre Seções

- Aplicação deve ser SPA (Single Page Application)
- Roteamento (ex: React Router) para gerenciar rotas:
  - `/dashboard` (ou `/`)
  - `/cards`
  - `/transactions`
  - `/profile`
- Navegação via sidebar (desktop) ou drawer (mobile) muda o conteúdo da área principal

---

### 4. Resumo da Arquitetura Proposta

#### A. Estrutura de Pastas

```
src/
├── App.tsx                    // Componente raiz com roteamento
├── main.tsx                   // Ponto de entrada (Vite)
├── assets/                    // Imagens, ícones, fontes
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/                // Componentes reutilizáveis
│   ├── layout/                // Componentes de layout globais
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── SidebarItem.tsx
│   │   │   └── SidebarCollapsed.tsx
│   │   ├── Header/
│   │   │   ├── Header.tsx          // Header Desktop
│   │   │   └── MobileHeader.tsx    // Header Mobile
│   │   ├── Drawer/
│   │   │   └── Drawer.tsx
│   │   └── MainContentWrapper.tsx  // Wrapper para conteúdo principal
│   ├── ui/                    // Componentes UI genéricos
│   │   ├── Button/
│   │   │   └── Button.tsx
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── SearchInput.tsx
│   │   ├── Card/
│   │   │   └── Card.tsx
│   │   ├── Dropdown/
│   │   │   └── Dropdown.tsx
│   │   ├── Avatar/
│   │   │   └── Avatar.tsx
│   │   ├── CircularProgress/
│   │   │   └── CircularProgress.tsx
│   │   ├── Pagination/
│   │   │   └── Pagination.tsx
│   │   └── ...
│   ├── dashboard/             // Componentes específicos do dashboard
│   │   ├── OverviewCard.tsx
│   │   ├── OverviewCardsGrid.tsx
│   │   ├── FinancialSummaryCard.tsx
│   │   ├── FinancialSummaryGrid.tsx
│   │   ├── CardsAndAccountsList.tsx
│   │   ├── CardAccountItem.tsx
│   │   ├── FinancialFlowChart.tsx
│   │   ├── UpcomingExpensesList.tsx
│   │   ├── ExpenseItem.tsx
│   │   ├── DetailedStatementTable.tsx
│   │   └── TableRow.tsx
│   └── common/                // Componentes menores e muito genéricos
│       ├── Icon.tsx
│       └── Badge.tsx
├── pages/                     // Componentes que representam páginas
│   ├── DashboardPage.tsx
│   ├── CardsPage.tsx
│   ├── TransactionsPage.tsx
│   └── ProfilePage.tsx
├── hooks/                     // Lógica de negócio reutilizável
│   ├── useAuth.ts
│   ├── useTransactions.ts
│   ├── useCards.ts
│   ├── useSidebarToggle.ts
│   └── useResponsive.ts
├── services/                  // Integração com APIs (Supabase)
│   ├── supabase.ts            // Cliente Supabase
│   ├── authService.ts
│   ├── transactionService.ts
│   └── cardService.ts
├── utils/                     // Funções utilitárias
│   ├── formatCurrency.ts
│   ├── maskCardNumber.ts
│   └── formatDate.ts
├── styles/                    // Configuração do Tailwind, estilos globais
│   ├── index.css              // Variáveis CSS, estilos globais
│   └── tailwind.config.js     // Configuração Tailwind com breakpoints
├── types/                     // Definições de tipos TypeScript
│   ├── transaction.ts
│   ├── card.ts
│   ├── user.ts
│   └── index.ts
└── ...
```

#### B. Hierarquia de Componentes

1. **`App`**: Componente raiz que lida com roteamento e decide qual layout global renderizar
2. **`Layout`** (ex: `DefaultLayout` ou `DashboardLayout`): Compõe `Sidebar`, `Header` (ou `MobileHeader`), e `MainContentWrapper`
3. **`Page Components`** (ex: `DashboardPage`): Recebem dados (via hooks/services) e orquestram a renderização de componentes específicos da página
4. **`Feature Components`** (ex: `FinancialFlowChart`, `DetailedStatementTable`): Componentes que representam seções maiores e complexas dentro de uma página
5. **`UI Components`** (ex: `Card`, `Button`, `Input`): Componentes "presentational" que recebem props e renderizam a UI

#### C. Estratégia de Componentização

1. **Atomic Design Principles**: Átomos → Moléculas → Organismos → Templates → Páginas
2. **Responsividade First**: Mobile-first, usando classes responsivas do Tailwind
3. **Variáveis e Tokens**: Total aderência à hierarquia de variáveis (Semântica → Primitiva → Conversão → NUNCA hardcoded)
4. **Lógica Separada**: Lógica de negócio em hooks/services, componentes focados em UI
5. **Reusabilidade**: Componentes pequenos e reutilizáveis, minimizando duplicação

---

## 🎨 TOKENS UTILIZADOS (Mapeamento Inicial)

### Semânticas (Inferidas - aguardando confirmação do design system)

**Cores:**
- `--color-primary`
- `--color-background-primary`
- `--color-background-secondary`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-tertiary`
- `--color-border-default`
- `--color-success`
- `--color-danger`
- `--color-icon-default`

**Espaçamentos:**
- `--spacing-page-padding-x`
- `--spacing-card-padding`
- `--spacing-gap-md`
- `--spacing-gap-lg`

**Tipografia:**
- `--font-size-heading-lg`
- `--font-size-heading-md`
- `--font-size-body-lg`
- `--font-size-body-md`
- `--font-size-body-sm`
- `--font-weight-bold`
- `--font-weight-semibold`
- `--font-weight-normal`

**Shapes:**
- `--border-radius-md`
- `--border-radius-full`
- `--border-width-sm`
- `--shadow-sm`
- `--shadow-md`

### Primitivas (Inferidas)

**Cores:**
- `--gray-900`, `--gray-700`, `--gray-500`, `--gray-200`, `--gray-50`
- `--lime-500`
- `--green-500`
- `--red-500`

**Espaçamentos:**
- `--spacing-xs` (4px ou 8px)
- `--spacing-sm` (12px ou 16px)
- `--spacing-md` (24px)
- `--spacing-lg` (32px)
- `--spacing-xl` (48px+)

**Tipografia:**
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`
- `font-normal`, `font-semibold`, `font-bold`

### Conversões Realizadas

- **Amarelo neon do menu "Home" ativo** → `--color-primary` / `--lime-500` (aguardando design system explícito)
- **Fundo branco dos cards** → `--color-background-secondary` / `--gray-50`
- **Texto cinza escuro** → `--color-text-primary` / `--gray-900`
- **Padding de cards (assumido 24px)** → `--spacing-md`
- **Border-radius (assumido 8-12px)** → `--border-radius-md`
- **Verde de receitas** → `--color-success` / `--green-500`
- **Vermelho de despesas** → `--color-danger` / `--red-500`

---

## 📁 ARQUIVOS CRIADOS/MODIFICADOS

- `DOCUMENTATION.md` (criado) - Documentação completa do projeto com sequência de prompts
- `ANALISE-PROMPT-0.md` (criado) - Este arquivo com análise detalhada

---

## 🔨 BUILD STATUS

✅ N/A (análise textual, sem código para compilar)

---

## 💾 COMMIT REALIZADO

N/A (aguardando implementação do código)

---

## 🤔 PRÓXIMOS PASSOS

⏭️ **PROMPT 1**: Estrutura Base do Projeto

**Objetivo:** Criar estrutura inicial do projeto React + TypeScript + Vite + Tailwind CSS + Supabase

**Tarefas principais:**
- Inicializar projeto Vite com React + TypeScript
- Configurar Tailwind CSS com breakpoints customizados
- Criar estrutura de pastas base
- Configurar arquivo de tokens CSS (variáveis)
- Configurar Supabase client básico
- Criar tipos TypeScript básicos
- Configurar roteamento (React Router)

**Comandos disponíveis:**
- "Próximo" → Avançar para PROMPT 1
- "Revisar [arquivo]" → Revisar arquivo específico
- "Refazer" → Refazer análise com correções
- "Status" → Ver progresso geral
- "Tokens" → Ver mapeamento completo de conversões

---

## ✅ Confirmação de Entendimento

🤖 **Modo Semi-Autônomo ATIVADO**

- ✅ Fonte de verdade: Figma
- ✅ Hierarquia: semântica → primitiva → conversão
- ✅ Build obrigatório antes de commit
- ✅ Nunca usar hardcoded
- ✅ Pronto para receber todos os prompts

**Confirmo entendimento completo da hierarquia de variáveis.** Esta será a espinha dorsal de toda conversão de design para código, garantindo consistência e manutenibilidade.
