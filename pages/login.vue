<style scope lang="scss">
@import "../css/variables";

.container-login {
  width: 480px;
  margin: 0 auto;
}


</style>

<template lang="pug">
.container-login
  .notification.is-danger(v-if="errorMessage")
    button.delete
    | {{ errorMessage }}
  form(v-on:submit.prevent="performLogin")
    .field
      label.lavel Password(俺用)
      p.control
        input.input(type="password" placeholder="Password" ref="password")
    .field
      button.button(:class="{ 'is-loading': loading }") Login
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'simple',
  data: () => ({
    loading: false,
    errorMessage: '',
  }),
  methods: {
    async performLogin() {
      this.loading = true
      this.errorMessage = ''
      const { error } = await this.$store.dispatch('login', {
        password: this.$refs.password.value
      })
      this.loading = false
      if (error) {
        this.errorMessage = error.message
      } else {
        this.$router.push('/')
        this.$toast.open({
          message: 'Logged in',
          position: 'is-bottom',
        })
      }
    }
  }
}

</script>
