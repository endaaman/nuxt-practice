<style scoped lang="scss">
@import "../css/variables";
footer {
  margin-top: auto;

  height: 24px;
  line-height: 24px;
  text-align: right;

  font-style: italic;
  font-size: 14px;

  background-color: $black-ter;
  color: $white-ter;
}
</style>

<template lang="pug">
footer
  .container
    span Built at {{ builtAt }}
</template>


<script>
export default {
  data: () => ({
    builtAt: process.env.builtAt
  })
}
</script>
