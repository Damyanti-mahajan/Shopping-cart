import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss()
  ],
   test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', 
     globals: true,
  },
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // Optional: safely import the tailwind plugin
// let tailwindPlugin = [];
// if (process.env.NODE_ENV !== 'test') {
//   try {
//     tailwindPlugin = [require('@tailwindcss/vite').default()];
//   } catch (e) {
//     console.warn('tailwindcss/vite plugin not found or failed to load');
//   }
// }

// export default defineConfig({
//   plugins: [
//     react(),
//     ...tailwindPlugin,
//   ],
//   test: {
//     environment: 'jsdom',
//     setupFiles: './src/setupTests.js',
//     globals: true,
//   },
// });
