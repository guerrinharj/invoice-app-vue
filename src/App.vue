<template>

<div class="page" :class="isSwitch ? 'light-bg' : 'dark-bg' ">
  <div class="sidebar_container">
    <the-sidebar> </the-sidebar>
  </div>
  <div class="list_container">
    <the-list> </the-list>
  </div>
</div>
</template>

<script>

import TheSidebar from './components/TheSidebar.vue'
import TheList from './components/TheList.vue'

export default {
  name: 'App',
  components: {
    TheSidebar,
    TheList
  },
  computed: {
    isSwitch() {
      return this.$store.getters.isSwitch
    }
  },
  mounted() {
    return this.$store.dispatch('fetchingInvoices')
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

.list_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93%;
}

</style>
