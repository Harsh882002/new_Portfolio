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
        orbit: ['Orbit', 'sans-serif'],
      },

      fontSize: {
        'xxs': '22px', 
        'xxl': '66px',  
        'xsx': '60px',
        '3xl': '38px',   
      },

      animation: {
        'up-down': 'upDown 2s ease-in-out infinite',
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}