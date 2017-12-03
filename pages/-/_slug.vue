<style scope lang="scss">
@import "../../css/variables";

.article-content {
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
}

.article-tags {
  margin-top: 16px;
}

</style>

<template lang="pug">
.article
  nav.breadcrumb.is-small(aria-label="breadcrumbs")
    ul
      li
        nuxt-link(to="/") Home
      li
        nuxt-link(:to="'/-/' + article.slug") {{article.title}}

  h1.title {{article.title}}
  h2.subtitle(v-if="article.digest") {{article.digest}}
  .tags
    a.tag.is-white Vim
    a.tag.is-white Java
    a.tag.is-white C言語
  hr
  .article-content.content
    VueMarkdown {{ article.content }}
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  async fetch ({ store, params }) {
    await store.dispatch('fetchArticles')
  },
  computed: {
    article() {
      return this.$store.getters.findArticle(this.$route.params.slug)
    },
  },
}

</script>
