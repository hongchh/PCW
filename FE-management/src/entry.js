import Vue from 'vue'
import VueMaterial from 'vue-material/dist/vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
  router
})
