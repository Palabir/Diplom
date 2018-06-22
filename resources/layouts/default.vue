<template>
<v-app dark>
  <v-content>
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :to="'/news'">Новости</v-btn>
        <v-btn :to="'/quests'">Задачи</v-btn>
        <v-btn :to="'/tests'">Тесты</v-btn>
        <v-btn :to="'/events'">События</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <nuxt />
  </v-content>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      test: '',
      authUserEmail: '',
      authPassword: '',
      isShowReg: false,
      isShowAuth: false,
      isShowRegOrAuth: true,
      userName: '',
      password: '',
      status: false,
      repass: '',
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      email: '',
      title: 'Магазин'
    }
  },
  methods: {
    regButton: function() {
      if (this.password == this.repass) {
        this.$axios.$post('/api/register', {
          email: this.email,
          password: this.password,
        }).then((res) => {
          return res
        })
      } else {
        alert('пароль')
      }
    },
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
    logout: function() {
      return this.$axios.post('api/logout').then((res) => {
        this.status = res.data.status
        if (this.status == false) {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style>
#rightPanelBlocks {
  cursor: pointer;
}


#authAndReg {
  padding: 8px;
  height: 80px;
  width: 300px;
  border-bottom-left-radius: 20px;
}

#authAndReg #btn {
  border-radius: 4px;
}

.reg-l{
  display: flex;
  flex-direction: column;
}

#header {
  z-index: 6000000;
  height: 60px;
}

.reg{
    position: absolute;
    top: 85px;
    left: 855px;
    height: auto;
    width: 300px;
    background-color: rgb(61, 61, 61);
    z-index: 10;
  }
</style>
