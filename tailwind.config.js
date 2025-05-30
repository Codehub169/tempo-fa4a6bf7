/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        'deep-slate': '#4A4E69',
        'muted-mauve': '#9A8C98',
        'soft-orchid': '#E0B1CB',
        'coral-blush': '#F28482',
        'creamy-white': '#F4F1DE',
        'pale-lilac': '#CFCAD5',
        'success': '#81B29A',
        'warning': '#F0C808',
        'error': '#E76F51',
      },
      animation: {
        'logo-reveal': 'logo-reveal 1.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'subtle-float': 'subtle-float 3s ease-in-out infinite',
      },
      keyframes: {
        'logo-reveal': {
          '0%': { opacity: 0, transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'soft-lift': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'interactive': '0 2px 10px rgba(74, 78, 105, 0.1)',
      },
      borderRadius: {
        'soft': '8px',
        'medium': '12px',
      }
    },
  },
  plugins: [],
}