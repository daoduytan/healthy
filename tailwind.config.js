/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light': '#ffffff',
      'primary/300': '#ffcc21',
      'primary/400': '#ff963c',
      'primary/500': '#ea6c00',
      'secondary/300': '#8fe9d0',
      'dark/500': '#414141',
      'dark/600': '#2e2e2e',
      'gray/400': '#777777'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
