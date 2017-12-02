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
    /* border-left-color: $primary; */
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
div
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
