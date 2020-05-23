<template>
  <div id="app">
    <Customers />
  </div>
</template>

<script>
import Customers from "../components/Customers.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Customers
  },
  methods: {
    ...mapActions(["addCustomer", "clearResult"])
  },
  created() {
    this.clearResult();
  }
};
</script>
