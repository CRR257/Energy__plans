<template>
  <div class="container">
    <Header />
    <div class="image">
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
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.image {
  position: relative;
  top: 2rem;
}
.container {
  width: 80%;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}
ul {
  display: flex;
  position: relative;
  top: 13px;
  right: 40px;
}
</style>
