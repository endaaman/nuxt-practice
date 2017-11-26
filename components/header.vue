<style scoped lang="scss">
@import "../css/variables";

header {
  background-color: $black-unified;
  color: $white-unified;
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
</style>

<template lang="pug">
header
  h1
    router-link.nodeco-inline(to='/')
      | ENDAAMAN.ME
</template>
