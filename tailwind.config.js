module.exports = {
  theme: {
    container: {
      center: true,
      padding: '8rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        'roccat-blue': {
          100: '#E6F0FF',
          200: '#BFDAFF',
          300: '#99C3FF',
          400: '#4D97FE',
          500: '#006AFE',
          600: '#005FE5',
          700: '#004098',
          800: '#003072',
          900: '#00204C',
        },
        'h1-light': {
          100: '#F1F1F1',
          200: '#F2F9E9',
          300: '#F3F3F9',
          400: '#F4F4F9',
          500: '#F5F5F9',
          600: '#F6F6F9',
          700: '#F7F7F9',
          800: '#F8F8F9',
          900: '#F9F9F9',
        }
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover']
    }
  },
  plugins: [],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk', 'src/**/*.js'],
  } : {}
}