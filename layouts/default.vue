<style lang="scss">
@import "../css/variables";

$breakpoint: 720px;

@media screen and (min-width: $breakpoint) {
  .row {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;  // this is needed for horizontal grow
  }

  .col-main {
    flex: 3;
    min-width: 0; // this is needed for pre tag sizing
  }

  .col-sidebar {
    flex: 1;
    position: sticky;
    align-self: flex-start;
    top: 0;
    min-width: 240px;
    max-width: 480px;
  }
}

@media screen and (max-width: $breakpoint - 1) {
  .col-sidebar {
    position: fixed;
    right: 0;
    top: 80px;
    background-color: $white;
    width: 480px;
  }
}
</style>

<template lang="pug">
.root
  my-header
  .row.container
    .col-sidebar
      .section
        my-sidebar
    .col-main
      .section
        nuxt
  my-footer
</template>
