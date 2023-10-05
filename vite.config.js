import { defineConfig } from 'vite'
import * as path from 'path'

const outDir = path.resolve(__dirname, './сборка/Приложение-1')

function noTreeShakeForFilesWithEvalPlugin() {
  return {
    name: 'no-tree-shake-for-files-with-eval',
    transform(code) {
      if (code.indexOf('eval(') >= 0)
        return { moduleSideEffects: 'no-treeshake' }
    }
  }
}

export default defineConfig({
  server: {
    port: 1234,
    hmr: true,
  },
  build: {
    target: 'es2016',
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      plugins: [noTreeShakeForFilesWithEvalPlugin()]
    }
  },
  resolve: {
  },
  esbuild: {
    target: 'es2016',
  },
})
