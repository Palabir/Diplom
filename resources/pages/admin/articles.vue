<template>
<v-container class="container">
  <v-layout column>
    <v-flex class="god" v-for="(item,i) in goods" :key="i" column>
      <div class="cont">
        <img class="img" :src="item.image">
        <div class="cont-2">
          <span class="name">{{item.title}}</span>
          <span class="price" v-for="(cat, i) in category" :key="i" v-if="(item.category == cat.id)">Категория: {{cat.category}} </span>
          <span class="created_at">Создано: {{item.created_at}} </span>
        </div>
      </div>
      <!-- <span class="desc">{{item.text}}</span> -->
      <div class="btns">
        <v-flex>
          <v-btn @click="deleteItem(item)" dark>Удалить статью </v-btn>
        </v-flex>
        <v-flex>
          <v-btn :to="'/admin/' + item.id" dark>Открыть статью </v-btn>
        </v-flex>
      </div>

    </v-flex>
  </v-layout>
  <v-layout>
    <v-btn :to="'/admin/new'" dark>Добавить статью</v-btn>
  </v-layout>
</v-container>
</template>

<script>
export default {
  layout: 'admin',
  created() {
    this.$axios.$post('api/admingoods').then((res) => {
      return this.goods = res.goods
    })
    this.$axios.$get('/api/category').then((res) => {
      return this.category = res.category
    })
  },
  data() {
    return {
      e1: '',
      title: '',
      text: '',
      image: '',
      category: [],
      created_at: '',
      goods: [],
      items: [{
          text: 'Видеокарты',
          value: 2
        },
        {
          text: 'Процессоры',
          value: 3
        },
        {
          text: 'Мышь и клавиатура',
          value: 4
        },
        {
          text: 'Блоки питания',
          value: 5
        },
        {
          text: 'Мониторы',
          value: 6
        },
        {
          text: 'USB Накопители',
          value: 7
        },
        {
          text: 'Сетевые адаптеры',
          value: 8
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

    },
    deleteItem: function(product) {
      this.$axios.$post('api/deladmingood', {
        id: product.id
      }).then((res) => {
        return res
      })
      var id = product.id
      this.goods.splice(id, 1)
      location.reload()
    }
  }
}
</script>

<style lang="less">
.container {
  display: flex;
}

#text {
  border-bottom: 1px solid black;
}

.formadd {
  background-color: silver;
  border-radius: 10px;
  padding: 10px;
}

.god {
  max-width: 800px;
  margin-top: 20px;
  border-bottom: 1px solid silver;
  padding-bottom: 10px;
  .cont {
    display: flex;
    .img {
      height: 150px;
      margin-right: 25px; // width: 150px;
    }
    .cont-2 {
      display: flex;
      flex-direction: column;
      .name {
        font-size: 18px;
        font-weight: 600;
        color: white;
        padding-right: 20px;
      }
      .desc {
        font-size: 14px;
        font-weight: 400;
        color: rgb(71, 71, 71);
        padding-right: 20px;
      }
      .price {
        font-size: 20px;
        color: red;
        font-weight: 600; // padding: 10px;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>