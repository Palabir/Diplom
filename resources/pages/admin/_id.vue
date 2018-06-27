<template>
<v-content>
  <div class="main-container">
    <v-layout column class="container-1">
      <v-flex class="title">
        <h2>{{item.title}}</h2>
        <div class="inf">
          <p class="inf-date">{{item.created_at}},</p>
          <p class="inf-tag" v-for="(cat, i) in category" :key="i" v-if="(item.category == cat.id)"> {{cat.category}}</p>
        </div>
      </v-flex>
      <v-flex class="image">
        <div class="image-img"><img :src="item.image" alt="image"></div>
      </v-flex>
      <v-flex class="c-1-article">
        <p v-html="item.text"></p>
      </v-flex>
    </v-layout>
  </div>
</v-content>
</template>

<script>
export default {
  layout: 'admin',
  created() {
    this.$axios.$get('/api/article/' + this.$route.params.id).then((res) => {
      return this.item = res.article[0]
    })
    this.$axios.$get('api/popular').then((res) => {
      return this.news = res.news
    })
    this.$axios.$get('/api/category').then((res) => {
      return this.category = res.category
    })
  },
  data() {
    return {
      item: [],
      news: [],
      category: [],
    }
  }
}
</script>

<style lang="less">
.main-container {
  display: flex;
  flex-direction: row;
  margin: 5%;
  .container-1 {
    background-color: #d3d3d3;
    max-width: 65%;
    .title {
      max-width: 100%;
      margin: 20px 20px;
        .inf {
          margin: 14px 0 0; 
          display: flex;
          flex-direction: row;
          font-size: 15px;
          // color: rgb(180, 180, 180);
          & h2 {
          margin-bottom: 8px;
          font-weight: normal;
          & p {
            margin-bottom: 0px;
          }
          }
        }
    }
    .image {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .c-1-article {
      margin: 20px;
      font-weight: normal;
      font-size: 17px;
      image {
        height: auto;
      }
    }
  }
}

p a {
  color: #ffa705;
}
</style>
