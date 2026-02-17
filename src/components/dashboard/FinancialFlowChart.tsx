import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from 'recharts'
import { formatCurrencyBR, formatCurrencyCompact } from '../../utils'
import { IconChartHistogram } from './DashboardIcons'

/** Ponto de dados do fluxo (por mês). Estrutura preparada para dados reais agrupados por mês. */
export interface FlowDataPoint {
  monthKey: string
  monthLabel: string
  monthName: string
  receitas: number
  despesas: number
}

const CHART_HEIGHT = 300

/** Dados mock para sete meses. No futuro substituir por agregação de transações por mês. */
function getMockFlowData(): FlowDataPoint[] {
  const months: { monthKey: string; monthLabel: string; monthName: string }[] = [
    { monthKey: '2025-01', monthLabel: 'Jan', monthName: 'Janeiro' },
    { monthKey: '2025-02', monthLabel: 'Fev', monthName: 'Fevereiro' },
    { monthKey: '2025-03', monthLabel: 'Mar', monthName: 'Março' },
    { monthKey: '2025-04', monthLabel: 'Abr', monthName: 'Abril' },
    { monthKey: '2025-05', monthLabel: 'Mai', monthName: 'Maio' },
    { monthKey: '2025-06', monthLabel: 'Jun', monthName: 'Junho' },
    { monthKey: '2025-07', monthLabel: 'Jul', monthName: 'Julho' },
  ]
  const receitas = [8500, 9200, 7800, 10500, 9800, 11200, 12700]
  const despesas = [6200, 5800, 7100, 5900, 6500, 7200, 6800]
  return months.map((m, i) => ({
    ...m,
    receitas: receitas[i] ?? 0,
    despesas: despesas[i] ?? 0,
  }))
}

function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null
  const data = payload[0]?.payload as FlowDataPoint | undefined
  if (!data) return null
  return (
    <div
      className="rounded-shape-20 border border-neutral-300 bg-surface-500 px-figma-16 py-figma-12 shadow-md"
      style={{ boxShadow: 'var(--shadow-md)' }}
    >
      <p className="text-paragraph-small font-semibold text-neutral-1100 mb-figma-8">
        {data.monthName}
      </p>
      <p className="text-paragraph-x-small font-normal mb-figma-4" style={{ color: 'var(--accent-green-600)' }}>
        Receitas: {formatCurrencyBR(data.receitas)}
      </p>
      <p className="text-paragraph-x-small font-normal" style={{ color: 'var(--accent-red-600)' }}>
        Despesas: {formatCurrencyBR(data.despesas)}
      </p>
    </div>
  )
}

export function FinancialFlowChart() {
  const data = getMockFlowData()

  return (
    <article
      className="w-full min-w-0 rounded-shape-20 border bg-surface-500 p-figma-32 box-border"
      style={{
        borderWidth: 'var(--border-width-sm, 1px)',
        borderColor: 'var(--neutral-300)',
      }}
      aria-label="Fluxo financeiro"
    >
      {/* Header: título + ícone à esquerda, legenda à direita */}
      <div className="flex flex-wrap items-center justify-between gap-figma-16 mb-figma-24">
        <div className="flex items-center gap-figma-8">
          <span className="text-neutral-1100 [&_svg]:w-5 [&_svg]:h-5" aria-hidden>
            <IconChartHistogram />
          </span>
          <h2 className="text-heading-x-small font-bold text-neutral-1100">
            Fluxo financeiro
          </h2>
        </div>
        <div className="flex items-center gap-figma-16">
          <span className="flex items-center gap-figma-8 text-paragraph-x-small text-neutral-1100">
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: 'var(--accent-green-600)' }}
              aria-hidden
            />
            Receitas
          </span>
          <span className="flex items-center gap-figma-8 text-paragraph-x-small text-neutral-1100">
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: 'var(--accent-red-600)' }}
              aria-hidden
            />
            Despesas
          </span>
        </div>
      </div>

      {/* Gráfico: fundo cinza suave, grid tracejado, áreas com gradiente */}
      <div
        className="w-full rounded-lg overflow-hidden"
        style={{
          height: CHART_HEIGHT,
          backgroundColor: 'var(--gray-50)',
        }}
      >
        <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
          <AreaChart
            data={data}
            margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
          >
            <defs>
              <linearGradient id="receitasFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--accent-green-600)" stopOpacity={0.3} />
                <stop offset="1" stopColor="var(--accent-green-600)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="despesasFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--accent-red-600)" stopOpacity={0.3} />
                <stop offset="1" stopColor="var(--accent-red-600)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="var(--neutral-300)"
              strokeOpacity={0.6}
              horizontal
              vertical={false}
            />
            <XAxis
              dataKey="monthLabel"
              axisLine={{ stroke: 'var(--neutral-300)' }}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--neutral-500)' }}
              dy={4}
            />
            <YAxis
              tickFormatter={formatCurrencyCompact}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--neutral-500)' }}
              width={48}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: 'var(--neutral-300)', strokeWidth: 1 }}
              isAnimationActive={false}
            />
            <Area
              type="monotone"
              dataKey="receitas"
              stroke="var(--accent-green-600)"
              strokeWidth={3}
              fill="url(#receitasFill)"
            />
            <Area
              type="monotone"
              dataKey="despesas"
              stroke="var(--accent-red-600)"
              strokeWidth={3}
              fill="url(#despesasFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}
