<style scoped lang="scss">
@import "../css/variables";
footer {
  margin-top: auto;

  height: 24px;
  line-height: 24px;
  text-align: right;

  font-style: italic;

  background-color: $black-unified;
  color: $white-unified;
}
</style>

</style>

<template lang="pug">
footer
  .container
    span.is-size-7 Built at {{ (new Date()).toJSON() }}
</template>
