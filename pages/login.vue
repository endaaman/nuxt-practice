<style scope lang="scss">
@import "../css/variables";

</style>

<template lang="pug">
.article
  .container
    form(v-on:submit.prevent="performLogin")
      .field
        label.lavel Password(俺用)
        p.control
          input.input(type="password" placeholder="Password" ref="password")
      .field
        // button.button.is-success Login
        button.button Login
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  methods: {
    performLogin() {
      const loading = this.$loading.open()
      setTimeout(() => {
        loading.close()
      }, 4000)
      console.log(this.$refs.password.value)
    }
  }
}

</script>
