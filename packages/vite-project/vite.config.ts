import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'

console.log(__dirname)
// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  base: '/',
  publicDir: '../public',
  plugins: [
      vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        study: resolve(__dirname, 'src/study.html')
      }
    }
  }
})
