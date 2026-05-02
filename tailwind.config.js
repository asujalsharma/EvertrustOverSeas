/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        evergreen: '#1d6f67',
        forest: '#14356b',
        moss: '#2077c8',
        gold: '#e6b938',
        sand: '#f6efe1',
        ink: '#12203f',
        mist: '#f7f8fb',
        navy: '#162655',
        sky: '#66a8e2',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 60px rgba(22, 38, 85, 0.14)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(230, 185, 56, 0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(32, 119, 200, 0.14), transparent 28%), radial-gradient(circle at center right, rgba(29, 111, 103, 0.12), transparent 24%)',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(18px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
