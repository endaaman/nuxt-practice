import Vue from 'vue'
import Prism from 'prismjs/components/prism-core'
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-scala';

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
