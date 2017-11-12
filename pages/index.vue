<template lang="pug">
section.section
  p hi

</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'


export default {
  layout: 'default',
  async fetch ({ store, params }) {
    store.commit('increment')
  },
  computed: mapState([
    'counter'
  ]),
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  },
}

</script>
