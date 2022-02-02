<template>
  <section>
  <div class="menu-area">
    <div>
      <h1> Invoices </h1>
      <p> There are total {{ invoices.length }} invoices  </p>
    </div>
    <div class="filter-add-area">
      <div id="filter-status"> <div>Filter by status</div> <div id="arrowdown"><img :src="arrowdown"></div> </div>
      <div id="new-invoice"> <div> <img :src="plus"></div> <div>New Invoice</div> </div>
    </div>
  </div>

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
        },
        plus() {
          return this.$store.getters.plus
        },
        arrowdown() {
          return this.$store.getters.arrowdown
        }
  }
}

</script>

<style scoped>

section {
  margin: 80px 0
}

ul, li {
  margin: 0;
  list-style-type: none;
  padding: 0;
}

.menu-area, .filter-add-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-area h1 {
  font-weight: 800;
  font-size: 2rem;
  margin: 0;
}

.menu-area p {
  font-size: 0.8rem;
  opacity: 0.4;
  margin: 10px 0;
}

.filter-add-area {
  font-size: 0.8rem;
  font-weight: 700
}

#filter-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#arrowdown {
  margin-left: 9px;
}

#new-invoice {
  background-color:  #7C5DF8;
  color: white;
  padding: 0.5rem 0.6rem;
  border-radius: 1rem;
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#new-invoice div:first-child {
  background-color:  white;
  border-radius: 10rem;
  color: #9376FF;
  text-align: center;
  padding: 8px 10px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

li {
  margin: 20px 0;
  border-radius: 20px;
}

</style>
