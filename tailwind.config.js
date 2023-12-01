/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primery : "#B7915E",
      white:'#ffff',
      assh:'#999999',
      black: '#000',
      transparent: '#ffffff00'
    }
  },
  plugins: [],
}