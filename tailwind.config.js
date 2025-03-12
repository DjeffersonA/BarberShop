/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Pega todos os arquivos nas pastas dentro de src
    './pages/**/*.{js,ts,jsx,tsx}', // Inclui também as páginas (se estiver usando a pasta pages)
    './components/**/*.{js,ts,jsx,tsx}', // Inclui a pasta de componentes
  ],
  theme: {
    extend: {
      colors: {
        // Defina suas cores personalizadas aqui, se necessário
        primary: '#FF5733',
        secondary: '#33B5FF',
      },
      fontFamily: {
        // Defina fontes personalizadas, se necessário
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      screens: {
        // Você pode personalizar os breakpoints padrão
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}