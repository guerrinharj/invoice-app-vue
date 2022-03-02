<template>
  <div class="item-wrapper" :id="id">
    <div class="list-item"  :class="isSwitch ? 'dark-bg dark-item' : 'light-bg light-item' ">
      <div class="li-code"> <span class="hash">#</span>{{ code }} </div>
      <div class="li-payment"> <span class="li-color">Due {{ payment }}</span> </div>
      <div class="li-name"> <span class="li-color">{{ name }}</span> </div>
      <div class="li-value"> £{{ value }} </div>
      <div class="li-status" :class="paid ? 'li-paid' : 'li-pending'"> {{ paid ? "●  Paid" : "●  Pending" }} </div>
    </div>

    <div class="expanded-area expanded-area-none">
      EXPANDED
    </div>
  </div>
</template>

<script>

export default {

  props: ["code", "name", "payment", "value", "paid", "id"],

  computed: {
    isSwitch() {
      return this.$store.getters.isSwitch
    },
    expandedInvoices() {
      return this.$store.getters.expandedInvoices
    }
  }
}

</script>

<style scoped>

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    font-size: 0.8rem;
    padding: 20px;
    transition: ease 0.3s;
  }

  .list-item:hover {
    border: solid 1px #9376FF;
    transition: ease 0.3s;
  }

  .light-item {
    background-color: white;
    border: solid 1px #F8F8FB;
  }

  .dark-item {
    background-color: #373B53!important;
    border: solid 1px #373B53;
  }

  .list-item div {
    margin-right: 50px;
  }

  .li-color {
    color: rgb(136, 142, 176)!important;
  }

  .li-code {
    font-weight: 700;
  }

  .li-code .hash {
    font-weight: 400;
    color: #9376FF;
  }

  .li-value {
    font-weight: 800;
    font-size: 1rem;
    text-align: right;
  }

  .li-status {
    text-align: center;
    width: 100px;
    padding: 10px 0;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1rem;
  }

  .li-paid {
    background-color: rgba(0, 255, 0, 0.1);
    color: #32D69F
  }

  .dark-item .li-pending {
     background-color: #2C2838;
     color: #FF8F00;
  }

  .light-item .li-pending {
    background-color: #FFF9F2;
    color:  #FF8F00
  }

  .expanded-area-none {
    display: none;
  }




</style>
