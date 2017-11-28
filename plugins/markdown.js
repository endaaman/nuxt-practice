import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import hljs from 'highlight.js'

const Extended = {
  extends: VueMarkdown,
  mounted () {
    this.$el.querySelectorAll('pre > code').forEach((e) => {
      let isCode = false
      e.classList.forEach((c) => {
        if (c.startsWith('language-')) {
          isCode = true
          return false
        }
      })
      if (isCode) {
        hljs.highlightBlock(e.parentElement)
      }
    })
  }
}

Vue.component('VueMarkdown', Extended)
