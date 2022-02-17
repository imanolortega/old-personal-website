module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      serif: ['Inter', 'ui-serif'],
      mono: ['Inter', 'ui-monospace'],
      display: ['Inter'],
      body: ['Inter'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
