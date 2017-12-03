import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import hljs from 'highlight.js'

const Extended = {
  extends: VueMarkdown,
  mounted () {
    this.$el.querySelectorAll('pre > code').forEach((e) => {
      let isCode = false

      let splitted = null
      e.classList.forEach((c) => {
        splitted = c.split('language-')
        if (splitted.length === 2) {
          isCode = true
          return false
        }
      })
      if (isCode) {
        e.parentElement.dataset.language = splitted[1]
        hljs.highlightBlock(e.parentElement)
      }
    })
  },
}

Vue.component('VueMarkdown', Extended)
