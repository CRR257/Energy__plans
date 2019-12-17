<template>
  <div class="container">
    <Header :name="title" class="namecompany"></Header>
    <nav>
      <ul>
        <li class="routes">
          <router-link class="routes__link" to="/" exact
            >Home</router-link
          >
          <router-link class="routes__link" to="/energyplans"
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
import Header from './Header.vue';

export default {
  name: 'Welcome',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      title: 'Energy Plans',
    };
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
  width: 80%;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
}
.routes {
  display: inline-block;
  font-size: 18px;
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
  color: green;
}
.nav__link {
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  letter-spacing: 1.4px;
}
a {
  padding: 5px 15px 0 7px;
  border-right: 1px solid black;
}
@media screen and (max-width: 500px){
  .nav__link {
    font-size: 13px;
  }
}
</style>
