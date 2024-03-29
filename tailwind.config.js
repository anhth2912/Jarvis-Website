module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      boxShadow: {
        '5xl': '0 10px 30px 0 rgba(50, 50, 50, 0.16)',
      },
    },
    fontFamily: {},
    maxWidth: {
      unset: 'unset',
    },
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      'min-576': { min: '576px' },
      'min-2400': { min: '2400px' },
      'max-1920': { max: '1920px' },
      'max-1440': { max: '1440px' },
      'max-1366': { max: '1366px' },
      'max-xl': { max: '1280px' },
      'max-lg': { max: '1024px' },
      'max-md': { max: '768px' },
      'max-sm': { max: '640px' },
      'max-xs': { max: '576px' },
      'max-440': { max: '440px' },
      'max-375': { max: '375px' },
      'max-320': { max: '320px' },
    },
    zIndex: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      auto: 'auto',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['winter'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: false,
  },
}
