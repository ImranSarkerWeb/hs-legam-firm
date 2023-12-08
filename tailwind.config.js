/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:() =>({
        'servicesImage':"url('https://images.pexels.com/photos/4427630/pexels-photo-4427630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        "aboutBanner": "url('./src/assets/aboutBanner.jpg')"
      })
    },
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