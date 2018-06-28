<template>
<v-container>
  <form @submit.prevent="add" class="form-cont">
    <v-flex >
      <v-text-field v-model="title" id="text" label="Заголовок" required></v-text-field>
      <v-text-field v-model="text" id="text" label="Текст статьи" multi-line></v-text-field>
    </v-flex>
    <v-flex xs6>
      <v-select :items="items" v-model="category" label="Новости" single-line></v-select>
    </v-flex>
    <v-checkbox v-model="e1" label="Популярно"></v-checkbox>
    <v-text-field v-model="image" label="Путь к картинке /images/.." required></v-text-field>
    <v-text-field v-model="created_at" label="Дата"></v-text-field>
    <v-btn type="submit">Добавить</v-btn>
  </form>
</v-container>
</template>

<script>
export default {
  created() {
    this.$axios.$post('api/admingoods').then((res) => {
      return this.goods = res.goods
    })
  },
  data() {
    return {
      e1: true,
      title: '',
      text: '',
      image: '/images/',
      category: '',
      created_at: '',
      goods: [],
      items: [{
          text: 'Новости',
          value: 6
        },
        {
          text: 'Задачки',
          value: 1
        },
        {
          text: 'Web',
          value: 2
        },
        {
          text: 'События',
          value: 3
        }
      ]
    }
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
    }
  }
}
</script>

<style lang="less">
.form-cont {
  width: 90%;
}
</style>