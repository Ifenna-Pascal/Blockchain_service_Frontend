module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      // padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },  
      flexBasis: {
        '2/5': "40%",
        '3/5': '60%'
      }    
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ]
}
