<template>
  <main class="main-container">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'MainContainer'
}
</script>

<style lang="scss">
.main-container {
  position: relative;
  height: 72%;
  width: 42%;
  min-width: 580px;
  overflow: auto;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.09);
  border-radius: 40px;

  @media all and (max-width: 700px) {
    min-width: unset;
    width: 95%;
  }
}
</style>
