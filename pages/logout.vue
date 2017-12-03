<style scope lang="scss">
@import "../css/variables";

.container-logout {
  width: 480px;
  margin: 0 auto;
}
</style>

<template lang="pug">
.container-logout
  form(v-on:submit.prevent="performLogout")
    .field
      button.button Logout
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'simple',
  data: () => ({
    loading: false,
    errorMessage: '',
  }),
  computed: mapState(['token']),
  methods: {
    performLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
      this.$toast.open({
        message: 'Logged out',
        position: 'is-bottom',
      })
    },
  }
}

</script>
