<style scoped lang="scss">
@import "../css/variables";

header {
  background-color: $black-ter;
  color: $white-ter;
}

h1 {
  margin: 24px;
  font-family: 'Ubuntu Condensed', cursive;
  font-weight: bold;
  text-align: center;
  height: 100%;

  font-size: 24px;
  line-height: 24px;
  height: 24px;
}

.accent {
  color: $primary;
}
</style>

<template lang="pug">
header
  h1
    nuxt-link.nodeco-inline(to='/')
      span.accent E
      span NDAAMAN
      span.accent .
      span ME
</template>
