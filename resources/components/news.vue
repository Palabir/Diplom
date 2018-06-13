<template>
<div class="main-cont">
  <v-card v-for="(item, i) in items1" :key="i" class="card" href="" :to="'article/' + item.id">
    <v-card-media :src="item.image" height="150px"></v-card-media>
    <v-card-title class="title-wrap">{{item.title}}
    </v-card-title>
  </v-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  }
  // created() {
  //   this.getNews()
  // },
  // methods: {
  //   getNews() {
  //     return this.$axios.$get(`/api/news/`).then(res => {
  //       console.log(res.data)
  //       this.items = res.data
  //     })
  //   }
  // }
}
</script>
