<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
<!-- 
  <div class="card">
    <button type="button" @click="count+=2">count is {{ count }}</button>
    <p>
      Yaha, ese hi hota he
    </p>
  </div> -->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
