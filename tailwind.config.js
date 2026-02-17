/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Breakpoints oficiais do projeto
      screens: {
        'md': '768px',   // Tablet
        'lg': '1280px',  // Desktop
        'xl': '1920px',  // Wide / 4K
      },
      // Cores semânticas (do design system Figma)
      colors: {
        // Semânticas
        'primary': 'var(--color-primary)',
        'background-primary': 'var(--color-background-primary)',
        'background-secondary': 'var(--color-background-secondary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
        'border-default': 'var(--color-border-default)',
        'success': 'var(--color-success)',
        'danger': 'var(--color-danger)',
        'icon-default': 'var(--color-icon-default)',
        // Primitivas
        'gray': {
          50: 'var(--gray-50)',
          200: 'var(--gray-200)',
          500: 'var(--gray-500)',
          700: 'var(--gray-700)',
          900: 'var(--gray-900)',
        },
        'lime': {
          500: 'var(--lime-500)',
        },
        'green': {
          500: 'var(--green-500)',
        },
        'red': {
          500: 'var(--red-500)',
        },
        // Figma MCP tokens
        'primary-figma': {
          500: 'var(--primary-500)',
          700: 'var(--primary-700)',
        },
        'secondary-figma': {
          50: 'var(--secondary-50)',
          900: 'var(--secondary-900)',
        },
        'surface': {
          500: 'var(--surface-500)',
        },
        'neutral': {
          0: 'var(--neutral-0)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          1100: 'var(--neutral-1100)',
        },
        'accent': {
          'blue-600': 'var(--accent-blue-600)',
          'green-600': 'var(--accent-green-600)',
          'red-600': 'var(--accent-red-600)',
        },
        /* Financeiro Dashboard export (theme.css) */
        'primary-accent': 'var(--primary-accent)',
        'primary-accent-foreground': 'var(--primary-accent-foreground)',
        'income': 'var(--income)',
        'expense': 'var(--expense)',
        'warning': 'var(--warning)',
      },
      // Espaçamentos (Figma space/ + semânticos)
      spacing: {
        'figma-0': 'var(--space-0)',
        'figma-2': 'var(--space-2)',
        'figma-4': 'var(--space-4)',
        'figma-8': 'var(--space-8)',
        'figma-12': 'var(--space-12)',
        'figma-16': 'var(--space-16)',
        'figma-20': 'var(--space-20)',
        'figma-24': 'var(--space-24)',
        'figma-32': 'var(--space-32)',
        'figma-56': 'var(--space-56)',
        'figma-72': 'var(--space-72)',
        'page-padding-x-mobile': 'var(--spacing-page-padding-x-mobile)',
        'page-padding-x-tablet': 'var(--spacing-page-padding-x-tablet)',
        'page-padding-x-desktop': 'var(--spacing-page-padding-x-desktop)',
        'card-padding': 'var(--spacing-card-padding)',
        'gap-md': 'var(--spacing-gap-md)',
        'gap-lg': 'var(--spacing-gap-lg)',
      },
      // Tipografia semântica
      fontSize: {
        'heading-lg': 'var(--font-size-heading-lg)',
        'heading-md': 'var(--font-size-heading-md)',
        'body-lg': 'var(--font-size-body-lg)',
        'body-md': 'var(--font-size-body-md)',
        'body-sm': 'var(--font-size-body-sm)',
        // Figma MCP (Sidebar node 2012-8386)
        'heading-x-small': ['var(--font-heading-x-small-size)', { lineHeight: 'var(--font-heading-x-small-line)', letterSpacing: 'var(--font-letter-spacing-figma)' }],
        'label-medium': ['var(--font-label-medium-size)', { lineHeight: 'var(--font-label-medium-line)', letterSpacing: 'var(--font-letter-spacing-figma)' }],
        'paragraph-small': ['var(--font-paragraph-small-size)', { lineHeight: 'var(--font-paragraph-small-line)', letterSpacing: 'var(--font-letter-spacing-figma)' }],
        'paragraph-x-small': ['var(--font-paragraph-x-small-size)', { lineHeight: 'var(--font-paragraph-x-small-line)', letterSpacing: 'var(--font-letter-spacing-figma)' }],
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
      },
      // Shapes e bordas
      borderRadius: {
        'md': 'var(--border-radius-md)',
        'full': 'var(--border-radius-full)',
        'shape-2': 'var(--shape-2)',
        'shape-20': 'var(--shape-20)',
        'shape-100': 'var(--shape-100)',
      },
      borderWidth: {
        'sm': 'var(--border-width-sm)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
      },
    },
  },
  plugins: [],
}
