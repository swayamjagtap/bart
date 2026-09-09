import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/bart/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  preview: {
    port: 4173,
    open: true,
  },
})

