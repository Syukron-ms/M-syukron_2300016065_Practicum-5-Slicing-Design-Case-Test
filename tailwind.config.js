/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'biru': '#2D76F9',
        'putih': '#EEF4FF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover', 'active'], // Mengatur variasi untuk 'display'
    },
  },
  plugins: [],
}
