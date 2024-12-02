/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],  
        parkinsans: ['Parkinsans', 'sans-serif'],  
        poppins : ['Poppins','sans-serif'],
        permanentMarker: ['"Permanent Marker"', 'cursive'],
      },

      fontSize: {
        'xxs': '10px',  
        'xxl': '36px',  
        '3xl': '48px',   
      },
    },
  },
  plugins: [],
}