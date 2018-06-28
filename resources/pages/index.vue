<template>
<v-content>
  <v-container>
    <v-layout wrap justify-space-around class="main-layout">
      <v-flex class="h-cont" xs12 style="display:flex; flex-direction:row;">
        <img src="/images/news.png" alt="news" id="icon">
        <h2 class="h">Новости</h2>
      </v-flex>
      <v-flex class="cont-cont" xs7>
        <div class="container">
          <v-card v-for="(item,i) in items" :key="i" class="card" :to="'article/' + item.id">
            <v-card-media :src="item.image" height="150px"></v-card-media>
            <v-card-title class="title-wrap">{{item.title}}</v-card-title>
          </v-card>
        </div>
      </v-flex>
      <v-flex class="right-cont">
        <div class="news-cont">
          <div class="r-c-title">
            <h2>Популярное</h2>
          </div>
          <div v-for="(item,i) in news" :key="i" class="article" :to="'article/' + item.id" v-if="(i<6)">
            <nuxt-link :to="'article/' + item.id" class="item-link">
              <div class="img">
                <img :src="item.image" alt="">
              </div>
              <div class="p">
                <p class="r-c-p">{{item.title}}</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="events-cont">
          <div class="r-c-title">
            <h2>Попробуй решить</h2>
          </div>
          <div v-for="(item,i) in quests" :key="i" class="events" :href="'/'" :to="'article/' + item.id" v-if="(i<6)">
            <nuxt-link :to="'article/' + item.id" class="item-link">
              <div class="img">
                <img :src="item.image" alt="">
              </div>
              <div class="p">
                <p class="r-c-p">{{item.title}}</p>
              </div>
            </nuxt-link>
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
    this.$axios.$get("/api/news").then((res) => {
      return this.items = res.article
    })
    this.$axios.$get('api/popular').then((res) => {
      return this.news = res.news
    })
    this.$axios.$get('api/quests').then((res) => {
      return this.quests = res.quests
    })
  },
  data() {
    return {
      quests: [],
      items: [],
      news: [],
      page: 1,
    }
  },
  methods: {}
}
</script>

<style lang='less'>
.main-layout {
  .h-cont {
    margin-left: 75px;
    height: 50px;
    align-items: center;
    .h {
      margin-left: 5px;
    }
    #icon {
      width: 50px;
      height: 50px;
    }
  }
  .cont-cont {
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      .card {
        border-radius: 2px;
        width: 300px;
        margin: 10px;
        .title-wrap {
          display: flex;
          flex-wrap: wrap;
          word-wrap: normal;
        }
      }
    }
  }
  .right-cont {
    max-width: 40%;
    margin-top: -5px;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    .news-cont {
      margin-top: 31px;
      background-color: #424242;
      .r-c-title {
        text-align: center;
      }
      .article {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 15px;
        max-width: 400px;
        .item-link {
          display: flex;
          color: white;
          .img {
            margin-right: 6px;
            width: 140px;
            img {
              width: 140px;
              border-radius: 5px;
            }
          }
          & :hover {
            color: mediumspringgreen;
          }
        }
      }
    }
    .events-cont {
      margin-top: 31px;
      background-color: tan;
      .r-c-title {
        text-align: center;
      }
      .events {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 15px;
        max-width: 400px;
        .item-link {
          display: flex;
          color: white;
          .img {
            margin-right: 6px;
            width: 140px;
            img {
              width: 140px;
              border-radius: 5px;
            }
          }
        }
      }
    }
    .p {
      .r-c-p {
        margin-left: 10px;
        font-size: 15px;
        & h2 {
          margin-left: 35%;
        }
      }
    }
  }
}

.events :hover {
  color: mediumspringgreen;
}

a {
  text-decoration: none;
}

a:hover {
  color: mediumspringgreen;
}

.article:hover {
  color: mediumspringgreen;
}

.card:hover {
  color: mediumspringgreen;
}

.flex .xs6 {
  max-width: 100%;
}
</style>

