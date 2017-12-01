<style scope lang="scss">
@import "../css/variables";

.memo-item {
  padding: 8px 16px;
  margin: 36px 0;
  border-left: 2px solid $black-ter;
  /* background-color: $white-ter; */
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    background-color: $white-ter;
  }

  .memo-title {
    font-size: 24px;
    line-height: 36px;
  }
  .memo-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
  .memo-sub {
    margin: 8px 0;
    overflow: hidden;
  }
  .memo-date {
    float: left;
    color: $text-light;
    /* font-size: $size-7; */
  }
  .memo-tags {
    margin: 0;
    float: right;
  }
}

</style>

<template lang="pug">
.article.container
  .columns
    .column
      .memo-item(v-for="memo in memos", :key="memo.slug")
        router-link.nodeco-block(:to="{path: '/-/' + memo.slug}")
          div.memo-title {{memo.title}}
          div.memo-subtitle {{memo.digest}}
        .memo-sub
          .memo-date
            | {{formatDate(memo.updated_at)}}
          .memo-tags
            .tags
              a.tag.is-white Vim
              a.tag.is-white Java
              a.tag.is-white C言語
    .column.is-narrow
      .aside.menu(style="width: 240px;").is-medium
        .menu-label
          p.menu-label Links
          ul.menu-list
            li
              router-link(to="/about") About me
            li
              router-link(to="/login") Login

          p.menu-label Links
          ul.menu-list
            li
              a(href="http://twitter.com/endaaman") Twitter
            li
              a(href="http://github.com/endaaman") GitHub

          p.menu-label Category
          ul.menu-list
            li
              a(href="#") プログラミング(10)
            li
              a(href="#") ポエム(6)
            li
              a(href="#") 医学(9)
            li
              a(href="#") 未分類(10)

          p.menu-label Tags
          ul.menu-list
            li
              a(href="#") Vim(1)
            li
              a(href="#") C言語(4)
            li
              a(href="#") Java(10)

</template>

<script>
import axios from 'axios'
import fecha from 'fecha'
import { mapState } from 'vuex'

export default {
  async fetch ({ store, params }) {
    await store.dispatch('fetchMemos')
  },
  computed: {
    memos() {
      return this.$store.state.memos
    },
  },
  methods: {
    formatDate(date) {
      return fecha.format(new Date(date), 'YYYY年MM月DD日')
    }
  }
}

</script>
