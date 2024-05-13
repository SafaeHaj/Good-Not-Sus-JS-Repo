<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  }
}
</script>

<style>
body {
  background-color: #36465D;
}

.sep {display: flex; justify-content: center;}
</style>
