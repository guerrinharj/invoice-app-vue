<template>
  <section>
    <div class="logo-area">
      <div class="logo-outer">
        <img :src="logo">
        <div class="logo-inner"> </div>
      </div>
    </div>
    <div class="switcher-area">
      <p @click="switchTheme">  <img :src="isSwitch ? sunswitcher : moonswitcher"> </p>
    </div>
    <div class="avatar-area">
      <img :src="avatar">
    </div>
  </section>
</template>

<script>

export default {
  computed: {
    logo() {
      return this.$store.getters.logo
    },
    moonswitcher(){
      return this.$store.getters.moonswitcher
    },
    sunswitcher(){
      return this.$store.getters.sunswitcher
    },
    isSwitch(){
      return this.$store.getters.isSwitch
    },
    avatar(){
      return this.$store.getters.avatar
    }
  },
  methods: {
    switchTheme() {
      this.$store.dispatch('switchingThemes')
    }
  }
}

</script>

<style scoped>

section {
  background-color: #373B53;
  height: 98%;
  width: 7%;
  position: fixed;
  border-radius: 00px 75px 45px 0px
}

.logo-area {
  height: 70%;
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

.switcher-area, .avatar-area {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.switcher-area {
  padding: 30px 0;
  border-bottom: solid 1px grey;
}

.avatar-area img {
  width: 30%;
  border-radius: 20px;
  margin: 20px 0;
}

</style>
