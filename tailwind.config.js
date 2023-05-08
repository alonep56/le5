/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid', 'src/**/*.js'],
  theme: {
    extend: {
      fontSize: {
        'title-vm': ['1.625rem', '2.125rem'],
        'title-vw': ['clamp(1.625rem, 3.125vw, 3.75rem)', '1'],
        'title-number': ['clamp(7.5rem, 10.417vw, 12.5rem)', '1'],
        'title-title-account': ['clamp(7.5rem, 1.354vw, 1.625rem)', '1'],
        'title-h3': ['clamp(0.7rem, 0.781vw, 0.938rem)', '1'],
        'title-h2': ['clamp(1rem, 1.806vw, 1.625rem)', '1'],
        'title-vw-container-1440': ['clamp(1.625rem, 3.125vw, 2.813rem)', '1'],
        'title-26': ['1.625rem', '2.125rem'],
      },
      colors: {
        'background-blue-mag': '#0056c5',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

