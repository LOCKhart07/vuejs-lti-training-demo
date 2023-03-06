<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Aukaad from './components/Aukaad.vue';
import GridList from './components/GridListBar.vue';
import KyaPata from './components/KyaPata.vue';
</script>

<template>
  <img src="  /veet.png" class="logo vue" alt="Veet logo" />
  <HelloWorld msg="Just Veet it" />
  <Aukaad></Aukaad>
<!-- <br><br><br>
  <GridList></GridList>
  <br><br><br>
  <KyaPata></KyaPata>  -->


<!-- <div id="nav">
            <router-link to="/">Home</router-link><span>&nbsp;&nbsp;&nbsp;</span>
            <router-link to="/about">About</router-link><span>&nbsp;&nbsp;&nbsp;</span>
            <router-link to="/insult">Insult</router-link>
          </div>
          <div>
            <RouterView></RouterView>
          </div> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

[v-cloak] {
  display: none;
}

* {
  margin: 0;
  padding: 0;
}
</style>
