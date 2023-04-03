/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '400ms'
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: {opacity: '0.75'},
        },
        'flower-in': {
          from: { transform: 'scale(1.2)' },
          to: { transform: 'scale(1)'},
        },
        'boat-in': {
          from: { transform: 'translateX(-24px)' },
          to: { transform: 'translateX(0px)'},
        },
        'indicate-fade': {
          from: { color: 'white' },
          to: { color: '#8EE4AF'},
        },
        slideIn: {
          from: {
            'margin-left': '100%',
            width: '300%'
          },     
          '75%': {
            'font-size': '200%',
            'margin-left': '-30%',
            width: '150%'
          },   
          to: {
            'margin-left': '0%',
            width: '100%'
          }
        }
      },
      animation: {
        spawn: 'fade-in 1s ease-out',
        flower: 'flower-in 1s ease-out',
        boat: 'boat-in 1s ease-out',
        indicate: 'indicate-fade 1s infinite alternate',
        'slidein': "slideIn 3s"
      }
    },
  },
  plugins: [],
}
