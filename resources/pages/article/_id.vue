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
      <!-- <vue-goodshare></vue-goodshare> -->
    </v-layout>
    <v-layout column class="container-2">
      <v-flex class="right-cont" xs4>
        <div class="f-cont">
          <div v-for="(item,i) in news" :key="i" class="article" href="" :to="'article/' + item.id">
            <div class="img">
              <img :src="item.image" alt="" id="icon-2">
            </div>
            <div class="p">
              <p class="r-c-p">{{item.title}}</p>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</v-content>
</template>

<script>
// import VueGoodshare from 'vue-goodshare'
export default {
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
  },
  components: {
    // VueGoodshare
  }
}
</script>

<style>
p a {
  color: aqua;
}

.main-container {
  display: flex;
  flex-direction: row;
  margin: 5%;
}

.container-2 {
  width: 300px;
  margin-left: 20px;
}

.c-1-article image {
  height: auto;
}

.inf {
  margin: 14px 0 0;
  display: flex;
  flex-direction: row;
  font-size: 15px;
  color: rgb(180, 180, 180);
}

.inf p {
  margin-bottom: 0px;
}

.container-1 {
  /* border: 1px solid; */
  background-color: #424242;
  /* margin-right: 20px; */
  max-width: 65%;
}

.title {
  /* border: 1px solid; */
  /* width: 100%; */
  max-width: 100%;
  margin: 20px 20px;
}

.title h2 {
  margin-bottom: 8px;
  font-weight: normal;
}

.image {
  width: 100%;
  height: 100%;
  /* border: 1px solid; */
  overflow: hidden;
}

img {
  /* margin-top: -30%; */
  width: 100%;
  /* height: 100%; */
}

.c-1-article {
  /* border: 1px solid; */
  margin: 20px;
  font-weight: normal;
  font-size: 17px;
}
</style>
