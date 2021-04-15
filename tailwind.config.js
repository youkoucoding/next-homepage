module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ramab': ['Ramabhadra'],
        'nunito': ['Nunito'],
        'montserrat': ['Montserrat'],
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
    colors: {
      primitive: {
        dark: '#43955f',
        DEFAULT: '#83d271',
        light: '#85d472',
      },
      secondary: {
        DEFAULT: '#f3cd81',
        light: '#fce498',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
};
