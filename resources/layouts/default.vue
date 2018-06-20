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

        <v-flex id="rightPanelBlocks">
          <v-container id="authAndReg" >
              <v-btn id="btn" v-if="status==false" @click="isShowReg = ! isShowReg" white>Регистрация</v-btn>
              <v-btn id="btn" v-if="status==false" @click="isShowAuth = ! isShowAuth">Вход</v-btn>
          </v-container>
              <v-btn id="btn" v-if="status==true" @click="logout">Выйти</v-btn>
        </v-flex>
        <div id="click" v-if="isShowReg==true" @click="isShowReg=!isShowReg"> </div>
        <v-container class="reg" v-if="isShowReg==true" dark>
          <v-layout column="reg-l">
            <v-flex>
              <v-btn id="back" @click="isShowReg=false">назад</v-btn>
            </v-flex>
            <v-flex>
              <form>
                <v-text-field v-model="userName" label="Имя профиля" required></v-text-field>
                <v-text-field v-model="email" label="Email" required></v-text-field>
                <v-text-field type="password" v-model="password" label="Пароль" required></v-text-field>
                <v-text-field type="password" v-model="repass" label="Повторите пароль" required></v-text-field>
                <v-btn @click="regButton" id="button-reg">Зарегистрироваться</v-btn>
              </form>
            </v-flex>
          </v-layout>
        </v-container>
        <div id="click" v-if="isShowAuth==true" @click="isShowAuth=!isShowAuth"> </div>
        <v-container class="reg" v-if="isShowAuth==true" dark>
          <v-layout>
            <v-flex>
              <v-btn id="back" @click="isShowAuth=false">назад</v-btn>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <form @submit.prevent="authButton">
                <v-text-field label="Email" v-model="authUserEmail" required></v-text-field>
                <v-text-field label="Пароль" v-model="authPassword" required></v-text-field>
                <v-btn type="submit" id="button-reg">Войти</v-btn>
              </form>
            </v-flex>
          </v-layout>
        </v-container>

      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <nuxt />
  </v-content>
</v-app>
</template>

<script>
import axios from 'axios'
export default {
  // created() {
  //   this.$axios.$post('/api/checkuser').then((res) => {
  //     return this.status = res.user
  //   })
  // },
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
