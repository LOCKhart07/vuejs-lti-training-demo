<script setup>
import { onMounted, ref, reactive, computed } from 'vue'

const username = ref("LOCKhart")
const myColor = ref("Red")
const users = reactive([{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" }, { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" }, { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" }, { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" }, { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" }, { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }])
const showNames = ref(false)
const inputText = ref("")
const activaBackgroundColor = ref("red")
// const whatBackground = ref(false)
const isEpileptic = ref(false)
const numbers = ref([])
const fiestaAudio = new Audio('.\\fiesta.mp3')
const catGif = ref(null)

function updateUsername(us) {
  username.value = us
}

function randomUsername() {
  username.value = users[Math.floor(Math.random() * users.length)].first_name
}

const colors = ["red", "blue", "yellow", "green"]
const lyrics = ["Disco Deewane", "Aahaan", "Ahaan", "Ho"]
var tempIter = 0

function toggleColor() {
  if (tempIter == colors.length - 1) {
    tempIter = 0
  }
  else {
    tempIter++
  }
  myColor.value = colors[tempIter]
}

onMounted(() => {
  console.log("Aukaad present, Maam!")
  updateUsername("LOCKy")
  showNames.value = false
})

const isEmpty = computed(() => {
  return inputText.value.length == 0 ? "Yes" : "No"
})

const moreThanFive = computed(() => {
  return inputText.value.length > 5 ? true : false
})

const moreThanTen = computed(() => {
  return inputText.value.length > 10 ? true : false
})

const dikhanaHeKya = computed(() => {
  return inputText.value.length > 20 ? true : false
})

const fiesta = computed(() => {
  if (numbers.value.length >= 3) {
    fiestaAudio.play()
    console.log("dfsfds", catGif.value)
    catGif.value.scrollIntoView({ behaviour: 'smooth', block: 'start' })
    return true
  }
  fiestaAudio.pause()
  return false

})

const whatBackground = computed(() => {
  return numbers.value.length >= 3 ? true : false
})
</script>

<template>
  <div id="main-div" :class="{ 'rainbow-bg': whatBackground && !isEpileptic }">
    <div>
      <button type="button" @click="toggleColor">Sing</button>
      <div>
        <h5 style="display: inline-block" v-show="tempIter > 0">{{ lyrics[0] }}&nbsp;&nbsp;&nbsp;</h5>
        <h2 style="display: inline-block" v-show="tempIter > 1">{{ lyrics[1] }}&nbsp;&nbsp;&nbsp;</h2>
        <h1 style="display: inline-block" v-show="tempIter > 2">{{ lyrics[2] }}&nbsp;&nbsp;&nbsp;</h1>
      </div>
      <h2 :style="{ color: myColor }">BROOOOOOOOOOOOOOOOOOOOOOOOOO , {{ username }}</h2>
      <button type="button" @click="randomUsername">Random username</button>
      <ol v-show="showNames">
        <li v-for="user in users">
          <div style="display: flex; flex-direction: row;">
            <div style="display: inline-block;">
              {{ user.first_name }}
            </div>
            <div style="display: inline-block;">
              <img :src="user.avatar" width="50" height="50">
            </div>
          </div>
        </li>
      </ol>
      <button type="button" @click="showNames = !showNames" v-show="!showNames">Show people bro</button>
      <button type="button" @click="showNames = !showNames" v-show="showNames">Hide people bro</button>
    </div>
    <div>
      <form @submit.prevent="">
        <input type="text" v-model.trim="inputText">
        <input type="checkbox" v-model="isEpileptic">Are you Epileptic?
      </form>

      <p v-show="!dikhanaHeKya" class="green-text" :class="{ 'yellow-text': moreThanFive, 'red-text': moreThanTen }">Input
        empty: {{ isEmpty }}</p>
      <h3 class="rainbow" v-show="dikhanaHeKya">CHUP CHUPPPP CHUPPPPP</h3>
    </div>
    <div>
      <form @submit.prevent="">
        <select v-model="numbers" multiple>
          <option value="uno">One</option>
          <option value="dos">Two</option>
          <option value="tres">Three</option>
        </select>
      </form>
      <ul>
        <li v-for="number in numbers">{{ number }}</li>
      </ul>
      <img class="cat" id="catGifId" v-show="fiesta" src="/cat-fiesta.gif">
    </div>
  </div>
  <div ref="catGif"></div>
</template>

<style>
.green-text {
  color: green;
  font-size: 20px;
}

.yellow-text {
  color: yellow;
}

.red-text {
  color: red;
}


.rainbow {
  animation: rainbow 2.5s linear;
  animation-iteration-count: infinite;
}

.cat {
  animation: catBig 5s;
  width: 500px;
  height: 500px;
}

@keyframes catBig {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

@keyframes rainbow {

  100%,
  0% {
    color: rgb(255, 0, 0);
  }

  8% {
    color: rgb(255, 127, 0);
  }

  16% {
    color: rgb(255, 255, 0);
  }

  25% {
    color: rgb(127, 255, 0);
  }

  33% {
    color: rgb(0, 255, 0);
  }

  41% {
    color: rgb(0, 255, 127);
  }

  50% {
    color: rgb(0, 255, 255);
  }

  58% {
    color: rgb(0, 127, 255);
  }

  66% {
    color: rgb(0, 0, 255);
  }

  75% {
    color: rgb(127, 0, 255);
  }

  83% {
    color: rgb(255, 0, 255);
  }

  91% {
    color: rgb(255, 0, 127);
  }
}

.rainbow-bg {
  animation: rainbow-bg 2.5s linear;
  animation-iteration-count: infinite;
}

@keyframes rainbow-bg {

  100%,
  0% {
    background-color: rgb(255, 0, 0);
  }

  8% {
    background-color: rgb(255, 127, 0);
  }

  16% {
    background-color: rgb(255, 255, 0);
  }

  25% {
    background-color: rgb(127, 255, 0);
  }

  33% {
    background-color: rgb(0, 255, 0);
  }

  41% {
    background-color: rgb(0, 255, 127);
  }

  50% {
    background-color: rgb(0, 255, 255);
  }

  58% {
    background-color: rgb(0, 127, 255);
  }

  66% {
    background-color: rgb(0, 0, 255);
  }

  75% {
    background-color: rgb(127, 0, 255);
  }

  83% {
    background-color: rgb(255, 0, 255);
  }

  91% {
    background-color: rgb(255, 0, 127);
  }
}
</style>