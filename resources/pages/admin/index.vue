<template>
<v-content>
  <div class="main-main">
    <v-container class="main-cont">
      <v-layout class="auth">
        <p>Авторизация</p>
      </v-layout>
      <v-layout class="login-block">
        <v-form @submit.prevent="authButton">
          <v-text-field class="field" v-model="authLogin" label="Логин" required></v-text-field>
          <v-text-field class="field" v-model="authPassword" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" label="Пароль" required></v-text-field>
        </v-form>
      </v-layout>
      <v-layout class="btn-login">
        <v-btn class="login" @click="loginA()">Авторизоваться</v-btn>
      </v-layout>
    </v-container>
  </div>
</v-content>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'admin',
  created() {
    this.$axios.$get('/api/getUser').then((res) => {
      return this.user = res.user[0]
    })
    // this.$axios.$post('/api/checkuser').then((res) => {
    //   console.log('AAAAAAAAAAAA')
    //   return this.status = res.user
    // })
  },
  data() {
    return {
      e1: true,
      user: [],
      authLogin: '',
      authPassword: '',
      userName: '',
      password: '',
    }
  },
  methods: {
    loginA() {
      if (this.user.login == this.authLogin && this.user.password == this.authPassword) {
        document.location.href = "/admin/articles"
      } else alert("Ошибка авторизации!")
      return null
      //   return this.$api().post('/api/login', {
      //     login: this.authLogin,
      //     password: this.authPassword
      //   }).then((res) => {
      //     this.status = res.data.status
      //     console.log('Вошел')
      //     if (this.status == true) {
      //       this.$router.push('/admin')
      //     }
      //   })
      // },
      // logout: function(){
      //     return  this.$axios.post('api/logout').then((res) =>{
      //       this.status = res.data.status
      //         console.log('Вышел')
      //       if(this.status == false){
      //         this.$router.push('/admin')
      //       }
      //     })
      //   }
    }
  }
}
</script>

<style lang="less">
.main-main {
  width: 100%; // background-image: url('/images/back.jpg');
  height: 100%;
  position: fixed;
  /* top: 0; */
  /* left: 0; */
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
  .main-cont {
    background-color: #e9e9e9;
    max-width: 370px;
    .return {
      a :link & :hover & :active {
        color: white;
        & :visited {
          color: #e9e9e9;
        }
      }
    }
    .auth {
      justify-content: center;
      p {
        font-size: 20px;
        margin: 5px 0 0 0;
      }
    }
    .btn-login {
      justify-content: center;
    }
  }
}
</style>