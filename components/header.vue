<template lang="pug">
header
  h1 ENDAAMAN.ME
  ul
    li
      nuxt-link.is-dark(to="/") Home
    li
      nuxt-link(to="/about") About
  hr
</template>

<style scoped>
h1 {
  font-family: 'Ubuntu Condensed', cursive;
  text-align: center;
}

ul {
  display: flex;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  margin: 0px;
}

ul li {
  list-style: none;
  position: relative;
  margin: 0 10px;
}

ul li a {
  font-family: 'Ubuntu Condensed', cursive;
  display: block;
  padding: 5px 20px;
  border-bottom: 2px solid #000;
  text-decoration: none;
  font-size: 20px;
}

hr {
  border: 0;
}

</style>
