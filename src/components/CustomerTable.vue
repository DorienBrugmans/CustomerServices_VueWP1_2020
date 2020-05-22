<template>
  <div id="CustomersTable">
    <div class="container message">
      <div class="alert alert-success alert-dismissible" v-if="getResult==='success'">
        <h5>Success!</h5>
        <p>Customer was deleted successfuly.</p>
        <button type="button" class="close" @click="closeMessage">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <div class="container message">
      <div class="alert alert-warning alert-dismissible" v-if="getResult==='error'">
        <h5>Error!</h5>
        <p>Something went wrong while deleting this new customer. Please try again.</p>
        <button type="button" class="close" @click="closeMessage">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <div id="table" class="table-responsive-sm">
      <table class="table">
        <thead>
          <tr>
            <th scope="col-1">Customer number</th>
            <th scope="col-2">Name</th>
            <th scope="col">Address</th>
            <th scope="col-2">Phone</th>
            <th scope="col-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="customer.id" v-for="customer in allCustomers" v-bind:customer="customer">
            <th scope="row">{{customer.id}}</th>
            <td>{{customer.name}}</td>
            <td>{{customer.address}}</td>
            <td>{{customer.phone}}</td>
            <td>
              <button type="button" class="btn btn-danger" @click="delCustomer(customer.id)">
                <font-awesome-icon :icon="['fas', 'trash-alt']" v-b-tooltip.hover title="Delete" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CustomerTable",
  computed: mapGetters(["allCustomers", "getResult"]),
  methods: {
    ...mapActions(["fetchCustomers", "deleteCustomer", "clearResult"]),
    delCustomer(id) {
      this.deleteCustomer(id);
    },
    closeMessage() {
      this.clearResult();
    }
  },

  created() {
    this.fetchCustomers();
  },

  data: function() {
    return {
      customerToDelete: { id: 0, name: "", address: "", phone: "" }
    };
  }
};
</script>
