import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config({path: '.env.user'})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
