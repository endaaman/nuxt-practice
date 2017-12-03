<style scoped lang="scss">
@import "../css/variables";

.sidebar {
  h2 {
    line-height: 16px;
    padding: 8px 0;
    margin-bottom: 8px;

    font-size: 16px;
    border-bottom: solid 2px $black-ter;
  }

  ul {
    margin-bottom: 36px;
  }

  li {
    line-height: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

</style>

<template lang="pug">
aside.sidebar
  h2 Category
  ul
    li
      a(href="#") プログラミング(10)
    li
      a(href="#") ポエム(6)
    li
      a(href="#") 医学(9)
    li
      a(href="#") 未分類(10)

  h2 Tags
  ul
    li
      a(href="#") Vim(1)
    li
      a(href="#") C言語(4)
    li
      a(href="#") Java(10)

  h2 Links
  ul
    li
      nuxt-link(to="/-/about") About me
    li(v-if="!authorized")
      nuxt-link(to="/login") Login
    li(v-if="authorized")
      nuxt-link(to="/logout") Logout

  h2 Accounts
  ul
    li
      a(href="http://twitter.com/endaaman") Twitter
    li
      a(href="http://github.com/endaaman") GitHub
    li
      span {{hoge}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    hoge: 'hidwa',
  }),
  computed: mapState(['articles', 'authorized']),
}
</script>
