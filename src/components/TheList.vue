<template>
  <section>
    <list-item> </list-item>
  </section>
</template>

<script>

import ListItem from './ListItem.vue'

  export default {
    components: { ListItem },
    computed: {
      invoices() {
        return this.$store.getters.invoices
      }
    }
  }

</script>

<style scoped>
</style>
