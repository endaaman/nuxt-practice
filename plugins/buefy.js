import Vue from 'vue'
import Buefy, { Toast } from 'buefy'

const components = []

for (const c of components) {
  Vue.component(Buefy[c].name, Buefy[c])
}

Vue.use({
  install(Vue) {
    Vue.prototype.$toast = Toast
  }
})
// Vue.use(Buefy)
