/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        pixelify: ['"Pixelify Sans"', 'cursive'],
      },
      colors: {
        glass: {
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
        },
        gradient: {
          start: '#8B0000',
          middle: '#FF8C42',
          end: '#FFB347',
        },
      },
      backgroundImage: {
        'gradient-game': 'linear-gradient(to top, #8B0000 0%, #FF8C42 50%, #FFB347 100%)',
      },
    },
  },
  plugins: [],
}
  
  