<template>
<section>
   <form @submit.prevent="submitForm">
   <h2> Create invoice</h2>
   <p> Bill From </p>
    <label for="invoice-sender-address"> Street Address: </label>
    <input name="invoice-sender-address" type="text"/>
    <label for="invoice-sender-city"> City </label>
    <input name="invoice-sender-city" type="text">
    <label for="invoice-sender-postcode"> Post Code </label>
    <input name="invoice-sender-postcode" type="text">
    <p> Bill To </p>
    <label for="invoice-client-name"> Client Name </label>
    <input name="invoice-client-name" type="text"/>
    <label for="invoice-client-email"> Client Email </label>
    <input name="invoice-client-email" type="text"/>
    <label for="invoice-client-address"> Street Address </label>
    <input name="invoice-client-address" type="text"/>
    <label for="invoice-client-city"> City </label>
    <input name="invoice-client-city" type="text"/>
    <label for="invoice-client-postcode"> Post Code </label>
    <input name="invoice-client-postcode" type="text"/>
    <label for="invoice-client-country"> Country </label>
    <input name="invoice-client-country" type="text"/>
    <label for="invoice-client-country"> Country </label>
    <input name="invoice-client-country" type="text"/>
    <label for="invoice-date"> Date </label>
    <Datepicker v-model="date"></Datepicker>
    <label for="invoice-payment-terms"> Terms </label>
    <select name="terms">
      <option v-for="term in paymentTerms" :key="term" :value="term"> {{ term }} </option>
    </select>
    <label for="invoice-description"> Description </label>
    <input name="invoice-description" type="text"/>
    <button> Submit </button>
   </form>
</section>
</template>


<script>

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

export default {
  components: { Datepicker },
  data() {
            return {
                date: null,
                paymentTerms: ['Net 1 Day', 'Net 7 Days', 'Net 15 Days', 'Net 30 Days']
            };
        },
  methods: {
     submitForm(form) {
     this.$store.dispatch('submitingForm', {
        form: form
      })}
  }
}

</script>

<style scoped>
</style>
