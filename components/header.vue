<style scoped lang="scss">
@import "../css/variables";
header {
  padding: 24px;

  background-color: $black-unified;
  color: $white-unified;
  /* border-bottom: 4px solid $black-unified; */
}

h1 {
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
  router-link.link-block(to='/')
    h1 ENDAAMAN.ME
</template>
