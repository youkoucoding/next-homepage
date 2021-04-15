module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ramab': ['Ramabhadra'],
        // 'ramab': ['Ramabhadra'],
        // 'ramab': ['Ramabhadra'],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
};
