<script>
export default {
  name: "Base",
  data: function() {
    return {
      customers: [],
      error: "",
      url: "http://localhost:3000/customers/"
    };
  },

  methods: {
    getCustomers: function() {
      this.customers = [];
      this.error = "";
      fetch(this.url)
        .then(response => {
          if (response.status == 200) {
            return response.json();
          } else {
            throw `error with status ${response.status}`;
          }
        })
        .then(customers => {
          this.customers = customers;
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>