module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serifElegant: ['"Playfair Display"', 'serif'],
        sansModern: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#2d6a4f',
        secondary: '#40916c',
        accent: '#52b788',
      },
    },
  },
  plugins: [],
}