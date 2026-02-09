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
      },
      // Espaçamentos semânticos
      spacing: {
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
