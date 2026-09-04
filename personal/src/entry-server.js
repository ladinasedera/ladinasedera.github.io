import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

export async function render(lang) {
  return renderToString(createSSRApp(App, { lang }))
}
