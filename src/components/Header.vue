<template>
  <div class="header">
    <span class="header__title">{{ name }}</span>
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
  height: 60px;
  position: absolute;
  top: 0px;
  width: 100%;
  border-bottom: 1px solid black;
  &__title {
    font-size: 21px;
    text-decoration: underline;
    position: relative;
    top: 16px;
    letter-spacing: 1.4px;
  }
}
</style>
