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
      <form id="SaveCustomerForm" @submit="checkForm" method="post">
        <div class="error-div" v-if="errors.length">
          <p>
            <b>Please correct the following error(s):</b>
          </p>

          <ul class="offset-3 left">
            <li :key="error" v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        <div class="form-group">
          <label for="inputName">Name *</label>
          <input
            type="name"
            class="form-control"
            :class="[{errorval:invalidName}]"
            id="inputName"
            placeholder="Enter full name"
            v-model="customerToAdd.name"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress">Address *</label>
          <input
            type="address"
            class="form-control"
            :class="[{errorval:invalidAddress}]"
            id="inputAddress"
            placeholder="Enter address"
            v-model="customerToAdd.address"
          />
        </div>
        <div class="form-group">
          <label for="inputPhone">Phone *</label>
          <input
            type="phone"
            class="form-control"
            :class="[{errorval:invalidPhone}]"
            id="inputPhone"
            placeholder="Enter phone"
            v-model="customerToAdd.phone"
          />
        </div>
        <button type="submit" class="btn btn-success btn-medium">
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
    },
    checkForm: function(e) {
      this.errors = [];
      this.invalidName = false;
      this.invalidAddress = false;
      this.invalidPhone = false;

      if (
        this.customerToAdd.name &&
        this.customerToAdd.address &&
        this.customerToAdd.phone
      ) {
        e.preventDefault();
        this.addCustomer(this.customerToAdd);
        return;
      }

      if (!this.customerToAdd.name) {
        this.errors.push("Name is required.");
        this.invalidName = true;
      }
      if (!this.customerToAdd.address) {
        this.errors.push("Address is required.");
        this.invalidAddress = true;
      }
      if (!this.customerToAdd.phone) {
        this.errors.push("Phone is required.");
        this.invalidPhone = true;
      }

      e.preventDefault();
    }
  },

  created() {
    this.clearResult();
  },

  data: function() {
    return {
      error: false,
      errors: [],
      invalidName: false,
      invalidAddress: false,
      invalidPhone: false,
      customerToAdd: { id: 0, name: "", address: "", phone: "" }
    };
  }
};
</script>


<style scoped>
.errorval {
  border-color: #d40a0a;
}
</style>