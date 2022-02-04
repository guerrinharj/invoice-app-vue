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
    <button> Submit </button>
   </form>
</section>
</template>


<script>

export default {

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
