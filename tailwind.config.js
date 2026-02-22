/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0e0e0e',
        'dark-lighter': '#1a1a1a',
        'accent-purple': '#b624ff',
        'accent-blue': '#00d9ff',
        'text-light': '#ffffff',
        'text-gray': '#a0a0a0',
      },
      fontFamily: {
        'display': ['Clash Display', 'Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(182, 36, 255, 0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(182, 36, 255, 0.6)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        'gradient-size': '200% 200%',
      },
    },
  },
  plugins: [],
}
