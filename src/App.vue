<template>
  <h1>web page</h1>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: "App",
  components: { Navigation }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
