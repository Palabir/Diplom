<template>
<v-app dark>
  <v-content>
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :to="'/news'">Новости</v-btn>
        <v-btn :to="'/web'">Web</v-btn>
        <v-btn :to="'/quests'">Задачи</v-btn>
        <v-btn :to="'/events'">События</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <nuxt />
  </v-content>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      fixed: false,
      right: true,
      title: 'Новости'
    }
  }
}
</script> 
<style>
#rightPanelBlocks {
  cursor: pointer;
}

#authAndReg {
  padding: 8px;
  height: 80px;
  width: 300px;
  border-bottom-left-radius: 20px;
}

#authAndReg #btn {
  border-radius: 4px;
}

.reg-l{
  display: flex;
  flex-direction: column;
}

#header {
  z-index: 6000000;
  height: 60px;
}

.reg{
    position: absolute;
    top: 85px;
    left: 855px;
    height: auto;
    width: 300px;
    background-color: rgb(61, 61, 61);
    z-index: 10;
  }
</style>
