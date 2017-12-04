<style scope lang="scss">
@import "../css/variables";

.article-item {
  padding: 8px 16px;
  margin: 36px 0;
  border-left: 2px solid $black-ter;
  /* background-color: $white-ter; */
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    background-color: $white-ter;
    /* border-left-color: $primary; */
  }

  .article-title {
    font-size: 24px;
    line-height: 36px;
  }
  .article-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
  .article-sub {
    margin: 8px 0;
    overflow: hidden;
  }
  .article-date {
    float: left;
    color: $text-light;
    /* font-size: $size-7; */
  }
  .article-tags {
    margin: 0;
    float: right;
  }
}
</style>

<template lang="pug">
div
  .article-item(v-for="article in articles", :key="article.slug")
    nuxt-link.nodeco-block(:to="{path: '/-/' + article.slug}")
      div.article-title {{article.title}}
      div.article-subtitle {{article.digest}}
    .article-sub
      .article-date
        | {{formatDate(article.updated_at)}}
      .article-tags
        .tags
          a.tag.is-white Vim
          a.tag.is-white Java
          a.tag.is-white C言語
</template>

<script>
import axios from 'axios'
import fecha from 'fecha'
import { mapState } from 'vuex'


export default {
  async fetch ({ store, params }) {
    await Promise.all([
      store.dispatch('getArticles'),
      // store.dispatch('checkAuth'),
    ])
  },
  computed: {
    articles() {
      return this.$store.state.articles
    },
  },
  methods: {
    formatDate(date) {
      return fecha.format(new Date(date), 'YYYY年MM月DD日')
    }
  }
}

</script>
