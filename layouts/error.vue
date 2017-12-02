<style scoped lang="scss">
@import "../css/variables";
</style>

<template lang="pug">
.root
  my-header
  .columns
    .column.section
      h1(v-if="error.statusCode === 404") Page not found
      h1(v-else) Somethig went wrong
      nuxt-link(to="/") ホーム
    .column.section.is-narrow
      my-sidebar
  my-footer
</template>

<script>
export default {
  props: ['error'],
}
</script>
