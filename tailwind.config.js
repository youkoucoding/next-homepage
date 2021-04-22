module.exports = {
  purge: ['./pages/**/*.{js,mdx,jsx,ts,tsx}', './components/**/*.{js,mdx,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ramab': ['Ramabhadra'],
        'nunito': ['Nunito'],
        'montserrat': ['Montserrat'],
        'mincho': ['Shippori Mincho B1'],
        'quicksand': ['Quicksand']
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/green-background.jpg')",
      }),
      colors: {
        primitive: {
          dark: '#ea9235',
          DEFAULT: '#f3a43a',
          light: '#fad882',
        },
        secondary: {
          DEFAULT: '#bdcb4d',
        },
      },
    },

    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
};
