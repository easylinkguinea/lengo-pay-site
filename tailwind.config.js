/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'window-glow': 'windowGlow 2s ease-in-out infinite',
        'move-coin': 'moveCoin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        windowGlow: {
          '0%, 100%': { backgroundColor: '#fef3c7', boxShadow: '0 0 5px rgba(254, 243, 199, 0.5)' },
          '50%': { backgroundColor: '#fef9c3', boxShadow: '0 0 15px rgba(254, 243, 199, 0.8)' },
        },
        moveCoin: {
          '0%': { transform: 'rotate(0deg) translateX(2rem) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(2rem) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}