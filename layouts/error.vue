<template lang="pug">
.container
  h1(v-if="error.statusCode === 404") Page not found
  h1(v-else) Somethig went wrong
  nuxt-link(to="/") ホーム
</template>

<script>
export default {
  props: ['error'],
}
</script>
