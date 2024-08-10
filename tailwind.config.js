module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Includes all JavaScript, JSX, TypeScript, and TSX files in the src directory
    './index.html',  // Includes the main HTML file
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-gradient': 'linear-gradient(to right, black, #333)',
        'yellow-gradient': 'linear-gradient(to right, yellow, #ffd700)',
      },
      spacing: {
        '25': '6.25rem', // Custom spacing example
      },
      colors: {
        'custom-yellow': '#ffd700',
        'bright-green': '#00ff00',
        'yellow-500': '#ffd700', // Optional: Can be retained if you prefer Tailwind-like naming
        'green-500': '#00ff00',  // Optional: Can be retained if you prefer Tailwind-like naming
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-green-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-blue-500',
    // Add any other dynamic classes you need here
  ],
};
