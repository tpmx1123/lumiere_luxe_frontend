/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'salon-beige': '#F5F3EE',
        'salon-light-beige': '#F4F1EC',
        'salon-gold': '#906b3a',
        'salon-brown': '#604A31',
        'salon-dark-brown': '#604a31',
        'salon-button-hover': '#7a5a2f',
      },
    },
  },
  plugins: [],
}

