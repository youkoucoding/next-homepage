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
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
};
