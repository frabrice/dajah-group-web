/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        accent: {
          50: '#E8F0FA',
          100: '#D1E1F5',
          200: '#A3C3EB',
          300: '#75A5E1',
          400: '#4787D7',
          500: '#1969CD',
          600: '#06347C',
          700: '#052966',
          800: '#041E4F',
          900: '#031439',
        },
        military: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}