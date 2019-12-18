<template>
  <div class="footer">
    <ul>
      <li class="footer__links">Aviso Legal</li>
      <li class="footer__links">Política de Privacidad</li>
      <li class="footer__links">Condiciones Generales de Contratación</li>
      <li class="footer__links">Cookies</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  height: 70px;
  background-color: rgba(10, 0, 0, 0.96);
  width: 100%;
  &__links {
    padding: 8px 7px;
    cursor: pointer;
  }
}
ul {
  display: flex;
  flex-wrap: initial;
  color: white;
  list-style-type: none;
  justify-content: center;
  position: relative;
  top: 30px;
  padding: 0;
}
li {
  padding: 1px;
}
@media screen and (max-width: 600px){
  .footer {
    font-size: 8px;
  }
}
@media screen and (min-width: 600px){
    .footer {
    font-size: 11px;
    &__links {
       padding: 8px 14px;
    }
  }
}
</style>
