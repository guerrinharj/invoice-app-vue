<template>
<section>
    <form @submit.prevent="submitForm">
    <h2> Create invoice</h2>
    <p> Bill From </p>
    <div>
      <label for="invoice-sender-address"> Street Address: </label>
      <input name="invoice-sender-address" type="text"/>
    </div>

    <div>
      <label for="invoice-sender-city"> City </label>
      <input name="invoice-sender-city" type="text">
      <label for="invoice-sender-postcode"> Post Code </label>
      <input name="invoice-sender-postcode" type="text">
    </div>
    <p> Bill To </p>

    <div>
      <label for="invoice-client-name"> Client Name </label>
      <input name="invoice-client-name" type="text"/>
    </div>

    <div>
      <label for="invoice-client-email"> Client Email </label>
      <input name="invoice-client-email" type="text"/>
    </div>

    <div>
      <label for="invoice-client-address"> Street Address </label>
      <input name="invoice-client-address" type="text"/>
    </div>

    <div>
      <label for="invoice-client-city"> City </label>
      <input name="invoice-client-city" type="text"/>
      <label for="invoice-client-postcode"> Post Code </label>
      <input name="invoice-client-postcode" type="text"/>
      <label for="invoice-client-country"> Country </label>
      <input name="invoice-client-country" type="text"/>
    </div>

    <div>
      <label for="invoice-date"> Date </label>
      <Datepicker v-model="date"></Datepicker>
      <label for="invoice-payment-terms"> Terms </label>
      <select name="terms">
        <option v-for="term in paymentTerms" :key="term" :value="term"> {{ term }} </option>
      </select>
    </div>

    <div>
      <label for="invoice-description"> Description </label>
      <input name="invoice-description" type="text"/>
    </div>

    <h3> Item List </h3>

    <div @click="addItem()"> Add item </div>

    <ul>
      <li v-for="item in itemsList" :key="item">
        <item-form> </item-form>
      </li>
    </ul>

    <button> Submit </button>
   </form>
</section>
</template>


<script>

import ItemForm from './ItemForm.vue'
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

export default {
  components: { Datepicker, ItemForm },
  data() {
            return {
                date: null,
                paymentTerms: ['Net 1 Day', 'Net 7 Days', 'Net 15 Days', 'Net 30 Days'],
                itemsList: []
            };
        },
  methods: {
     submitForm(form) {
     this.$store.dispatch('submitingForm', {
        form: form
      })},
      addItem() {
        const newItem = 'item'

        this.itemsList.push(newItem)
      }
  }
}

</script>

<style scoped>



</style>
