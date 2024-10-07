/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen:'#D3FFE6',
        customGreen2:'#8EFFBF',
        customGreen3:'#99FFC5',
        bar:'#A1FFCA'
      }
    },
  },
  plugins: [],
}