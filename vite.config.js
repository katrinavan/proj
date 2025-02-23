import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'


css: {
    postcss: {
      plugins: [
        tailwindcss, 
        autoprefixer,
      ]
    }
  }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
