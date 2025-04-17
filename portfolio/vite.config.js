import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/',      // ← include the leading and trailing slash
  build: { outDir: 'dist' }
})
