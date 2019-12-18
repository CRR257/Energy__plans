<template>
  <div class="header">
    <span class="header__title">Energy Plans</span>
    <div class="routes">
      <router-link class="routes__link" to="/" exact
        >Home</router-link
      >
        <router-link class="routes__link" to="/energyplans"
        >Energy Plans</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['name'],
};
</script>

<style lang="scss" scoped>
.header {
  height: 40px;
  border-bottom: 1px solid black;
  &__title {
    font-family: "Rubik", sans-serif;
    color: #ff3f3f;
    letter-spacing: 1.3px;
    display: flex;
    position: relative;
    top: 10px;
  }
}
.router-link-active {
  color: green;
}
.routes {
  position: relative;
  display: flex;
  &__link {
    text-decoration: none;
    color: inherit;
  }
}
.nav__link {
  text-decoration: none;
  color: inherit;
  font-size: 15px;
}
a {
  padding: 5px 15px 0 7px;
  border-right: 1px solid black;
}
.title {
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #ff3f3f;
  position: relative;
  display: flex;
  top: 16px;
}
@media screen and (max-width: 600px){
  .header__title {
    font-size: 16px;
  }
  .routes {
    font-size: 11px;
    top: 22px;
  }
}
@media screen and (min-width: 600px){
  .header__title {
    font-size: 16px;
    font-size: 20px;
  }
  .routes {
    font-size: 11px;
    top: 20px;
    font-size: 15px;
  }
}
</style>
