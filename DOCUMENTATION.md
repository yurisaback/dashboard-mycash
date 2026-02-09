# mycash+ — Documentação do Projeto

## 📋 Progresso Geral

- [x] **PROMPT 0**: Análise e Planejamento Inicial
- [x] **PROMPT 1**: Estrutura Base e Configuração
- [ ] **PROMPT 2**: Sistema de Layout e Navegação Desktop
- [ ] **PROMPT 3**: Sistema de Layout e Navegação Mobile
- [ ] **PROMPT 4**: Context Global e Gerenciamento de Estado
- [ ] **PROMPT 5**: Cards de Resumo Financeiro
- [ ] **PROMPT 6**: Header do Dashboard com Controles
- [ ] **PROMPT 7**: Carrossel de Gastos por Categoria
- [ ] **PROMPT 8**: Gráfico de Fluxo Financeiro
- [ ] **PROMPT 9**: Widget de Cartões de Crédito
- [ ] **PROMPT 10**: Widget de Próximas Despesas
- [ ] **PROMPT 11**: Tabela de Transações Detalhada
- [ ] **PROMPT 12**: Modal de Nova Transação
- [ ] **PROMPT 13**: Modal de Adicionar Membro
- [ ] **PROMPT 14**: Modal de Adicionar Cartão
- [ ] **PROMPT 15**: Modal de Detalhes do Cartão
- [ ] **PROMPT 16**: Modal de Filtros Mobile
- [ ] **PROMPT 17**: View Completa de Cartões
- [ ] **PROMPT 18**: View Completa de Transações
- [ ] **PROMPT 19**: View de Perfil - Aba Informações
- [ ] **PROMPT 20**: View de Perfil - Aba Configurações
- [ ] **PROMPT 21**: Animações e Transições Globais
- [ ] **PROMPT 22**: Formatação e Utilitários
- [ ] **PROMPT 23**: Responsividade e Ajustes Finais
- [ ] **PROMPT 24**: Testes e Validação Final
- [ ] **PROMPT FINAL**: Revisão e Entrega

---

## ✅ PROMPT 0: Análise e Planejamento Inicial

**Status**: ✅ CONCLUÍDO | **Data**: 09/02/2026 | **Build**: N/A (análise)

### 📚 Pré-Execução
✓ Rules relidas e aplicadas  
✓ Figma consultado e analisado  
✓ Hierarquia de variáveis verificada

### 📦 Análise Realizada
- Identificação completa de componentes visuais (Dashboard, Cartões, Transações, Perfil)
- Mapeamento de variáveis semânticas e primitivas do design system
- Análise da estrutura de navegação (Sidebar desktop expandida/colapsada, Header Mobile, Drawer)
- Resumo da arquitetura proposta (estrutura de pastas, hierarquia de componentes, estratégia de componentização)

**Detalhes completos em:** `ANALISE-PROMPT-0.md`

---

## 📝 Sequência Completa de Prompts

### 🏗️ PROMPT 1: Estrutura Base e Configuração

**Status**: ✅ CONCLUÍDO | **Data**: 09/02/2026 | **Build**: ✅ Sucesso (2 tentativas)

**Objetivo:** Criar estrutura inicial do projeto React + TypeScript + Vite + Tailwind CSS + Supabase

**Tarefas:**
- [x] Configurar estrutura de pastas seguindo boas práticas React
- [x] Criar diretórios: components (layout, dashboard, cards, modals), contexts, hooks, types, utils, constants
- [x] Organizar subpastas por domínio dentro de components
- [x] Configurar Tailwind CSS para reconhecer variables do Figma como classes customizadas
- [x] Mapear todos os tokens semânticos e primitivos no Tailwind config
- [x] Criar tipos TypeScript fundamentais: Transaction, Goal, CreditCard, BankAccount, FamilyMember
- [x] Configurar React Router para 5 rotas principais (SPA)
- [x] Configurar responsividade: Desktop (≥1280px), Tablet (≥768px), Mobile (<768px)

**Arquivos criados:**
- `package.json` - Dependências do projeto
- `vite.config.ts` - Configuração do Vite
- `tsconfig.json`, `tsconfig.node.json` - Configuração TypeScript
- `tailwind.config.js` - Configuração Tailwind com tokens do Figma
- `postcss.config.js` - Configuração PostCSS
- `src/styles/index.css` - Variáveis CSS do design system
- `src/types/transaction.ts` - Tipo Transaction
- `src/types/goal.ts` - Tipo Goal
- `src/types/creditCard.ts` - Tipo CreditCard
- `src/types/bankAccount.ts` - Tipo BankAccount
- `src/types/familyMember.ts` - Tipo FamilyMember
- `src/types/index.ts` - Export centralizado de tipos
- `src/App.tsx` - Componente raiz com React Router
- `src/main.tsx` - Ponto de entrada
- `src/pages/DashboardPage.tsx` - Página Dashboard
- `src/pages/CardsPage.tsx` - Página Cartões
- `src/pages/TransactionsPage.tsx` - Página Transações
- `src/pages/ProfilePage.tsx` - Página Perfil
- `src/services/supabase.ts` - Cliente Supabase (preparado para integração futura)
- `src/utils/index.ts` - Utilitários básicos
- `src/constants/index.ts` - Constantes globais
- `src/vite-env.d.ts` - Tipos para import.meta.env
- `README.md` - Documentação do projeto
- `.env.example` - Exemplo de variáveis de ambiente
- `.gitignore` - Arquivos ignorados pelo Git
- `.eslintrc.cjs` - Configuração ESLint

**Tokens utilizados:**
- Semânticas: `--color-primary`, `--color-background-primary`, `--color-text-primary`, `--spacing-page-padding-x-*`, `--font-size-heading-lg`, etc.
- Primitivas: `--gray-900`, `--gray-700`, `--gray-500`, `--gray-200`, `--gray-50`, `--lime-500`, `--green-500`, `--red-500`

**Build Status:**
✅ Sucesso (tentativas: 2)
- Tentativa 1: Erro TypeScript com import.meta.env
- Correção: Criado `src/vite-env.d.ts` com tipagens
- Tentativa 2: ✅ Build concluído com sucesso

---

### 🎨 PROMPT 2: Sistema de Layout e Navegação Desktop

**Objetivo:** Implementar sidebar desktop com estados expandido/colapsado

**Tarefas:**
- [ ] Criar componente Sidebar ocupando lado esquerdo com altura total do viewport
- [ ] Implementar estado expandido: logo completo "mycash+", nomes das seções, informações completas do perfil
- [ ] Implementar estado colapsado: apenas ícone do logo, ícones das seções, apenas avatar do perfil
- [ ] Criar botão circular na borda direita da sidebar para alternar estados
- [ ] Ícone do botão muda: seta esquerda (expandida) / seta direita (colapsada)
- [ ] Configurar transições suaves entre estados
- [ ] Conteúdo principal ajusta margem esquerda de forma fluida e animada
- [ ] Implementar sistema de tooltip para itens quando sidebar colapsada
- [ ] Tooltip aparece ao lado direito do item com delay leve
- [ ] Implementar item ativo: fundo preto, texto branco, ícone verde-limão
- [ ] Itens inativos: fundo transparente, texto cinza
- [ ] Utilizar exclusivamente variables do design system do Figma

**Arquivos esperados:**
- `src/components/layout/Sidebar/Sidebar.tsx`
- `src/components/layout/Sidebar/SidebarItem.tsx`
- `src/hooks/useSidebarToggle.ts`

---

### 📱 PROMPT 3: Sistema de Layout e Navegação Mobile

**Objetivo:** Implementar Header Mobile e Drawer de navegação

**Tarefas:**
- [ ] Criar componente HeaderMobile que substitui sidebar em <1024px
- [ ] Header fixo no topo, largura total, visível durante scroll
- [ ] Logo "mycash+" à esquerda (tamanho apropriado para mobile)
- [ ] Avatar do usuário à direita (clicável, trigger para menu dropdown)
- [ ] Criar componente MenuDropdown que desliza de cima para baixo
- [ ] Menu não é fullscreen, cobre conteúdo abaixo com animação suave
- [ ] Listar todos os itens de navegação com ícone e texto
- [ ] Item da seção atual destacado com fundo preto
- [ ] Botão vermelho "Sair" na parte inferior
- [ ] Fechamento: clicar em item, botão X, ou fora do menu (overlay escuro)
- [ ] Configurar breakpoints: desktop (≥1024px) apenas sidebar, mobile/tablet (<1024px) apenas header
- [ ] NUNCA renderizar Sidebar + Header Mobile simultaneamente

**Arquivos esperados:**
- `src/components/layout/Header/MobileHeader.tsx`
- `src/components/layout/Drawer/MenuDropdown.tsx`
- `src/hooks/useResponsive.ts`

---

### 💾 PROMPT 4: Context Global e Gerenciamento de Estado

**⚠️ REGRA CRÍTICA:** NÃO usar localStorage, sessionStorage ou qualquer browser storage API. TODO estado via React state (useState, useReducer).

**Objetivo:** Criar FinanceProvider para gerenciar estado global da aplicação

**Tarefas:**
- [ ] Criar FinanceProvider no nível mais alto da árvore
- [ ] Manter 5 arrays principais: transactions, goals, creditCards, bankAccounts, familyMembers
- [ ] Tipar cada array corretamente com tipos TypeScript criados
- [ ] Implementar funções CRUD para cada entidade (adicionar, atualizar, deletar)
- [ ] Criar estados para filtros globais: selectedMember, dateRange, transactionType, searchText
- [ ] Implementar funções de cálculo derivadas:
  - getFilteredTransactions (aplica todos os filtros)
  - calculateTotalBalance (soma saldos, subtrai faturas)
  - calculateIncomeForPeriod
  - calculateExpensesForPeriod
  - calculateExpensesByCategory (agrupado e ordenado)
  - calculateCategoryPercentage
  - calculateSavingsRate
- [ ] Criar hook customizado useFinance (único ponto de acesso ao contexto)
- [ ] Popular estado inicial com dados mock realistas:
  - 3 membros da família brasileira
  - 3 cartões de bancos conhecidos
  - 20-30 transações distribuídas nos últimos 3 meses
  - 4 objetivos variados
  - Categorias padrão brasileiras

**Arquivos esperados:**
- `src/contexts/FinanceContext.tsx`
- `src/hooks/useFinance.ts`
- `src/types/index.ts` (exportar todos os tipos)

---

### 📊 PROMPT 5: Cards de Resumo Financeiro

**Objetivo:** Implementar 3 cards de resumo (Saldo Total, Receitas, Despesas)

**Tarefas:**
- [ ] Criar BalanceCard (Saldo Total):
  - Fundo completamente preto, texto branco
  - Elemento decorativo: círculo grande desfocado verde-limão com opacidade baixa
  - Label "Saldo Total" em cinza claro no topo
  - Valor formatado como moeda brasileira completa (fonte muito grande)
  - Badge arredondado com fundo semi-transparente branco
  - Ícone de gráfico crescente + texto de crescimento percentual comparado ao mês anterior
- [ ] Criar IncomeCard (Receitas):
  - Fundo branco, borda sutil
  - Label "Receitas" em preto negrito (topo esquerda)
  - Círculo com fundo cinza claro contendo ícone de seta diagonal baixo-esquerda
  - Valor total das receitas formatado como moeda
- [ ] Criar ExpenseCard (Despesas):
  - Estrutura similar ao IncomeCard
  - Label "Despesas" em cinza médio
  - Ícone em círculo com fundo vermelho muito claro (seta diagonal cima-direita)
- [ ] Organizar cards horizontalmente no desktop, verticalmente no mobile
- [ ] Implementar animações suaves de contagem nos valores (800ms, de zero até valor final)
- [ ] Valores vêm de funções do contexto: calculateTotalBalance, calculateIncomeForPeriod, calculateExpensesForPeriod
- [ ] Respeitar filtros ativos automaticamente

**Arquivos esperados:**
- `src/components/dashboard/BalanceCard.tsx`
- `src/components/dashboard/IncomeCard.tsx`
- `src/components/dashboard/ExpenseCard.tsx`
- `src/components/dashboard/FinancialSummaryGrid.tsx`

---

### 🎯 PROMPT 6: Header do Dashboard com Controles

**Objetivo:** Implementar barra de controles no topo do dashboard

**Tarefas:**
- [ ] Criar componente DashboardHeader (barra horizontal responsiva)
- [ ] Campo de busca à esquerda com ícone de lupa
  - Placeholder "Pesquisar..."
  - Largura fixa no desktop, 100% no mobile
  - Busca em tempo real (atualiza searchText no contexto)
  - Case-insensitive, procura em descrição OU categoria
- [ ] Botão de filtros (botão circular com ícone de controles deslizantes)
  - Desktop: abre popover flutuante abaixo
  - Mobile: abre modal fullscreen deslizando de baixo para cima
- [ ] Criar FilterPopover para desktop:
  - Fundo branco semi-transparente com glassmorphism (backdrop blur)
  - Seção "Tipo de Transação" com 3 opções de rádio: "Todos", "Receitas", "Despesas"
  - Opção selecionada: fundo preto, texto branco
  - Atualiza transactionType no contexto ao clicar
- [ ] Implementar seletor de período:
  - Botão mostra período atual formatado: "01 jan - 31 jan, 2024"
  - Ao clicar, abre calendário interativo
  - Desktop: 2 meses lado a lado
  - Mobile: 1 mês por vez com setas de navegação
  - Seleção de intervalo: primeiro clique = data inicial, segundo = data final
  - Botões de atalho: "Este mês", "Mês passado", "Últimos 3 meses", "Este ano"
- [ ] Widget de membros da família:
  - Avatares circulares parcialmente sobrepostos (efeito pilha)
  - Cada avatar tem borda branca
  - Hover: avatar cresce levemente e move-se para frente
  - Clique: aplica filtro de membro (borda preta grossa, ícone check verde)
  - Clique novamente: remove filtro
- [ ] Botão "+" após avatares (abre modal de adicionar novo membro)
- [ ] Botão "Nova Transação" no canto direito:
  - Fundo preto, texto branco, ícone "+"
  - Mobile: largura total, altura maior para facilitar toque
- [ ] Utilizar exclusivamente variables do design system

**Arquivos esperados:**
- `src/components/dashboard/DashboardHeader.tsx`
- `src/components/dashboard/FilterPopover.tsx`
- `src/components/dashboard/DateRangePicker.tsx`
- `src/components/dashboard/FamilyMembersWidget.tsx`

---

### 🍩 PROMPT 7: Carrossel de Gastos por Categoria

**Objetivo:** Implementar widget de categorias com gráficos donut

**Tarefas:**
- [ ] Criar componente ExpensesByCategoryCarousel
- [ ] Buscar dados de calculateExpensesByCategory do contexto (já filtrado e ordenado)
- [ ] Para cada categoria, calcular percentual em relação à receita total (calculateCategoryPercentage)
- [ ] Criar componente CategoryDonutCard para cada categoria:
  - Fundo branco, borda cinza clara
  - Largura fixa 160px, altura automática
  - Gráfico donut no topo (diâmetro 64px)
  - Anel externo colorido (percentual), anel interno vazio (branco)
  - Cores rotativas: primeira verde-limão, segunda preta, terceira cinza médio
  - Percentual centralizado no centro do donut ("30.0%")
  - Nome da categoria abaixo (truncado com reticências se longo)
  - Valor total formatado como moeda abaixo do nome
- [ ] Configurar carrossel scrollável horizontalmente:
  - Mouse wheel move horizontalmente
  - Clique e arrasta para deslizar manualmente
  - Setas de navegação aparecem no hover (esquerda/direita)
  - Setas: botões circulares flutuantes, fundo branco, sombra
  - Clicar desloca ~200px na direção correspondente
- [ ] Gradiente de máscara nas bordas (efeito fade)
- [ ] Hover nos cards: borda muda de cinza clara para verde-limão
- [ ] Mobile: remover setas, apenas scroll por toque/deslize
- [ ] Utilizar variables do design system

**Arquivos esperados:**
- `src/components/dashboard/ExpensesByCategoryCarousel.tsx`
- `src/components/dashboard/CategoryDonutCard.tsx`
- `src/components/ui/DonutChart/DonutChart.tsx`

---

### 📈 PROMPT 8: Gráfico de Fluxo Financeiro

**Objetivo:** Criar gráfico de evolução de receitas e despesas

**Tarefas:**
- [ ] Implementar componente FinancialFlowChart usando biblioteca de gráficos (Recharts)
- [ ] Card grande contendo título, legenda e gráfico
- [ ] Título "Fluxo Financeiro" com ícone de gráfico crescente à esquerda
- [ ] Legenda horizontal: círculo verde-limão "Receitas", círculo preto "Despesas"
- [ ] Gráfico: altura fixa 300px, largura responsiva 100%
- [ ] Fundo cinza claro muito suave
- [ ] Eixo X: nomes dos meses abreviados (Jan, Fev, Mar, etc) na parte inferior
- [ ] Eixo Y: valores monetários formatados compactos (R$ 2k, R$ 4k, R$ 6k)
- [ ] Linhas horizontais tracejadas sutis (grid) em cada marca do eixo Y
- [ ] Duas áreas:
  - Receitas: linha verde-limão 3px, gradiente vertical (topo 30% opaco, base transparente)
  - Despesas: linha preta 3px, gradiente vertical (topo 10% opaco, base transparente)
- [ ] Tooltip interativo:
  - Linha vertical fina cinza clara acompanha cursor
  - Ao parar sobre ponto, tooltip flutuante aparece
  - Fundo branco, sombra elevada, bordas arredondadas
  - Conteúdo: nome do mês (negrito), "Receitas: R$ X.XXX,XX" (verde escuro), "Despesas: R$ X.XXX,XX" (preto)
- [ ] Por enquanto usar dados mock fixos para 7 meses
- [ ] Estruturar código para futuramente vir de transações agrupadas por mês
- [ ] Utilizar variables do design system

**Arquivos esperados:**
- `src/components/dashboard/FinancialFlowChart.tsx`
- Dependência: `recharts` ou similar

---

### 💳 PROMPT 9: Widget de Cartões de Crédito

**Objetivo:** Implementar widget que exibe cartões de crédito

**Tarefas:**
- [ ] Criar componente CreditCardsWidget
- [ ] Container: fundo cinza muito claro, bordas amplamente arredondadas, espaçamento interno confortável
- [ ] Header: ícone de cartão à esquerda, título "Cartões" (tipografia legível, peso médio)
- [ ] Botão "+" à direita: circular, fundo branco, bordas arredondadas (abre modal de novo cartão)
- [ ] Hover no botão: fundo muda para cinza claro
- [ ] Lista de cartões verticalmente (do array creditCards do contexto)
- [ ] Cada cartão como card independente:
  - Fundo branco, cantos arredondados, sombra suave
  - Layout horizontal em 3 zonas: ícone (esquerda), informações (centro), indicador (direita)
- [ ] Ícone à esquerda:
  - Bloco visual quadrado com cantos arredondados
  - Recebe cor do tema do cartão (preto, verde-limão ou branco com borda)
  - Ícone de cartão outline com cor contrastante
- [ ] Informações ao centro (verticalmente):
  - Nome do cartão/banco (fonte menor, cor neutra)
  - Valor da fatura atual (fonte maior, peso forte, cor escura, formatado como moeda)
  - Final do número mascarado "•••• 1234" (fonte menor, cor suave)
- [ ] Indicador à direita:
  - Badge circular/oval com percentual de uso: (fatura ÷ limite) × 100
  - Cor varia com tema do cartão, sempre garantindo contraste
- [ ] Interatividade:
  - Hover: card eleva levemente (translateY -4px ou -8px), sombra aumenta
  - Transição suave 200-300ms
  - Cursor pointer
- [ ] Clique: abre modal de detalhes do cartão
- [ ] Paginação: se mais de 3 cartões, controles abaixo (avançar/voltar, indicador de página)
- [ ] Mobile: suporte a gesto de swipe horizontal
- [ ] Utilizar exclusivamente variables do design system

**Arquivos esperados:**
- `src/components/dashboard/CreditCardsWidget.tsx`
- `src/components/dashboard/CreditCardItem.tsx`

---

### 📋 PROMPT 10: Widget de Próximas Despesas

**Objetivo:** Implementar widget com lista cronológica de contas a pagar

**Tarefas:**
- [ ] Criar widget com fundo branco, borda clara, cantos arredondados
- [ ] Header: ícone de carteira (20px) à esquerda, título "Próximas despesas" (texto grande, negrito)
- [ ] Botão "+" à direita: circular (40px), ícone "+", borda clara (abre modal de nova transação)
- [ ] Lista vertical de despesas pendentes:
  - Buscar transações tipo "despesa" não pagas
  - Ordenar por data de vencimento crescente (mais próximas no topo)
- [ ] Cada item da lista:
  - Linha horizontal com padding vertical generoso
  - Linha divisória fina cinza clara entre itens
  - Duas colunas principais:
    - Esquerda (empilhado verticalmente):
      - Título/descrição da despesa (texto negrito médio)
      - Data de vencimento: "Vence dia DD/MM" (texto menor cinza escuro)
      - Nome da conta/cartão (texto pequeno cinza claro)
      - Lógica: se conta bancária → "Nubank conta", se cartão → "Crédito [Banco] **** [últimos 4 dígitos]"
    - Direita (alinhado à direita):
      - Valor formatado "R$ XXX,XX" (texto grande, negrito)
      - Botão circular (32px) com borda cinza, fundo transparente, ícone check (✓)
- [ ] Botão de check:
  - Hover: fundo verde claro, borda verde, ícone verde
  - Clique executa:
    1. Marca despesa como paga (atualiza status)
    2. Anima botão com cores verdes
    3. Remove item da lista com animação de desaparecimento
    4. Se recorrente: cria nova ocorrência para próximo mês
    5. Se parcelada: verifica próxima parcela e atualiza contador
    6. Exibe toast "Despesa marcada como paga!"
- [ ] Estado vazio: quando não houver despesas pendentes
  - Área centralizada com ícone check circular verde
  - Mensagem "Nenhuma despesa pendente" (texto cinza claro)
  - Borda tracejada cinza suave ao redor
- [ ] Por enquanto usar dados fictícios de despesas pendentes
- [ ] Utilizar variables do design system

**Arquivos esperados:**
- `src/components/dashboard/UpcomingExpensesWidget.tsx`
- `src/components/dashboard/ExpenseItem.tsx`

---

### 📋 PROMPT 11: Tabela de Transações Detalhada

**Objetivo:** Implementar tabela completa de transações no dashboard

**Tarefas:**
- [ ] Criar componente TransactionsTable
- [ ] Header horizontal:
  - Título "Extrato Detalhado" à esquerda (fonte grande, negrito)
  - Controles de busca e filtro à direita
- [ ] Campo de busca local:
  - Ícone de lupa, placeholder "Buscar lançamentos..."
  - Largura média (256px desktop, 100% mobile)
  - Busca em tempo real (filtra conforme digita)
  - Procura em descrição OU categoria
- [ ] Select de tipo:
  - Dropdown: "Todos", "Receitas", "Despesas"
  - Largura fixa 140px (desktop), 100% (mobile)
  - Ao selecionar, filtra tabela por tipo
- [ ] Estrutura da tabela:
  - Borda clara arredondada contornando toda ela
  - Header da tabela: fundo cinza claro (diferencia das linhas de dados)
- [ ] Sete colunas:
  1. **Avatar**: estreita (50px), foto circular pequena (24px) do membro responsável
  2. **Data**: formato "DD/MM/AAAA" (texto cinza médio)
  3. **Descrição**: ícone indicativo + descrição textual
     - Receitas: ícone seta diagonal baixo-esquerda em círculo fundo verde claro
     - Despesas: ícone seta diagonal cima-direita em círculo fundo vermelho claro
     - Descrição em texto negrito preto
  4. **Categoria**: nome em badge arredondado (fundo cinza claro, texto cinza médio)
  5. **Conta/Cartão**: nome da conta ou cartão vinculado (texto cinza médio)
  6. **Parcelas**: "3x", "6x", etc. Se à vista (1x), mostrar apenas "-"
  7. **Valor**: alinhado à direita
     - Receitas: prefixo "+" em verde
     - Despesas: prefixo "-" em preto
     - Fonte negrito, formatação completa de moeda brasileira
- [ ] Zebra striping sutil: linhas alternam entre fundo branco e fundo levíssimo cinza
- [ ] Hover nas linhas: fundo cinza claro mais perceptível
- [ ] Lógica de filtragem combinada:
  - Considera filtros globais do contexto (membro, período)
  - Adiciona filtros locais (busca textual, tipo)
  - Todos trabalham em conjunto (AND lógico)
- [ ] Ordenação: sempre por data decrescente (mais recente primeiro)
- [ ] Paginação:
  - Mostrar apenas 5 transações por vez
  - Abaixo da tabela, à esquerda: contador "Mostrando 1 a 5 de 47"
  - À direita: controles de navegação
    - Botão Anterior (seta esquerda)
    - Números de página clicáveis
    - Botão Próxima (seta direita)
    - Página atual: fundo preto, texto branco
    - Outras: fundo transparente, texto cinza médio
  - Se mais de 7 páginas: mostrar primeiras 3, "...", últimas 2
  - Botões Anterior/Próxima disabled quando não aplicáveis
  - Ao mudar página: scroll suave até topo da tabela, fade-in nas novas transações
  - Ao mudar filtro: reset para página 1, recalcular total de páginas
- [ ] Estado vazio: se não houver transações após filtros
  - Linha especial ocupando todas as colunas (altura 96px)
  - Mensagem centralizada: "Nenhum lançamento encontrado." (cinza médio)
- [ ] Buscar dados de getFilteredTransactions do contexto (já aplica filtros globais)
- [ ] Adicionar filtros locais da tabela
- [ ] Utilizar variables do design system

**Arquivos esperados:**
- `src/components/dashboard/TransactionsTable.tsx`
- `src/components/dashboard/TableRow.tsx`
- `src/components/ui/Pagination/Pagination.tsx`

---

### 🗂️ PROMPT 12: Modal de Nova Transação

**Objetivo:** Criar modal completo para adicionar transações

**Tarefas:**
- [ ] Modal em tela cheia (100% largura e altura) com fundo branco
- [ ] Três áreas: header fixo (topo), conteúdo scrollável (centro), footer fixo (base)
- [ ] Header:
  - Layout horizontal com padding generoso, borda inferior sutil
  - Ícone grande em círculo (64px) que muda conforme tipo:
    - Receita: fundo verde-limão, ícone seta baixo-esquerda
    - Despesa: fundo preto, ícone seta cima-direita em branco
  - Ao lado do ícone: título "Nova Transação" (fonte muito grande, negrito)
  - Subtítulo descritivo abaixo (texto menor cinza)
  - Botão X circular grande (48px) à direita para fechar
- [ ] Conteúdo scrollável:
  - Fundo levemente cinza, conteúdo centralizado (largura máxima 600-700px)
  - Formulário vertical com espaçamento generoso:
    - **Toggle de tipo**: dois botões grandes lado a lado em container cinza claro arredondado
      - "Receita" à esquerda, "Despesa" à direita
      - Apenas um selecionado (fundo branco com sombra sutil)
      - Não selecionado: fundo transparente, texto cinza
    - **Campo de valor**: input numérico grande (altura 56px)
      - Label "Valor da Transação" acima
      - Símbolo "R$" fixo à esquerda dentro do input
      - Campo obrigatório, bordas arredondadas, fundo branco
    - **Campo de descrição**: input texto grande (altura 56px)
      - Label "Descrição", placeholder "Ex: Supermercado Semanal"
      - Campo obrigatório
    - **Campo de categoria**: dropdown grande
      - Label "Categoria"
      - Botão "+ Nova Categoria" no topo da lista (revela input inline para criar categoria na hora)
      - Filtrar categorias conforme tipo selecionado
      - Campo obrigatório
    - **Grid de duas colunas**:
      - Coluna 1: Select de membro (dropdown, label "Membro")
        - Lista todos os membros + opção "Família (Geral)" no topo (memberId = null)
        - Campo opcional
      - Coluna 2: Select de conta/cartão (dropdown, label "Conta / Cartão")
        - Agrupar em duas seções: "Contas Bancárias" e "Cartões de Crédito"
        - Campo obrigatório
    - **Campo de parcelamento condicional**:
      - Aparece apenas se conta selecionada for cartão E tipo for despesa
      - Animação fade-in deslizando de cima
      - Dropdown com label "Parcelamento": "À vista (1x)", "2x" até "12x"
    - **Checkbox de despesa recorrente**:
      - Aparece apenas se tipo for despesa
      - Container destacado: fundo azul muito suave (#3247FF), borda azul sutil, cantos arredondados
      - Checkbox à esquerda, label "Despesa Recorrente" em negrito com ícone de repetição
      - Texto explicativo pequeno em cinza abaixo
      - Se parcelamento > 1x: desabilitar checkbox, mudar texto para "Não disponível para compras parceladas"
      - Ao marcar: forçar parcelamento para 1x automaticamente
- [ ] Footer:
  - Fundo branco, borda superior sutil
  - Dois botões à direita:
    - "Cancelar": borda, fundo transparente, cantos arredondados totais (pill)
    - "Salvar Transação": fundo preto, texto branco, cantos arredondados totais (pill), mais largo
- [ ] Validação ao clicar em "Salvar Transação":
  - Valor: deve ser > 0 (erro abaixo em vermelho, borda vermelha)
  - Descrição: mínimo 3 caracteres (erro abaixo)
  - Categoria: deve estar selecionada (erro)
  - Conta: deve estar selecionada (erro)
  - Se houver erro, não submeter
- [ ] Se válido:
  - Criar objeto de transação com ID único, tipo, valor, descrição, categoria, data atual, accountId, memberId (ou null), número de parcelas, status "completed", isRecurring, isPaid false
  - Adicionar ao array de transações no contexto
  - Fechar modal com animação deslizante para baixo
  - Toast "Transação registrada com sucesso!" com ícone check
  - Limpar formulário para próxima abertura
- [ ] Fechamento: cancelar, X, ou overlay fecha sem salvar
- [ ] Utilizar variables do design system

**Arquivos esperados:**
- `src/components/modals/NewTransactionModal.tsx`
- `src/components/modals/TransactionForm.tsx`

---

### 👥 PROMPT 13: Modal de Adicionar Membro

**Objetivo:** Criar modal para adicionar membros da família

**Tarefas:**
- [ ] Estrutura similar ao modal de transação: overlay escuro, modal centralizado branco
- [ ] Header: título "Adicionar Membro da Família", botão X
- [ ] Footer: botões "Cancelar" e "Adicionar Membro"
- [ ] Formulário:
  - **Nome completo**: input texto obrigatório
    - Label "Nome Completo", placeholder "Ex: João Silva"
    - Validação: mínimo 3 caracteres
  - **Função/papel**: input texto obrigatório
    - Label "Função na Família", placeholder "Ex: Pai, Mãe, Filho..."
    - Combobox: permite texto livre mas oferece sugestões em dropdown
    - Sugestões: "Pai", "Mãe", "Filho", "Filha", "Avô", "Avó", "Tio", "Tia"
  - **Avatar**: campo especial com duas abas/opções
    - "URL": input texto para colar URL de imagem da internet
    - "Upload": botão para upload de arquivo (JPG, PNG, max 5MB)
    - Se nenhuma imagem: usar avatar padrão genérico do sistema
    - Campo opcional
  - **Renda mensal**: input numérico opcional
    - Label "Renda Mensal Estimada (opcional)"
    - Formatação automática de moeda
- [ ] Validação ao clicar em "Adicionar Membro":
  - Nome: obrigatório, mínimo 3 caracteres → erro "Por favor, insira um nome válido"
  - Função: obrigatória → erro "Por favor, informe a função na família"
- [ ] Se válido:
  - Criar objeto de membro com ID único, nome, função, URL do avatar (ou padrão), renda (ou zero)
  - Adicionar ao array familyMembers do contexto
  - Fechar modal com fade-out
  - Toast "Membro adicionado com sucesso!"
  - Novo membro aparece imediatamente nos avatares do header e dropdowns
- [ ] Fechamento: cancelar, X ou fora fecha sem salvar
- [ ] Utilizar variables do design system

**Arquivos esperados:**
- `src/components/modals/AddMemberModal.tsx`
- `src/components/modals/MemberForm.tsx`

---

### 💳 PROMPT 14: Modal de Adicionar Cartão

**Objetivo:** Criar modal para adicionar contas bancárias e cartões de crédito

**Tarefas:**
- [ ] Modal centralizado sobre overlay escuro semi-transparente
- [ ] Fundo branco, bordas arredondadas generosas, sombra forte
- [ ] Largura média (500-600px desktop, 90% mobile)
- [ ] Três áreas: header fixo, conteúdo scrollável, footer fixo
- [ ] Header: título "Adicionar Conta/Cartão" à esquerda (fonte grande, negrito), botão X à direita
- [ ] Footer: botões "Cancelar" (esquerda) e "Adicionar" (direita, fundo preto, texto branco)
- [ ] Formulário vertical:
  - **Toggle de tipo**: dois botões grandes lado a lado ocupando largura total
    - "Conta Bancária" (esquerda), "Cartão de Crédito" (direita)
    - Apenas um selecionado (fundo preto, texto branco)
    - Não selecionado: fundo branco, borda, texto cinza
  - **Campo de nome**: input texto grande
    - Label muda: "Nome da Conta" (se conta) ou "Nome do Cartão" (se cartão)
    - Placeholder: "Ex: Nubank Conta" ou "Ex: Nubank Mastercard"
    - Campo obrigatório, mínimo 3 caracteres
  - **Campo de titular**: dropdown obrigatório
    - Label "Titular"
    - Lista todos os membros da família cadastrados
    - Campo obrigatório
  - **Campos condicionais para Conta Bancária**:
    - Saldo inicial: input numérico, label "Saldo Inicial", formatação automática de moeda, obrigatório
  - **Campos condicionais para Cartão de Crédito**:
    - Dia de fechamento: input numérico, label "Dia de Fechamento", placeholder "1 a 31", aceita apenas 1-31, obrigatório
    - Dia de vencimento: input numérico, label "Dia de Vencimento", placeholder "1 a 31", aceita apenas 1-31, obrigatório
    - Limite total: input numérico, label "Limite Total", formatação automática de moeda, obrigatório, deve ser > 0
    - Últimos 4 dígitos: input numérico opcional, label "Últimos 4 Dígitos (opcional)", aceita exatamente 4 dígitos
    - Tema visual: seção com label "Tema Visual"
      - Três cards clicáveis lado a lado:
        - Retângulo fundo preto, label "Black"
        - Retângulo fundo verde-limão, label "Lime"
        - Retângulo fundo branco com borda, label "White"
      - Usuário clica no tema desejado
      - Apenas um selecionado (borda destacada azul)
      - Campo obrigatório para cartões
- [ ] Validação ao clicar em "Adicionar":
  - Nome: obrigatório, mínimo 3 caracteres
  - Titular: obrigatório
  - Se conta: saldo inicial obrigatório
  - Se cartão: fechamento 1-31, vencimento 1-31, limite > 0, tema selecionado
  - Se inválido: mostrar erros abaixo dos campos com borda vermelha
- [ ] Se válido:
  - Criar objeto com ID único, nome, tipo (account ou creditCard), holderId, campos específicos conforme tipo
  - Se conta: balance com saldo inicial
  - Se cartão: closingDay, dueDay, limit, currentBill zero, theme, lastDigits
  - Adicionar ao array apropriado (accounts ou creditCards) no contexto
  - Fechar modal
  - Toast "Conta adicionada com sucesso!" ou "Cartão adicionado com sucesso!"
  - Nova conta/cartão aparece imediatamente nos dropdowns e widgets
- [ ] Utilizar variables do design system

**Arquivos esperados:**
- `src/components/modals/AddCardModal.tsx`
- `src/components/modals/CardForm.tsx`

---

### 📊 PROMPT 15: Modal de Detalhes do Cartão

**Objetivo:** Criar modal que mostra informações completas do cartão

**Tarefas:**
- [ ] Criar componente CardDetailsModal (abre ao clicar em cartão no widget)
- [ ] Modal maior que os anteriores (largura média-grande) para acomodar mais informações
- [ ] Header: nome do cartão como título, botão X à direita
- [ ] Conteúdo dividido em duas áreas principais:
  - **Área de informações**: seção superior
    - Cards ou lista organizada mostrando:
      - Limite total formatado como moeda
      - Fatura atual formatado como moeda
      - Limite disponível: (limite - fatura) formatado como moeda
      - Percentual de uso: (fatura ÷ limite) × 100 com uma casa decimal
      - Data de fechamento: "Dia DD"
      - Data de vencimento: "Dia DD"
      - Últimos 4 dígitos: "•••• 1234" (se cadastrado)
    - Grid responsivo: 2 ou 3 colunas (desktop), coluna única (mobile)
    - Cada informação em card pequeno: label cinza médio, valor preto negrito
    - Representação visual do uso do limite:
      - Gráfico donut grande mostrando percentual usado vs disponível
      - OU barra de progresso horizontal com preenchimento proporcional
  - **Área de despesas**: seção inferior
    - Tabela listando todas as transações de despesa vinculadas a este cartão
    - Filtrar: type = "expense" E accountId = ID deste cartão
    - Tabela simplificada: colunas Data, Descrição, Categoria, Parcelas, Valor
    - Similar à tabela principal mas focada apenas neste cartão
    - Se mais de 10 despesas: paginação (10 por vez)
    - Se não houver despesas: mensagem "Nenhuma despesa registrada neste cartão ainda."
- [ ] Botões de ação (inferior ou superior do modal):
  - "Ver Extrato Completo": navega para view de transações com filtro deste cartão
  - "Adicionar Despesa": abre modal de nova transação com conta pré-preenchida
  - "Editar Cartão": abre formulário para editar informações
  - "Fechar": fecha o modal
- [ ] Fechamento: Fechar, X ou fora fecha com fade-out
- [ ] Utilizar variables do design system

**Arquivos esperados:**
- `src/components/modals/CardDetailsModal.tsx`
- `src/components/modals/CardDetailsContent.tsx`

---

### 📱 PROMPT 16: Modal de Filtros Mobile

**Objetivo:** Criar modal de filtros específico para mobile

**Tarefas:**
- [ ] Criar componente FiltersMobileModal (aparece ao tocar no botão de filtros no header mobile)
- [ ] Animação de entrada: modal desliza de baixo para cima (slide-in vertical)
- [ ] Inicia abaixo da viewport, sobe até ocupar toda a altura
- [ ] Animação suave e rápida (300ms)
- [ ] Três áreas fixas:
  - **Header fixo**: topo da tela, fundo branco, borda inferior
    - Título "Filtros" à esquerda (fonte grande, negrito)
    - Botão X grande à direita (área de toque adequada mínimo 44x44px)
    - Permanece fixo mesmo quando conteúdo rola
  - **Conteúdo scrollável**: área central entre header e footer
    - Permite scroll vertical se necessário
    - Todas as opções de filtro organizadas em seções com espaçamento generoso
  - **Footer fixo**: base da tela, fundo branco, borda superior
    - Botão grande único ocupando quase toda a largura
    - "Aplicar Filtros" com altura 56px, fundo preto, texto branco
    - Totalmente acessível por toque
    - Permanece visível mesmo durante scroll
- [ ] Seções de filtro no conteúdo:
  - **Seção tipo de transação**:
    - Label "Tipo de Transação" em negrito
    - Grid de 3 colunas com botões: "Todos", "Receitas", "Despesas"
    - Cada botão ocupa 33% da largura, altura generosa 48px
    - Selecionado: fundo preto, texto branco
    - Não selecionado: fundo branco, borda cinza
  - **Seção membro da família**:
    - Label "Membro da Família" em negrito
    - Botões horizontais com wrap
    - Primeiro botão "Todos" sozinho
    - Depois um botão para cada membro cadastrado
    - Cada botão de membro: avatar circular pequeno (32px) à esquerda, nome à direita
    - Altura 48px, padding horizontal adequado, bordas arredondadas completas (pill)
    - Selecionado: fundo preto, texto branco, avatar com borda branca
    - Não selecionado: fundo branco, borda cinza, texto cinza
  - **Seção período**:
    - Label "Período" em negrito
    - Calendário de um único mês ocupando largura total
    - Permite seleção de intervalo: primeiro toque = início, segundo = fim
    - Intervalo selecionado fica destacado com fundo
    - Controles de navegação (setas) no topo para mudar de mês
- [ ] Comportamento:
  - Usuário pode ajustar quantos filtros quiser
  - Seleções ficam em estado temporário local (não aplicadas ao contexto global ainda)
- [ ] Ao tocar em "Aplicar Filtros":
  - Copiar filtros temporários para estado global do contexto (transactionType, selectedMember, dateRange)
  - Fechar modal com animação slide-out (desliza para baixo)
  - Todo o dashboard atualiza automaticamente refletindo novos filtros
- [ ] Se tocar no X ou fora da área do modal (overlay escuro):
  - Fechar SEM aplicar os filtros
  - Descartar mudanças temporárias
- [ ] Utilizar variables do design system, garantindo touch-friendly (áreas de toque mínimas adequadas)

**Arquivos esperados:**
- `src/components/modals/FiltersMobileModal.tsx`
- `src/components/modals/FiltersContent.tsx`

---

### 💳 PROMPT 17: View Completa de Cartões

**Objetivo:** Criar tela completa dedicada aos cartões de crédito

**Tarefas:**
- [ ] Criar componente CardsView (seção principal navegável)
- [ ] Substitui conteúdo quando usuário clica em "Cartões" na navegação
- [ ] Header no topo:
  - Título "Cartões de Crédito" à esquerda (fonte muito grande, negrito)
  - Botão "Novo Cartão" à direita (fundo preto, ícone "+")
- [ ] Grid responsivo abaixo do header:
  - Mobile: 1 coluna
  - Tablet: 2 colunas
  - Desktop: 3 colunas
- [ ] Cada cartão exibido como card grande e detalhado:
  - Mais completo que no widget do dashboard
  - Organização vertical:
    - **Topo**: nome do cartão (fonte grande, negrito) com logo do banco (imagem pequena ao lado)
    - **Seção de valores**:
      - Limite total
      - Fatura atual destacada (fonte grande, cor vermelha se próxima do limite)
      - Limite disponível
      - Percentual de uso
    - **Representação visual**: barra de progresso horizontal grande OU gráfico donut mostrando uso do limite
    - **Datas**: dia de fechamento e vencimento formatados claramente com ícones de calendário
    - **Tema visual**: card reflete tema escolhido (borda colorida grossa ou fundo sutil)
    - **Últimos dígitos**: "•••• 1234" em tipografia monoespaçada (se cadastrado)
    - **Ações**: botões pequenos no rodapé do card
      - "Ver Detalhes": abre modal de detalhes
      - "Adicionar Despesa": abre modal de nova transação pré-configurado
- [ ] Interatividade:
  - Hover: card eleva com sombra aumentada
  - Clicável: tocar/clicar no card abre modal de detalhes
- [ ] Estado vazio: se não houver cartões cadastrados
  - Ícone de cartão cinza claro
  - Título "Nenhum cartão cadastrado"
  - Botão "Cadastrar Primeiro Cartão"
- [ ] Buscar dados do array creditCards do contexto
- [ ] Ordenar cartões por fatura decrescente (mais gasto primeiro) ou alfabeticamente
- [ ] Utilizar variables do design system mantendo consistência visual

**Arquivos esperados:**
- `src/pages/CardsPage.tsx`
- `src/components/cards/CardsGrid.tsx`
- `src/components/cards/CardDetailCard.tsx`

---

### 📋 PROMPT 18: View Completa de Transações

**Objetivo:** Criar tela completa dedicada às transações

**Tarefas:**
- [ ] Criar componente TransactionsView (seção principal)
- [ ] Apresenta tabela de transações em formato expandido com mais opções
- [ ] Header no topo:
  - Título "Transações" à esquerda
  - Botão "Nova Transação" à direita
- [ ] Barra de filtros avançados abaixo do header:
  - Horizontal (desktop) ou vertical (mobile)
  - Mais opções que a versão do dashboard:
    - Campo de busca textual (similar ao dashboard)
    - Select de tipo (todos/receitas/despesas)
    - Select de categoria (filtrar por categoria específica)
    - Select de conta/cartão (filtrar por origem específica)
    - Select de membro (filtrar por responsável)
    - Date range picker (período customizado)
    - Select de status (todos/concluído/pendente)
  - Todos estes filtros trabalham em conjunto (AND lógico)
  - Adicionam-se aos filtros globais do contexto
- [ ] Linha de resumo acima da tabela:
  - Estatísticas das transações filtradas:
    - Total de receitas filtradas
    - Total de despesas filtradas
    - Diferença (receitas - despesas): cor verde se positivo, vermelha se negativo
    - Quantidade de transações encontradas
- [ ] Tabela de transações:
  - Usar mesmo componente TransactionsTable do dashboard
  - Configurar para modo expandido:
    - Mostrar mais linhas por página (10 ao invés de 5)
    - Ocupar largura total disponível
- [ ] Opção de ordenação clicável nos headers das colunas:
  - Clicar em "Data": alterna entre ordem decrescente e crescente
  - Clicar em "Valor": ordena por valor
  - Mostrar ícone de seta indicando ordem atual
- [ ] Botão "Exportar" no header:
  - Permite baixar transações filtradas em CSV ou PDF
  - Para análise offline
- [ ] Estado vazio:
  - Se não houver transações (array vazio ou todos filtrados)
  - Mensagem "Nenhuma transação registrada ainda"
  - Botão para adicionar primeira transação
- [ ] Buscar dados através de getFilteredTransactions do contexto
- [ ] Aplicar adicionalmente os filtros locais desta view
- [ ] Utilizar variables do design system para consistência

**Arquivos esperados:**
- `src/pages/TransactionsPage.tsx`
- `src/components/transactions/TransactionsFilters.tsx`
- `src/components/transactions/TransactionsSummary.tsx`

---

### 👤 PROMPT 19: View de Perfil - Aba Informações

**Objetivo:** Criar tela de perfil do usuário

**Tarefas:**
- [ ] Criar componente ProfileView (última seção principal navegável)
- [ ] Sistema de abas no topo: "Informações" e "Configurações"
- [ ] Ao entrar na view, sempre mostrar aba "Informações" ativa primeiro
- [ ] Abas lado a lado horizontalmente com borda inferior destacando aba ativa
- [ ] Na aba "Informações":
  - **Seção de perfil**: card grande no topo com fundo branco
    - Avatar grande (120px) centralizado ou à esquerda
    - Nome completo em fonte grande e negrito
    - Função na família em texto cinza médio
    - Email em texto cinza com ícone de envelope
    - Renda mensal estimada formatada como moeda com ícone de cifrão
    - Botão "Editar Perfil" opcional (permite alterar estas informações)
  - **Seção membros da família**: card abaixo
    - Título "Membros da Família"
    - Lista vertical de todos os membros cadastrados
    - Cada item da lista mostra:
      - Avatar circular médio (48px)
      - Nome e função em duas linhas
      - Renda mensal à direita formatada como moeda
      - Fundo cinza claro suave
      - Espaçamento entre items
    - Se houver apenas um membro (o próprio usuário):
      - Mensagem incentivando adicionar outros membros
      - Botão "Adicionar Membro da Família"
  - **Interatividade**:
    - Hover nos items da lista: fundo muda para cinza um pouco mais escuro
    - Clicável: tocar em um membro pode abrir modal para editar suas informações
  - **Botão "Sair"** na parte inferior:
    - Botão vermelho com ícone de logout
    - Executa ação de deslogar do sistema
- [ ] Utilizar variables do design system para cores, espaçamentos e tipografia

**Arquivos esperados:**
- `src/pages/ProfilePage.tsx`
- `src/components/profile/ProfileInfoTab.tsx`
- `src/components/profile/FamilyMembersList.tsx`

---

### ⚙️ PROMPT 20: View de Perfil - Aba Configurações

**Objetivo:** Criar aba "Configurações" dentro da view de perfil

**Tarefas:**
- [ ] Implementar conteúdo da aba "Configurações"
- [ ] Aparece quando usuário clica nesta aba no topo da ProfileView
- [ ] Organizar configurações em seções distintas:
  - **Seção preferências de exibição**: card com título "Preferências de Exibição"
    - Toggle switch "Modo Escuro" (label à esquerda, switch à direita)
      - Desabilitado por enquanto com badge "Em breve"
    - Select de moeda padrão: mostra "Real Brasileiro (R$)" (apenas visual, sem funcionalidade)
    - Select de formato de data: mostra "DD/MM/AAAA" (padrão brasileiro)
  - **Seção notificações**: card com título "Notificações"
    - Múltiplos toggle switches:
      - "Lembrete de vencimento de contas" - ativado por padrão
      - "Alerta de aproximação do limite de cartão" - ativado por padrão
      - "Resumo mensal por email" - desativado por padrão
      - "Notificações de novos objetivos alcançados" - ativado por padrão
    - Cada toggle: label descritivo à esquerda, switch à direita
    - Por enquanto apenas alteram estado visual local (sem integração real)
  - **Seção categorias**: card com título "Gerenciar Categorias"
    - Subtítulo "Categorias de Receita" com lista de categorias atuais
      - Mostra nome e cor
      - Botão "Adicionar Categoria" (abre modal simples para criar nova categoria de receita)
    - Subtítulo "Categorias de Despesa" com lista similar
      - Botão para adicionar nova categoria de despesa
    - Cada categoria na lista tem ícone de editar (lápis) e deletar (lixeira) ao passar mouse
  - **Seção dados e privacidade**: card com título "Dados e Privacidade"
    - Botão "Exportar Todos os Dados" (gera JSON ou CSV com todas as informações para backup)
    - Botão "Limpar Todos os Dados" em vermelho com confirmação obrigatória antes de executar
    - Texto pequeno em cinza: "Esta ação não pode ser desfeita"
  - **Seção sobre**: card final com título "Sobre o mycash+"
    - Versão do sistema: "v1.0.0"
    - Texto pequeno: "Sistema de gestão financeira familiar"
    - Link "Termos de Uso"
    - Link "Política de Privacidade"
- [ ] Organizar todos os cards verticalmente com espaçamento generoso
- [ ] Mobile: empilhar tudo verticalmente
- [ ] Desktop: pode organizar alguns cards lado a lado se houver espaço
- [ ] Utilizar variables do design system mantendo consistência

**Arquivos esperados:**
- `src/components/profile/SettingsTab.tsx`
- `src/components/profile/CategoriesManager.tsx`

---

### 🎨 PROMPT 21: Animações e Transições Globais

**Objetivo:** Implementar animações e transições suaves em todo o sistema

**Tarefas:**
- [ ] Transições de navegação entre seções principais:
  - Conteúdo atual: fade-out (opacity 1 → 0 em 200ms)
  - Novo conteúdo: fade-in (opacity 0 → 1 em 200ms)
  - Transições ligeiramente defasadas para evitar piscada
- [ ] Animações de entrada para cards e componentes em listas/grids:
  - Cards de transações na tabela: fade-in + slide-up (translateY 20px → 0) em 300ms com stagger de 50ms
  - Cards de objetivos e cartões em grids: mesmo efeito com stagger de 80ms
  - Donuts do carrossel de categorias: scale (0.8 → 1) + fade-in em 400ms com stagger de 100ms
- [ ] Animações de hover consistentes:
  - Botões: transição suave de background-color em 200ms (easing ease-in-out)
  - Cards clicáveis: transição de transform (translateY) e box-shadow em 250ms (easing ease-out)
  - Avatares: transição de transform (scale) em 200ms (easing ease-in-out)
- [ ] Animações de loading para valores monetários:
  - Quando valor muda devido a filtros ou novos dados
  - Animar de zero até valor final em 800ms mostrando números intermediários
  - Easing ease-out para desaceleração natural no final
- [ ] Animações de barras de progresso:
  - Barras de objetivos e uso de cartão
  - Preencher suavemente da esquerda para direita em 1000ms (easing ease-out)
  - Quando aparecem ou atualizam
- [ ] Animações de modais:
  - Abertura: overlay fade-in (opacity 0 → 0.5) em 200ms
    - Modal fade-in + scale (0.95 → 1) em 250ms (easing ease-out)
  - Fechamento: modal fade-out + scale (1 → 0.95) em 200ms
    - Overlay fade-out em 200ms
  - Modal mobile de filtros: slide-in de translateY(100%) para 0 em 300ms (easing ease-out)
    - Slide-out inverte a direção
- [ ] Animações de toasts de notificação:
  - Entrada: slide-in da direita (translateX 100% → 0) + fade-in em 300ms (easing ease-out)
  - Saída após delay: fade-out + slide-out para direita em 250ms
- [ ] Skeleton loaders para estados de carregamento (preparação futura):
  - Cards de estatísticas: blocos retangulares cinza claro com animação pulse (opacity 0.6 ↔ 1 em 1500ms infinitamente)
  - Linhas de tabela: retângulos cinza claro com animação shimmer (gradiente linear se move da esquerda para direita)
- [ ] Micro-interações sutis:
  - Checkboxes e toggles: animação de scale leve (1 → 1.1 e volta) ao clicar
  - Inputs em foco: borda transiciona suavemente para cor de destaque em 200ms
  - Dropdowns abrindo: aparecem com fade-in + slide-down (translateY -10px → 0) em 200ms
- [ ] Utilizar Framer Motion ou CSS transitions/animations conforme apropriado
- [ ] Configurar durações e easings consistentes definindo constantes reutilizáveis
- [ ] Garantir que todas as animações respeitem prefers-reduced-motion:
  - Se usuário tem essa preferência ativada, desabilitar ou reduzir drasticamente todas as animações

**Arquivos esperados:**
- `src/utils/animations.ts` (constantes de animação)
- `src/components/ui/AnimatedWrapper.tsx` (wrapper para animações)
- Ajustes em componentes existentes para adicionar animações

---

### 🎯 PROMPT 22: Formatação e Utilitários

**Objetivo:** Criar funções utilitárias para formatação consistente

**Tarefas:**
- [ ] Utilitários para formatação de valores monetários:
  - `formatCurrency`: recebe número, retorna string formatada "R$ 1.234,56"
    - Usar Intl.NumberFormat com locale pt-BR e currency BRL
    - Sempre mostrar duas casas decimais
  - `formatCompactCurrency`: valores grandes em gráficos
    - Retorna "R$ 2,5k" para 2500 ou "R$ 1,2M" para 1200000
    - Útil para eixos de gráficos onde espaço é limitado
  - `parseCurrencyInput`: converte string de input em número limpo
    - Remove "R$", pontos de milhar, troca vírgula por ponto
    - Útil para processar valores digitados em formulários
- [ ] Utilitários para formatação de datas:
  - `formatDate`: recebe Date, retorna "DD/MM/AAAA"
    - Usar date-fns com locale pt-BR
  - `formatDateLong`: formato extenso "15 de Janeiro de 2024"
    - Útil para títulos e cabeçalhos
  - `formatDateRange`: recebe duas datas, retorna "01 jan - 31 jan, 2024"
    - Se intervalo cruza anos, incluir ano em ambas as datas
  - `formatRelativeDate`: retorna data relativa
    - "Hoje", "Ontem", "Há 3 dias", "Há 2 semanas"
    - Usar date-fns formatDistanceToNow com locale pt-BR
- [ ] Utilitários para manipulação de arrays e objetos:
  - `groupByCategory`: recebe array de transações, retorna objeto agrupado por categoria com valores somados
  - `filterByDateRange`: recebe array de transações e objeto com startDate e endDate, retorna apenas transações dentro do intervalo
  - `sortByDate`: ordena array de transações por data (ascendente ou descendente)
- [ ] Utilitários para cálculos financeiros:
  - `calculatePercentage`: recebe valor parcial e total, retorna percentual com uma casa decimal
    - Trata divisão por zero retornando 0
  - `calculateDifference`: recebe dois valores, retorna objeto com diferença absoluta e percentual de variação
  - `calculateInstallmentValue`: recebe valor total e número de parcelas, retorna valor de cada parcela arredondado para duas casas decimais
- [ ] Utilitários para validação:
  - `isValidEmail`: valida formato de email usando regex
  - `isValidCPF`: valida CPF brasileiro (apenas estrutura, sem consulta online)
  - `isValidDate`: verifica se data é válida e não é futura quando aplicável
  - `isPositiveNumber`: verifica se valor é número positivo maior que zero
- [ ] Utilitários para geração de IDs:
  - `generateUniqueId`: gera ID único usando UUID v4 ou crypto.randomUUID
- [ ] Organizar utilitários em arquivos separados por categoria:
  - `src/utils/currency.utils.ts`
  - `src/utils/date.utils.ts`
  - `src/utils/array.utils.ts`
  - `src/utils/validation.utils.ts`
  - `src/utils/id.utils.ts`
- [ ] Export nomeado de cada função
- [ ] Adicionar JSDoc comments em cada função:
  - Explicar parâmetros, retorno e exemplo de uso
- [ ] Criar testes unitários básicos para funções críticas garantindo comportamento correto

**Arquivos esperados:**
- `src/utils/currency.utils.ts`
- `src/utils/date.utils.ts`
- `src/utils/array.utils.ts`
- `src/utils/validation.utils.ts`
- `src/utils/id.utils.ts`
- `src/utils/index.ts` (export centralizado)

---

### 🎨 PROMPT 23: Responsividade e Ajustes Finais

**Objetivo:** Revisão completa de responsividade do sistema já implementado

**⚠️ IMPORTANTE:** Aplicar apenas ajustes incrementais de layout, sem refatorar arquitetura, lógica de negócio ou recriar componentes existentes.

**Tarefas:**
- [ ] Confirmar que projeto é 100% mobile-first
  - Layout base sempre parte do mobile
  - Breakpoints apenas evoluem o layout progressivamente, nunca recriam
- [ ] Utilizar exclusivamente breakpoints oficiais:
  - Mobile (base): <768px
  - Tablet (md): ≥768px e <1280px
  - Desktop (lg): ≥1280px e <1920px
  - Wide / 4K (xl): ≥1920px
- [ ] Garantir layout sempre fluido:
  - Containers principais: width: 100% (NUNCA fixo)
  - Limite de leitura: apenas com max-width, nunca largura fixa
  - Overflow horizontal: PROIBIDO em qualquer resolução
- [ ] Validar sidebar:
  - Só existe no desktop (≥1280px)
  - Em mobile e tablet NÃO deve ser renderizada (nem como display:none)
  - Navegação nesses tamanhos ocorre exclusivamente via Header Mobile com drawer
  - No desktop: sidebar aparece por padrão, estados expanded/collapsed, empurra conteúdo, nunca sobrepõe nem gera overflow
  - Sidebar e Header Mobile nunca podem coexistir
- [ ] Validar Header Mobile:
  - Renderizar apenas abaixo de 1280px
  - Contém botão de menu e ações principais
  - Desaparece completamente no desktop
- [ ] Ajustar grids:
  - Mobile-first: mobile 1 coluna (cards empilhados)
  - Tablet: evoluir para 2 colunas quando fizer sentido
  - Desktop: 3 ou 4 colunas dependendo do componente
  - Grids fluidos (auto-fit / auto-fill), nunca hardcoded
  - Aplicar a cards de resumo financeiro, objetivos, cartões e listas em geral
- [ ] Ajustar espaçamentos do conteúdo principal:
  - Mobile: px-4
  - Tablet: px-6
  - Desktop: px-8
  - Desktop: limitar largura de leitura com max-w-[1400px]
  - Wide: max-w-[1600px]
  - Sempre centralizar com mx-auto
- [ ] Ajustar tipografia:
  - Reduzir ~15% no mobile
  - Evoluir progressivamente nos breakpoints (ex: text-base md:text-lg lg:text-xl)
  - Priorizar legibilidade acima de densidade
- [ ] Ajustar tabela de transações:
  - Mobile-first: no mobile NÃO usar tabela horizontal
  - Cada transação vira um card vertical com todas as informações e labels claros
  - Tablet: versão híbrida ocultando colunas secundárias
  - Desktop: exibir tabela completa sem scroll horizontal
- [ ] Ajustar gráficos:
  - Adaptar progressivamente: mobile menor altura, labels simplificados, tooltips que não causem overflow
  - Tablet e desktop: aumentar altura e margens proporcionalmente
  - Nunca permitir overflow lateral do canvas
- [ ] Ajustar modais:
  - Mobile: modais grandes ocupam 100% da viewport
  - Tablet e desktop: usar width: 100% combinado com max-width adequado, nunca largura fixa absoluta
  - Quando houver muito conteúdo: apenas corpo do modal rola, header e footer fixos
- [ ] Garantir interações touch no mobile:
  - Touch targets mínimos: 44x44px
  - Espaçamento mínimo: 8px entre ações
  - Inputs: altura mínima 48px, font-size mínimo 16px (evita zoom no iOS)
- [ ] Garantir acessibilidade básica:
  - Navegação completa por teclado
  - Foco visível com focus:ring
  - aria-label em botões de ícone
  - alt em imagens
  - Contraste mínimo 4.5:1 conforme WCAG AA
- [ ] Validar obrigatoriamente em:
  - 375px (Mobile pequeno - iPhone SE)
  - 768px (Tablet - iPad)
  - 1280px (Desktop - laptop)
  - 1920px (Wide - Full HD)
- [ ] Corrigir qualquer problema de overflow, quebra de grid, desalinhamento ou inconsistência visual encontrada

**Arquivos esperados:**
- Ajustes em componentes existentes para responsividade

---

### ✅ PROMPT 24: Testes e Validação Final

**Objetivo:** Finalizar projeto com testes e validação completa

**Tarefas:**
- [ ] Criar fluxo de teste completo simulando jornada de usuário real:
  1. Usuário abre sistema pela primeira vez
  2. Vê dados mock pré-carregados no dashboard
  3. Clica em membro da família para filtrar
  4. Verifica que todos os cards, gráficos e tabela atualizam
  5. Clica novamente no membro para remover filtro
  6. Abre seletor de período e escolhe "Últimos 3 meses"
  7. Verifica que dados atualizam
  8. Digita texto no campo de busca
  9. Verifica que tabela filtra em tempo real
  10. Clica em "Nova Transação"
  11. Preenche formulário completo
  12. Salva transação
  13. Verifica que modal fecha, toast aparece, nova transação aparece na tabela
  14. Clica em cartão no widget
  15. Modal de detalhes abre
  16. Navega para "Cartões"
  17. Verifica que todos os cartões aparecem
  18. Navega para "Transações"
  19. Usa filtros avançados
  20. Verifica resultados
  21. Navega para "Perfil"
  22. Vê informações do usuário e membros
  23. Troca para aba "Configurações"
  24. Interage com toggles e configurações
  25. Retorna ao Dashboard
- [ ] Executar este fluxo manualmente verificando cada passo funciona corretamente
- [ ] Anotar qualquer problema encontrado
- [ ] Validação de cálculos financeiros:
  - Adicionar transações mock com valores conhecidos
  - Calcular manualmente o que saldo total deveria ser
  - Verificar se valor exibido no card está correto
  - Fazer o mesmo para receitas, despesas, percentuais de categoria
- [ ] Validação de filtros combinados:
  - Ativar filtro de membro + período + busca simultaneamente
  - Contar manualmente quantas transações deveriam aparecer
  - Verificar se tabela mostra exatamente esse número
  - Confirmar que todas as transações exibidas atendem a TODOS os critérios
- [ ] Validação de formatações:
  - Verificar se todos os valores monetários usam formato brasileiro: R$ 1.234,56
  - Verificar se todas as datas usam formato brasileiro: 15/01/2024
  - Verificar se percentuais mostram uma casa decimal: 35,5%
- [ ] Validação de responsividade:
  - Redimensionar navegador de desktop (1920px) até mobile (375px) gradualmente
  - Verificar se sidebar desaparece e header mobile aparece no breakpoint correto (1280px)
  - Verificar se grids ajustam número de colunas nos breakpoints corretos
  - Verificar se não há overflow horizontal em nenhum tamanho de tela
  - Verificar se todos os textos permanecem legíveis
  - Verificar se todos os botões permanecem clicáveis/tocáveis
- [ ] Validação de modais:
  - Abrir todos os modais um por um
  - Verificar se aparecem centralizados
  - Verificar se overlay escuro aparece
  - Verificar se fecham ao clicar no X
  - Verificar se fecham ao clicar fora
  - Verificar se fecham ao pressionar Escape
  - Verificar se validações funcionam ao tentar salvar com campos vazios
- [ ] Validação de acessibilidade:
  - Navegar todo o sistema usando apenas teclado (Tab, Enter, Escape, Setas)
  - Verificar se todos elementos interativos são alcançáveis
  - Verificar se elementos focados têm anel de foco visível
  - Verificar se ordem de tabulação é lógica
  - Usar leitor de tela (NVDA ou JAWS no Windows, VoiceOver no Mac)
  - Verificar se informações são anunciadas corretamente
- [ ] Validação de performance:
  - Abrir DevTools e monitore Performance
  - Navegar entre seções verificando se transições são suaves
  - Adicionar 100 transações mock e verificar se tabela com paginação ainda funciona rápido
  - Verificar se não há memory leaks ao abrir/fechar modais múltiplas vezes
- [ ] Corrigir quaisquer bugs encontrados durante estes testes
- [ ] Adicionar tratamento de erros em pontos críticos:
  - Funções de cálculo devem tratar divisão por zero
  - Funções de busca/filtro devem tratar arrays vazios
  - Formulários devem validar dados antes de processar
- [ ] Adicionar mensagens de feedback apropriadas:
  - Toasts de sucesso para ações bem-sucedidas
  - Toasts de erro para ações que falharam
  - Estados vazios amigáveis com CTAs claros
  - Mensagens de validação descritivas em formulários
- [ ] Documentar qualquer comportamento não óbvio ou decisão de design
- [ ] Criar README.md do projeto descrevendo:
  - Objetivo do sistema
  - Tecnologias utilizadas
  - Como instalar dependências
  - Como rodar localmente
  - Estrutura de pastas
  - Principais componentes e suas responsabilidades

**Arquivos esperados:**
- `README.md`
- Correções e melhorias em componentes existentes

---

### 🎉 PROMPT FINAL: Revisão e Entrega

**Objetivo:** Revisão final e preparação para entrega

**Tarefas:**
- [ ] Checklist completo de qualidade:
  - ✅ Todas as cinco seções principais estão implementadas e navegáveis
  - ✅ Sistema de navegação (sidebar desktop + header mobile) funciona perfeitamente
  - ✅ Context global gerencia todo o estado corretamente
  - ✅ Todos os cálculos financeiros estão corretos e testados
  - ✅ Todos os filtros (globais e locais) funcionam em combinação
  - ✅ Todos os modais estão implementados com validação
  - ✅ Todos os componentes usam exclusivamente variables do design system
  - ✅ Todo o sistema é totalmente responsivo (mobile, tablet, desktop)
  - ✅ Todas as animações e transições estão suaves e consistentes
  - ✅ Formatações de moeda e data seguem padrão brasileiro
  - ✅ Navegação por teclado funciona em todo o sistema
  - ✅ Contraste de cores atende WCAG AA
  - ✅ Sistema funciona corretamente com dados mock
- [ ] Revisar organização do código:
  - Confirmar que estrutura de pastas está clara e lógica
  - Confirmar que componentes estão bem nomeados e responsabilidades claras
  - Confirmar que não há código duplicado desnecessariamente
  - Confirmar que tipos TypeScript estão corretos em todo o sistema
  - Confirmar que imports estão organizados (React, bibliotecas, locais)
- [ ] Revisar comentários e documentação:
  - Adicionar comentários JSDoc em funções complexas
  - Adicionar comentários explicativos em lógica não-óbvia
  - Remover comentários obsoletos ou console.logs de debug
  - Garantir que README está completo e claro
- [ ] Otimizar performance final:
  - Verificar se não há re-renders desnecessários em componentes críticos
  - Verificar se imagens estão otimizadas (se houver)
  - Verificar se bundle size é razoável
  - Verificar se não há imports desnecessários inflando o bundle
- [ ] Preparar para integração futura com Supabase:
  - Identificar pontos onde dados virão do backend ao invés de mock
  - Adicionar comentários // TODO: integrar com Supabase nestes pontos
  - Garantir que estrutura de dados está compatível com schema planejado
- [ ] Criar documentação de componentes principais:
  - Listar todos os componentes criados agrupados por domínio
  - Descrever brevemente responsabilidade de cada um
  - Documentar props aceitas pelos componentes mais importantes
  - Documentar hooks customizados e suas finalidades
- [ ] Gerar relatório final:
  - Total de componentes criados
  - Total de linhas de código (aproximado)
  - Funcionalidades implementadas completamente
  - Funcionalidades parcialmente implementadas ou pendentes
  - Próximos passos sugeridos para evolução do projeto

**Arquivos esperados:**
- `COMPONENTS.md` (documentação de componentes)
- `ARCHITECTURE.md` (documentação de arquitetura)
- Relatório final

---

## 🎯 Regras Críticas de Implementação

### Hierarquia de Variáveis (OBRIGATÓRIA)
1. **Variável SEMÂNTICA** aplicada no Figma? → Usar diretamente
2. **Variável PRIMITIVA** aplicada no Figma? → Usar diretamente
3. **Valor local** (hex, px)? → Converter para primitiva mais próxima
4. **NUNCA** usar valores hardcoded

### Layout Fluido (OBRIGATÓRIA)
- Containers principais: `width: 100%` (NUNCA fixo)
- Limitação: usar `max-width`, nunca `width` fixa
- Overflow horizontal: PROIBIDO

### Responsividade (OBRIGATÓRIA)
- Mobile-first sempre
- Breakpoints: `<768px` (mobile), `≥768px e <1280px` (tablet), `≥1280px` (desktop)
- Sidebar NÃO existe em mobile/tablet
- Header Mobile NÃO existe em desktop

### Build Obrigatório
- Todo prompt DEVE passar em `npm run build` antes de commit
- Aguardar aprovação entre prompts

### Armazenamento (REGRA CRÍTICA)
- **NÃO usar localStorage, sessionStorage ou qualquer browser storage API**
- TODO estado via React state (useState, useReducer)
- Dados são temporários e existem apenas durante a sessão do navegador

---

## 📊 Status Atual

**Última atualização:** 09/02/2026  
**Prompt atual:** PROMPT 1 (Concluído)  
**Próximo prompt:** PROMPT 2 (Sistema de Layout e Navegação Desktop)
