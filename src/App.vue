<template>

<the-sidebar> </the-sidebar>

<main>
  <the-list> </the-list>
</main>

</template>

<script>

import TheSidebar from './components/TheSidebar.vue'
import TheList from './components/TheList.vue'

export default {
  name: 'App',
  components: {
    TheSidebar,
    TheList
  }
}
</script>

<style>

body {
  margin: 0;
  background-color: #F8F8FB
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

</style>
