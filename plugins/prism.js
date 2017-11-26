import Vue from 'vue'
import Prism from 'prismjs'

Vue.use({
  install (Vue, options) {
    Vue.mixin({
      mounted () {
        Vue.nextTick(() => {
          Prism.highlightAll()
        })
      }
    })
  }
})
