<template>
  <div class="list-item">
    <div> {{ code }} </div>
    <div> Due {{ payment }} </div>
    <div> {{ name }} </div>
    <div> {{ value }} </div>
    <div> {{ paid ? "Paid" : "Pending" }} </div>
  </div>
</template>

<script>

export default {

  props: ["code", "name", "payment", "value", "paid"]

}

</script>

<style scoped>

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list-item div {
    margin: 30px
  }

</style>
