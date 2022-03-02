<template>
  <section>
  <div class="menu-area">
    <div>
      <h1> Invoices </h1>
      <p> There are total {{ invoices.length }} invoices  </p>
    </div>
    <div class="filter-add-area">
      <div id="filter-status" @click="filterMenu">
       <div>Filter by status</div>
       <div id="arrowdown"><img :src="arrowdown"></div>
       <div v-if="isMenuOpen" class="filter-menu" :class="isSwitch ? 'dark-bg' : 'light-bg' ">
          <ul>
            <li v-for="status in invoicesStatus" :key="status" @click="filterList(status)"> {{ status }} </li>
          </ul>
       </div>
      </div>
      <div id="new-invoice" @click="openForm"> <div> <img :src="plus"></div> <div>New Invoice</div> </div>
    </div>
  </div>

  <ul class="invoice-list">
    <a><li v-for="invoice in invoices" :key="invoice"  @click="expandItem(invoice)">
    <list-item
    :name="invoice.name"
    :code="invoice.code"
    :payment="invoice.payment_date"
    :value="invoice.value"
    :paid="invoice.paid"
    :id="invoice.id"
    :expanded="false"
    >
    </list-item>
    </li></a>
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
        },
        isMenuOpen() {
          return this.$store.getters.isMenuOpen
        },
        isSwitch() {
          return this.$store.getters.isSwitch
        },
        invoicesStatus() {
          return this.$store.getters.invoicesStatus
        }

  },
      methods: {
        filterMenu() {
          this.$store.dispatch('filteringMenu')
        },
        filterList(item) {
          this.$store.dispatch('filteringList', {
            item: item
          })
        },
        openForm(){
          this.$store.dispatch('openingForm')
        },
        expandItem(invoice){
          this.$store.dispatch('expandingItem', {
            invoice: invoice
          })
        }
  }
}

</script>

<style scoped>

section {
  margin: 40px 0;
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
  background-color: inherit;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

#arrowdown {
  margin-left: 9px;
}

.filter-menu {
  position: absolute;
  top: 30px;
  left: -40px;
  padding: 15px 50px;
  border-radius: 10px;
  box-shadow: 2px 5px 10px #333333;
}

.filter-menu ul {
  list-style-type: disc
}

.filter-menu li {
  margin: 15px 0;
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

.invoice-list li {
  margin: 20px 0;
  border-radius: 20px;
}



</style>
