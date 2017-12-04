<style scoped lang="scss">
@import "../css/variables";

h1 {
}
</style>

<template lang="pug">
div
  h1 404

</template>


<script>
export default {
  data: () => ({
    builtAt: process.env.builtAt
  })
}
</script>
