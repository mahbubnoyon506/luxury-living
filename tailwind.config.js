module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',        
      "primary": "#251D58",       
      "secondary": "#000000",              
      "accent": "#16322E",            
      "neutral": "#2B2735",             
      "base-100": "#FFFFFF",             
      "info": "#66BCD6",             
      "success": "#42D7B4",              
      "warning": "#F1B846",             
      "error": "#EC696E",
    },
  },

  plugins: [
    require('tw-elements/dist/plugin')
  ]
}