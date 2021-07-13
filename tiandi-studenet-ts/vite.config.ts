import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

var path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@component': path.resolve(__dirname, 'src/component'),
        '@page': path.resolve(__dirname, 'src/page'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@mock': path.resolve(__dirname, 'src/mock')
    }
  },
  plugins: [reactRefresh()]
})
