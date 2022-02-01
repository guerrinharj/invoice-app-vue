<template>
  <section>
  <ul>
    <li v-for="invoice in invoices" :key="invoice">
    <list-item
    :name="invoice.name"
    :code="invoice.code"
    :payment="invoice.payment_date"
    :value="invoice.value"
    :paid="invoice.paid">
    </list-item>
    </li>
  </ul>
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
