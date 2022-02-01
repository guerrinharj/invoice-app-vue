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
  border-radius: 0px 25px 20px 0px;
  padding:  50px 0 0 0;
}

.logo-inner {
  width: 100%;
  background-color: #9376FF;
  padding: 20px 10px;
  border-radius: 40px 0 20px 0 ;
}

.logo-outer img {
  position: absolute;
  top: 30%;
  width: 40px;
}

</style>
