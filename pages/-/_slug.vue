<style scope lang="scss">
@import "../../css/variables";

.memo-content {
  h2 {
    margin: 48px 0 24px;
    line-height: 48px;
    font-size: $size-4;
    border-bottom: solid 2px $border;
  }


  h3 {
    margin: 24px 0;
    padding: 12px;
    font-size: $size-5;
    border-left: solid 2px $border;
  }

  & > p {
    line-height: 24px;
    margin: 24px 0;
  }

  /* pre { */
  /*   max-width: 100%; */
  /*   overflow-x: auto; */
  /* } */

}

.memo-tags {
  margin-top: 16px;
}

</style>

<template lang="pug">
.article
  nav.breadcrumb.is-small(aria-label="breadcrumbs")
    ul
      li
        router-link(to="/") Home
      li
        router-link(:to="'/-/' + memo.slug") {{memo.title}}

  h1.title {{memo.title}}
  h2.subtitle(v-if="memo.digest") {{memo.digest}}
  .tags
    a.tag.is-white Vim
    a.tag.is-white Java
    a.tag.is-white C言語
  hr
  .memo-content.content
    VueMarkdown {{ memo.content }}
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  async fetch ({ store, params }) {
    console.log('fetcx')
    await store.dispatch('fetchMemos')
  },
  computed: {
    memo() {
      return this.$store.getters.findMemo(this.$route.params.slug)
    },
  },
}

</script>
