<template>
<v-content>
  <nuxt/>
</v-content>
</template>

<script>
export default {
  name: 'name',
  created() {
    this.$axios.$post('/api/checkuser').then((res) => {
      return this.status = res.user
    })
  },
  data() {	
    return {
      authUserEmail: '',
      authPassword: '',
      userName: '',
      password: '',
      }
  },
  methods: {
     authButton: function() {
      console.log(this.$api)
      return this.$api().post('/api/login/', {
        email: this.authUserEmail,
        password: this.authPassword
      }).then((res) => {
        this.status = res.data.status
        if (this.status == true) {
          this.$router.push('/')
          this.isShowAuth = false
        }
      })
    },
  }
}
</script>

<style lang="less">

</style>