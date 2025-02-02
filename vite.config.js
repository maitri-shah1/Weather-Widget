import { defineConfig } from 'vite'
import dotenv from 'dotenv';
dotenv.config();
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   server: {
    port: process.env.PORT || 5173, // Use Render's port or fallback to 5173
    host: "0.0.0.0", // Ensure it's accessible
  },
  plugins: [react()],
})
