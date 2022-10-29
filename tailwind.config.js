module.exports = {
  purge: [
    './css/tailwind.css',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],  
  darkMode: false,
  theme: {
    extend: {

    }
  }
}