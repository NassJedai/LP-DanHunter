import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// SINGLE_FILE=1 npm run build → inlines JS + CSS (+ base64 fonts) into one HTML,
// used to publish the page as a self-contained Claude Artifact.
const singleFile = process.env.SINGLE_FILE === '1'

const page = (path) => fileURLToPath(new URL(path, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ...(singleFile ? [viteSingleFile()] : [])],
  build: {
    // In single-file mode, inline every asset (e.g. the logo) as a data URI so
    // the resulting HTML is fully self-contained for the Claude Artifact.
    assetsInlineLimit: singleFile ? 20_000_000 : 4096,
    // Landing pages: the €100 assessment (/) and the studio visit in EN/FR/NL
    // (/visit/, /visit/fr/, /visit/nl/).
    // The single-file Artifact build only covers the main page.
    ...(singleFile
      ? {}
      : {
          rollupOptions: {
            input: {
              main: page('./index.html'),
              visit: page('./visit/index.html'),
              visitFr: page('./visit/fr/index.html'),
              visitNl: page('./visit/nl/index.html'),
            },
          },
        }),
  },
})
