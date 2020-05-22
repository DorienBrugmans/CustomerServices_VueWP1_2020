<template>
  <div class="savecustomer">
    <div class="container message">
      <div class="alert alert-success alert-dismissible" v-if="getResult==='success'">
        <h5>Success!</h5>
        <p>Customer was saved successfuly.</p>
        <button type="button" class="close" @click="closeMessage">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <div class="container message">
      <div class="alert alert-warning alert-dismissible" v-if="getResult==='error'">
        <h5>Error!</h5>
        <p>Something went wrong while saving this new customer. Please try again.</p>
        <button type="button" class="close" @click="closeMessage">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <h1 class="header-title">Add new customer</h1>
    <div class="container offset-lg-4 col-lg-4 offset-md-2 col-md-8">
      <form>
        <div class="form-group">
          <label for="inputName">Name</label>
          <input
            type="name"
            class="form-control"
            id="inputName"
            placeholder="Enter full name"
            v-model="customerToAdd.name"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="address"
            class="form-control"
            id="inputAddress"
            placeholder="Enter address"
            v-model="customerToAdd.address"
          />
        </div>
        <div class="form-group">
          <label for="inputPhone">Phone</label>
          <input
            type="phone"
            class="form-control"
            id="inputPhone"
            placeholder="Enter phone"
            v-model="customerToAdd.phone"
          />
        </div>
        <button type="button" class="btn btn-success btn-medium" @click="add">
          <font-awesome-icon
            :icon="['fas', 'plus-circle']"
            v-b-tooltip.hover
            title="Add new customer"
          />Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SaveCustomer",
  computed: mapGetters(["getResult"]),
  methods: {
    ...mapActions(["addCustomer", "clearResult"]),
    closeMessage() {
      this.clearResult();
    },
    add() {
      this.addCustomer(this.customerToAdd);
    }
  },
  data: function() {
    return {
      error: false,
      customerToAdd: { id: 0, name: "", address: "", phone: "" }
    };
  }
};
</script>


<style scoped>
.alert-success {
  background-color: #42b983 !important;
  color: #ffffff;
}

.alert-warning {
  background-color: #d40a0a !important;
  color: #ffffff;
}

.close:hover {
  color: #ffffff !important;
}

.message {
  margin: 1rem auto;
}
</style>