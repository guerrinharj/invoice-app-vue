<template>

<div class="page" :class="isSwitch ? 'dark-bg' : 'light-bg' ">
  <div class="sidebar_container">
    <the-sidebar> </the-sidebar>
  </div>
  <div class="container">
    <the-form v-if="isFormOn"> </the-form>
    <the-list v-else> </the-list>
  </div>
</div>
</template>

<script>

import TheSidebar from './components/TheSidebar.vue'
import TheList from './components/TheList.vue'
import TheForm from './components/TheForm.vue'

export default {
  name: 'App',
  components: {
    TheSidebar,
    TheList,
    TheForm
  },
  computed: {
    isSwitch() {
      return this.$store.getters.isSwitch
    },
    isFormOn(){
      return this.$store.getters.isFormOn
    }
  },
  mounted() {
    return this.$store.dispatch('fetchingInvoices')
  },
  watch: {
  // whenever active changes, this function will run
  isSwitch() {
    document.body.style.backgroundColor = this.isSwitch? 'dark-bg' : 'light-bg'
  }
}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -1px;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #F8F8FB;
}

.page {
  display: flex;
  width: 100vw;
}

.light-bg {
  background-color: #F8F8FB;
  color: #0A0E16!important;
}

.dark-bg {
  background-color: #141625!important;
  color: #fff!important
}

.sidebar_container {
  width: 7%;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93%;
}

</style>
