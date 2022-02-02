<template>

<div class="page">
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
  background-color: #F8F8FB;
  overflow-x: hidden;
}

.page {
  display: flex;
  width: 100vw;
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
