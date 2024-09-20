/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'red-hat': ['Red Hat Display', 'sans-serif']
      },
      colors: {
        primary: {
          500: 'hsl(225, 100%, 94%)',
          600: 'hsl(245, 75%, 52%)'
        },
        neutral: {
          500: 'hsl(225, 100%, 98%)',
          600: 'hsl(224, 23%, 55%)',
          700: 'hsl(223, 47%, 23%)'
        }
      },
      borderRadius: {
        summary: '20px',
        'summary-content': '10px'
      },
      maxWidth: {
        'summary-paragraph-mobile': '235px',
        'summary-paragraph-desktop': '300px'
      },
      fontSize: {
        'summary-order': '28px'
      }
    }
  },
  plugins: []
}
