<template>
  <section>
    <div class="logo-outer">
      <img :src="logo">
      <div class="logo-inner"> </div>
    </div>
  </section>
</template>

<script>

export default {
  computed: {
    logo() {
      return this.$store.getters.logo
    }
  }
}

</script>

<style scoped>

section {
  background-color: #373B53;
  height: 100vh;
  position: fixed;
  width: 7vw;
  border-radius: 70px 75px 45px 0px
}

.logo-outer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #7C5DF9;
  position: relative;
  padding:  30px 0 0 0;
}

.logo-inner {
  background-color: #9376FF;
  padding: 20px;
}

.logo-outer img {
}

</style>
