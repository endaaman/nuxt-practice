<style scoped lang="scss">
@import "../css/variables";
header {
  border-bottom: solid 2px #000;
  padding: 12px 0;
  color: $blue;
}
</style>

<template lang="pug">
.section
  .container
    h1.title Neomakeを使いこなせ！
    h2.subtitle syntasticから移行した
  hr
  .container
    pre.language-vim
      code
        | let g:cflags = system('pkg-config --libs --cflags gtk+-3.0 vte-2.91 lua53')
        | let g:neomake_c_enabled_makers = ['gcc']
        | let g:neomake_c_gcc_args = split(g:cflags) + [
        | \ '-fsyntax-only',
        | \ '-std=c11',
        | \ '-Wall',
        | \ '-Wextra',
        | \ '-fopenmp',
        | \ '-I./',
        | \ ]
        | let g:c_syntax_for_h = 1
</template>
