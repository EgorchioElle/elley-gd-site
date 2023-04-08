/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '345': '345px',
        '150': '150px',
        '700': '700px',
        '400': '400px',
        '240': '240px',
      },
      height: {
        '690': '690px',
        '150': '150px',
        '135': '135px',
      },
      textColor: {
        grayE: '#eee',
        title: '#73B1F6',
      },
      borderRadius: {
        '1/11': '9%',
      },
      backgroundColor: {
        background: '#11100F',
        tab: '#21201F',   
      },
      borderColor: {
        tabBorder: '#393736',
        background: '#11100F',
        grayE: '#eee',
      },
      transitionDuration: {
        DEFAULT: '400ms',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: {opacity: '1'},
        },
      },
      animation: {
        spawn: 'fade-in 1s ease-out',
      },
    },
  },
  plugins: [],
}

