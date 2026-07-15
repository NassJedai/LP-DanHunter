import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// SINGLE_FILE=1 npm run build → inlines JS + CSS (+ base64 fonts) into one HTML,
// used to publish the page as a self-contained Claude Artifact.
const singleFile = process.env.SINGLE_FILE === '1'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ...(singleFile ? [viteSingleFile()] : [])],
  build: {
    // In single-file mode, inline every asset (e.g. the logo) as a data URI so
    // the resulting HTML is fully self-contained for the Claude Artifact.
    assetsInlineLimit: singleFile ? 20_000_000 : 4096,
  },
})
