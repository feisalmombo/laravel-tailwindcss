/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{blade.php, vue, js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


    // path/to/template/files
    // './resources/views/welcome.blade.php',
    // './resources/views/about.blade.php',
    // './resources/views/*.blade.php',
    // './resources/views/**/*.blade.php',
    // './resources/views/**/*.{blade.php, vue, js}',