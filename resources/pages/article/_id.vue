<template>
<v-content>
  <div  class="main-container">
  <v-layout column class="container-1">
    <v-flex class="title">
      <h1>{{item.title}}</h1>
      <div class="inf">
        <p class="inf-date">{{item.dat}},</p>
        <p class="inf-tag">{{item.tag}}</p>
      </div>
    </v-flex>
    <v-flex class="image">
      <h1>IMAGE</h1>
      <img :src="item.image" alt="image">
    </v-flex>
    <v-flex class="article">
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
  data() {
    return {
      item: {
        title: "ЭТО НАЗВАНИЕ ВНИМАНИЕ ВСЕМ ",
        date: "24.05.05",
        tag: "Переводы",
        image: "/images/Desert.jpg",
        text: "adadadawdwad"
      }
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
}

.title {
  border: 1px solid;
  /* width: 100%; */
  max-width: 100%;
  margin: 10px 20px;
}

.image {
  width: 100%;
  margin-top: -30%;
  border: 1px solid;
  overflow: hidden;
}

.article {
  border: 1px solid;
}
</style>
