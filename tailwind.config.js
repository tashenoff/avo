module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1180px"
      }
    },
    extend: {
      colors: {
        'new-blue': '#404773',
        'new-green': '#25D293'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
