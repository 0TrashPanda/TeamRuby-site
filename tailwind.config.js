/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'production',
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      ruby: '#e0115f',
      primary: '#d5d5d5',
      secondary: '#aaaaaa',
    },
    backgroundColor: {
      transparent: '#00000000',
      black: '#000000',
      primary: '#1D1F23'
    },
    fontFamily: {
      'sans': 'Open Sans',
      'serif': '"Open Sans", sans-serif',
      'Poppins': '"Poppins", sans-serif',
      'Raleway': '"Raleway", sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
