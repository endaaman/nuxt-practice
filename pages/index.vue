<style lang="scss">
@import "../css/variables";

.memo-content {
  h2 {
    margin: 48px 0 24px;

    font-size: $size-4;
    border-bottom: solid 2px $border;
  }


  h3 {
    margin: 24px 0;
    padding-left: 12px;

    font-size: $size-5;
    border-left: solid 2px $border;
  }

  p {
    line-height: 24px;
    margin: 24px 0;
  }
}
</style>

<template lang="pug">
.section
  .container
    h1.title Neomakeを使いこなせ！
    h2.subtitle syntasticから移行した
    .tags
      .tag.is-white Vim
      .tag.is-white Java
      .tag.is-white C言語
  hr
  .container.memo-content
    VueMarkdown {{ memo.content }}
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  layout: 'default',
  async fetch ({ store, params }) {
    const { data } = await axios.get('https://api.endaaman.me/memos')
    store.commit('setMemoItems', data)
  },
  computed: {
    memo() {
      const items = this.$store.state.memo.items
      console.log(items)
      return items[items.length - 1]
    },
    // ...mapState([
    //   'memo'
    // ])
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  },
}

</script>
