// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounceSlow 3s infinite ease-in-out',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6%)' },
        },
      },
    },
  },
}
