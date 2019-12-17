<template>
  <div class="container">
    <div class="namecompany">ENERGY_PLANS</div>
    <nav>
      <ul>
        <li class="navbar__item">
          <router-link class="nav__link" to="/energyplans"
            >Energy Plans</router-link
          >
        </li>
      </ul>
    </nav>
    <div>
      <img src="../assets/sunrise.jpg" aria-hidden="true" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';

export default {
  name: 'Welcome',
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
nav {
  padding-bottom: 8px;
}
.namecompany {
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #ff3f3f;
  position: relative;
  display: flex;
  top: 16px;
}
.container {
  max-width: 800px;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
}
.navbar {
  &__item {
    display: inline-block;
    padding: 5px 15px 0 0;
    font-size: 18px;
    border-right: 1px solid black;
  }
  &__link {
    font-size: 15px;
    letter-spacing: 1.4px;
    text-decoration: none;
    color: inherit;
  }
}
ul {
  display: flex;
  position: relative;
  top: 13px;
  right: 40px;
}
.router-link-active {
  color: white;
}
.nav__link {
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  letter-spacing: 1.4px;
}
@media screen and (max-width: 500px){
  .nav__link {
    font-size: 13px;
  }
}
</style>
