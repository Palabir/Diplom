<template>
<v-container>
  <form class="formadd" @submit.prevent="add">
    <v-flex column>
      <v-text-field v-model="title" id="text" label="Заголовок" required></v-text-field>
      <v-text-field  label="Текст" ></v-text-field>
      <vue-editor v-model="text"></vue-editor>
    </v-flex>
    <v-flex xs6>
      <v-select :items="items" v-model="category" label="Статьи" single-line></v-select>
    </v-flex>
    <!-- <v-checkbox v-model="e1" label="Популярный товар"></v-checkbox> -->
    <v-text-field v-model="image" label="Путь к картинке /images/.......jpg и поместите картинку в /resources/static/images" required></v-text-field>
    <v-text-field v-model="created_at" label="Создано в" required></v-text-field>
    <v-btn type="submit">Добавить товар</v-btn>
  </form>
</v-container>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  created() {
    this.$axios.$post('api/admingoods').then((res) => {
      return this.goods = res.goods
    })
  },
  data() {
    return {
      e1: 1,
      title: '',
      text: '',
      image: '',
      category: '',
      created_at: '',
      goods: [],
      items: [{
          text: 'Статьи',
          value: 2
        },
        {
          text: 'Задачки',
          value: 3
        },
        {
          text: 'Тесты',
          value: 4
        },
        {
          text: 'События',
          value: 5
        }
      ]
    }
  },
  components: {
    VueEditor
  },
  methods: {
    add: function() {
      return this.$axios.$post('api/addgood', {
        title: this.title,
        text: this.text,
        isPopular: this.e1,
        image: this.image,
        category: this.category,
        created_at: this.created_at
      }).then((res) => {
        alert(res)
        location.reload()
      })

    },
  }
}
</script>

<style lang="less">

</style>