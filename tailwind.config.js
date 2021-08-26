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
        'new-green': '#25D293',
        'green-hover': '#25b783',
        'light-blue': '#404773',
        'dark-blue': '#282F4C',
        'orange': '#F3795F'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
