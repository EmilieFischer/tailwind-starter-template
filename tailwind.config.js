module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'header-font': ['"Anton"', 'sans-serif'],
    },
    colors: {
      'bg-color': '#ECEADF',
      'bg-white-box': '#ffffff',
      'text-black': '#000000',
      'text-hover': '#ffffff',


      'box1': '#EDE6C5',
      'box2': '#D6CCA0',
    },
      extend: {
        backgroundImage: {
          'box-background': "url('./img/img.png')",
          'bg-img': "url('./img/bg_image.jpg')",

      }
    },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  }
};