import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repo = 'tic-tac-toe'

export default defineConfig({
  base: `/${repo}/`,
  plugins: [vue()],
})
