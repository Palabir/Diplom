<template>
<v-content>
  <div  class="main-container">
  <v-layout column class="container-1">
    <v-flex class="title">
      <h1>{{item.title}}</h1>
      <div class="inf">
        <p class="inf-date">{{item.date}},</p>
        <p class="inf-tag">{{item.tag}}</p>
      </div>
    </v-flex>
    <v-flex class="image">
      <img :src="item.image" alt="image">
    </v-flex>
    <v-flex class="c-1-article">
      <h1>{{item.text}}</h1>

    </v-flex>
    <v-flex share>
      <h1>SHARE</h1>
    </v-flex>
  </v-layout>
  <v-layout column class="container-2">
    <h1>BLA BLA BLA</h1>
  </v-layout></div>
</v-content>
</template>

<script>
export default {
  async asyncData({
      error,
      app,
      params
    }) {
      const item = await app.$axios.$get(`/api/news/${params.article}`).then(({
        data
      }) => {
        return data
      }).catch(()=>{
            return error({
                statusCode: 404,
                message: 'Not found'
            })
      })
      return {
        item
      }
  },
  methods: {}
}
</script>

<style>
.main-container {
  display: flex;
  flex-direction: row;  
  margin: 5%;
}

.container-2 {
  width: 300px;
  margin-left: 20px;
}

.inf {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  font-size: 15px;
  color: rgb(180, 180, 180);
}

.container-1 {
  border: 1px solid;
  background-color: #424242;
  /* margin-right: 20px; */
  max-width: 65%;
}

.title {
  border: 1px solid;
  /* width: 100%; */
  max-width: 100%;
  margin: 10px 20px;
}

.image {
  width: 100%;
  height: 310px;
  border: 1px solid;
  overflow: hidden;
}
img {
    margin-top: -30%;
}

.c-1-article {
  border: 1px solid;
}
</style>
