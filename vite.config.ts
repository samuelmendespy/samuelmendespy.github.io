import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
],
build: {
    // Define o diretório de saída da build.
    outDir: 'docs',
  },
    
})
