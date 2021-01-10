import Vue from 'vue'
import App from './App.vue'

import 'tailwindcss/tailwind.css'
import '@mdi/font/css/materialdesignicons.min.css'
import 'particles.js/particles.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
