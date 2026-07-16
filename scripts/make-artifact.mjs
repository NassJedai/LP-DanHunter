// Turns the single-file build (dist/index.html) into an Artifact-ready file:
// strips the <html>/<head>/<body> wrappers (the Artifact host supplies its own)
// while keeping <title>, <style> and the inlined <script>.
//
// Usage: SINGLE_FILE=1 npm run build && node scripts/make-artifact.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = readFileSync(resolve(root, 'dist/index.html'), 'utf8')

const headInner = /<head[^>]*>([\s\S]*?)<\/head>/i.exec(src)?.[1] ?? ''
const bodyInner = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(src)?.[1] ?? ''

const cleanedHead = headInner
  .replace(/<meta\s+charset[^>]*>/gi, '')
  .replace(/<meta\s+name="viewport"[^>]*>/gi, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .trim()

const out = `${cleanedHead}\n${bodyInner.trim()}\n`
const dest = resolve(root, 'dist/artifact.html')
writeFileSync(dest, out)

console.error(`wrote ${dest} (${(out.length / 1024).toFixed(1)} KB)`)
for (const [label, re] of [
  ['<html> (must be false)', /<html/i],
  ['<title>', /<title/i],
  ['<style>', /<style/i],
  ['#root', /id="root"/i],
  ['<script>', /<script/i],
]) {
  console.error(`  ${label}: ${re.test(out)}`)
}
