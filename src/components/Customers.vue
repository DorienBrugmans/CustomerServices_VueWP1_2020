<template>
  <div class="customersoverview">
    <h1 class="header-title">Customers Overview</h1>
    <div class="container">
      <CustomerTable/>
    </div>
  </div>
</template>

<script>
import CustomerTable from "./CustomerTable.vue";

export default {
  name: "Customers",
  components: {
    CustomerTable
  },
};
</script>