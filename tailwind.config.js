/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Gandom': ['Gandom' , 'sans'] ,
      },
      colors:{
        'Charcol': '#36384c',
      },
    },
  },
  plugins: [],
}

