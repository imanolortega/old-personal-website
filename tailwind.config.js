module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Rubik', 'ui-sans-serif', 'system-ui'],
      serif: ['Rubik', 'ui-serif'],
      mono: ['Rubik', 'ui-monospace'],
      display: ['Rubik'],
      body: ['Rubik'],
    },
    letterSpacing: {
      normal: '0.015em',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
