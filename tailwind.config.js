// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          anton: ['Anton', 'sans-serif'],
        },
      },
      plugins: [
        require('tailwind-scrollbar-hide') // add this plugin
      ],
    },
  };
  