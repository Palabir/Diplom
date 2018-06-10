<template>
<v-content>
  <v-container>
    <v-layout wrap justify-space-around>
      <v-flex class="h-cont" xs12 style="display:flex; flex-direction:row;">
        <img src="/images/question.png" alt="question" id="icon">
        <h2 class="h">Задачи</h2>
      </v-flex>
      <v-flex class="" xs6>
        <div class="container">
          <v-card v-for="(item,i) in items" :key="i" class="card" href="" :to="'article/' + item.id">
            <v-card-media :src="item.img" height="150px"></v-card-media>
            <v-card-title class="title-wrap">{{item.title}}
            </v-card-title>
          </v-card>
        </div>
      </v-flex>
      <v-flex class="right-cont" xs4 >
        <div class="f-cont">
          <div v-for="(item,i) in items" :key="i" class="article" href="" :to="'article/' + item.id">
            <div class="img">
              <img :src="item.img" alt="" id="icon-2">
            </div>
            <div class="p">
              <p class="r-c-p">{{item.title}}</p>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</v-content>
</template>

<script>
export default {
  created() {
    this.$axios.$get('news').then((res) => {
      return this.item = res.news
    })
  },
  data() {
    return {
      items: [{
        id: 1,
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        id: 2,
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        id: 3,
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        id: 4,
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, {
        title: "Если вы хотите пойти погулять, то пожалуйста, выходите гулять",
        img: "/images/Desert.jpg"
      }, ]
    }
  },
  methods: {}
}
</script>

<style>
a {
  text-decoration: none;
}

a:hover {
  color: mediumspringgreen;
}

#icon {
  width: 50px;
  height: 50px;
}

.title-wrap {
  display: flex;
  flex-wrap: wrap;
  word-wrap: normal;
}

#icon-2 {
  width: 120px;
  border-radius: 100px;
  /* height: 50px; */
}

.f-cont {}

.p {
}

.r-c-p {
  margin-left: 10px;
  font-size: 15px;
}

.article {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  max-width: 400px;
}
.article:hover {
    color: mediumspringgreen;
}

.h-cont {
  margin-left: 75px;
  height: 50px;
  align-items: center;
}

.right-cont {
  margin-top: 25px;
  background-color: #424242;
  border-radius: 5px;
}

.h {
  margin-left: 5px;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  border-radius: 2px;
  width: 250px;
  margin: 10px;
}
.card:hover {
    color: mediumspringgreen;

}
.flex .xs6 {
  max-width: 100%;
}
</style>

