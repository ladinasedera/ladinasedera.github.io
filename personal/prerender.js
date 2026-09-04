/*
 * Renders the app to static HTML at build time, one file per locale.
 *
 * The site is a Vue SPA: without this step the shipped HTML is an empty
 * <div id="app">, which Googlebot can render but GPTBot, ClaudeBot and
 * PerplexityBot cannot — they read raw HTML only. Vue hydrates the markup
 * written here, so the SPA behaviour is unchanged for visitors.
 *
 * Run by `npm run build`, after the client build.
 */
import { build } from 'vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'

import { translations, LOCALES, LOCALE_PATHS, SITE_URL } from './src/i18n.js'

const root = dirname(fileURLToPath(import.meta.url))
const outRoot = resolve(root, '..')          // vite.config.js build.outDir
const ssrDir = resolve(root, '.ssr')

/* Escapes the five characters that would break out of an attribute value. */
const attr = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
       .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

/* Replaces the content of a <meta> tag matched by one of its attributes. */
function setMeta(html, matcher, content) {
  const pattern = new RegExp(`(<meta\\s+${matcher}\\s+content=")[^"]*(")`, 'i')
  if (!pattern.test(html)) throw new Error(`meta not found in template: ${matcher}`)
  return html.replace(pattern, `$1${attr(content)}$2`)
}

function localiseHead(html, lang) {
  const t = translations[lang]
  const url = SITE_URL + LOCALE_PATHS[lang]

  html = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${attr(t.meta_title)}</title>`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)

  html = setMeta(html, 'name="description"', t.meta_desc)
  html = setMeta(html, 'name="keywords"', t.meta_keywords)
  html = setMeta(html, 'property="og:title"', t.meta_title)
  html = setMeta(html, 'property="og:description"', t.meta_desc)
  html = setMeta(html, 'property="og:url"', url)
  html = setMeta(html, 'property="og:locale"', lang === 'fr' ? 'fr_FR' : 'en_US')
  html = setMeta(html, 'property="og:locale:alternate"', lang === 'fr' ? 'en_US' : 'fr_FR')
  html = setMeta(html, 'name="twitter:title"', t.meta_title)
  html = setMeta(html, 'name="twitter:description"', t.meta_desc)

  return html
}

async function main() {
  await build({
    root,
    logLevel: 'warn',
    build: { ssr: 'src/entry-server.js', outDir: '.ssr', emptyOutDir: true },
  })

  const { render } = await import(join(ssrDir, 'entry-server.js'))
  const template = await readFile(join(outRoot, 'index.html'), 'utf-8')

  if (!template.includes('<div id="app"></div>')) {
    throw new Error('mount point not found — did index.html change?')
  }

  for (const lang of LOCALES) {
    const markup = await render(lang)
    const html = localiseHead(template, lang)
      .replace('<div id="app"></div>', `<div id="app">${markup}</div>`)

    const dir = join(outRoot, LOCALE_PATHS[lang])
    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, 'index.html'), html)
    console.log(`prerendered ${LOCALE_PATHS[lang]}  (${(html.length / 1024).toFixed(1)} kB)`)
  }

  await rm(ssrDir, { recursive: true, force: true })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
