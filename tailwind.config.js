/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-in-top': 'bounceInTop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-in-bottom': 'bounceInBottom 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-in-left': 'bounceInLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-in-right': 'bounceInRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        bounceInTop: {
          '0%': {
            transform: 'translateY(-100%) translateX(-50%)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(10%) translateX(-50%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0%) translateX(-50%)',
            opacity: '1',
          },
        },
        bounceInBottom: {
          '0%': {
            transform: 'translateY(100%) translateX(-50%)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(-10%) translateX(-50%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0%) translateX(-50%)',
            opacity: '1',
          },
        },
        bounceInLeft: {
          '0%': {
            transform: 'translateX(-100%) translateY(-50%)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateX(10%) translateY(-50%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(0%) translateY(-50%)',
            opacity: '1',
          },
        },
        bounceInRight: {
          '0%': {
            transform: 'translateX(100%) translateY(-50%)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateX(-10%) translateY(-50%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(0%) translateY(-50%)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
