import './assets/main.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import { langFromPath } from './i18n.js'

const lang = langFromPath(window.location.pathname)

/* Prerendering stamps this into each built file; the dev server serves one
   template for both paths, so set it here too. */
document.documentElement.lang = lang

/* Production HTML is prerendered by prerender.js, so the app hydrates it.
   The dev server has an empty #app, so it mounts normally instead. */
const app = import.meta.env.PROD
  ? createSSRApp(App, { lang })
  : createApp(App, { lang })

app.mount('#app')
