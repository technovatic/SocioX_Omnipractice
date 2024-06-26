/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
     // You can extend colors, fonts, spacing, etc.
     backgroundImage: () => ({
      'hero-image': "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }),
    backgroundSize: {
      '100% 100%': '100% 100%', // Stretch to cover the entire container (may distort aspect ratio)
    },
    backgroundPosition: {
      'center': 'center',
      'top': 'top',

    },
    backgroundRepeat: {
      'no-repeat': 'no-repeat',
      'repeat': 'repeat',
      // Add more custom repeat styles as needed
    },
  },
};
export const plugins = [];
