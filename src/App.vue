<template>
  <div id="app">
    <div>
      <router-link class="nav-link" to="/home"></router-link>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: 1.4px;
}
</style>
