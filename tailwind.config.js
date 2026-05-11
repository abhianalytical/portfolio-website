/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: '#050816',
        ink: '#0b1024',
        cyanGlow: '#00e5ff',
        violetGlow: '#a855f7',
        mintGlow: '#34d399',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 35px rgba(0, 229, 255, 0.28)',
        violet: '0 0 35px rgba(168, 85, 247, 0.25)',
      },
      backgroundImage: {
        'mesh-dark':
          'radial-gradient(circle at 20% 20%, rgba(0, 229, 255, 0.14), transparent 30%), radial-gradient(circle at 78% 16%, rgba(168, 85, 247, 0.16), transparent 28%), linear-gradient(135deg, #050816 0%, #0b1024 48%, #111827 100%)',
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('light', '.light &');
    },
  ],
};
