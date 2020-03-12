// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/styles/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faPhone)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Font awesome icons
  Vue.component('font-awesome', FontAwesomeIcon)

  head.meta.push({ name: "robots", content: "noindex,nofollow" })

  // https://developers.facebook.com/docs/plugins/share-button/#

  // head.meta.push({ name: "og:url", content: "https://masazas.netlify.com/" })
  // head.meta.push({ name: "og:type", content: "website" })
  // head.meta.push({ name: "og:title", content: "Masažo salonas Kaune" })
  // head.meta.push({ name: "og:description", content: "Gydomasis ir relaksuojantis masažas" })
  // head.meta.push({ name: "og:image", content: "https://masazas.netlify.com/assets/img/candles.c904d0d5.jpg" })
}
