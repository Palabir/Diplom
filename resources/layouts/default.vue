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
        <v-btn id="buttons" dark @click="isShowAuth = !isShowAuth">Вход</v-btn>
        <v-btn @click="isShowReg = !isShowReg" id="button-reg">Зарегистрироваться</v-btn>
        <v-container class="reg" v-if="isShowReg==true">
          <v-layout>
            <v-flex>
              <v-btn id="back" @click="isShowReg=false">назад</v-btn>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <form>
                <v-text-field v-model="userName" label="Имя профиля" required></v-text-field>
                <v-text-field v-model="email" label="Email" required></v-text-field>
                <v-text-field v-model="password" label="Пароль" required></v-text-field>
                <v-text-field v-model="repass" label="Повторите пароль" required></v-text-field>
                <v-btn @click="regButton" id="button-reg">Зарегистрироваться</v-btn>
              </form>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container class="reg" v-if="isShowAuth==true" dark>
          <v-layout>
            <v-flex>
              <v-btn id="back" @click="isShowAuth=false">назад</v-btn>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <form method="post">
                <v-text-field value="email"></v-text-field>
                <v-text-field value="Пароль"></v-text-field>
                <v-btn id="button-reg">Войти</v-btn>
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
  created() {},
  data() {
    return {
      test: '',
      clipped: true,
      isShowReg: false,
      isShowAuth: false,
      drawer: true,
      fixed: false,
      userName: '',
      password: '',
      repass: '',
      email: '',

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Магазин'
    }
  },
  methods: {
    closeWindow(a) {
      if (a = 1) {
        this.isShowReg = !this.isShowReg;
        // this.isShowAuth = !this.isShowAuth;
      }
      if (a = 2) {
        this.isShowAuth = !this.isShowAuth;

      }
    },
    regButton: function() {
      if (this.password == this.repass) {
        axios.post('api/register', {
          username: this.userName,
          password: this.password,
          email: this.email,
        })
      } else {
        alert('пароль')
      }
    }
  }
}
</script>

<style>
.reg {
  position: absolute;
  margin-top: 70px;
  width: 250px;
  right: 280px;
  background-color: rgb(158, 177, 175);
}
</style>
