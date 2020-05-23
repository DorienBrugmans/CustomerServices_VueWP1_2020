const state = {
    customers: [],
    resultMessage: {}
}

const getters = {
    allCustomers: state => state.customers,
    getResult: state => state.resultMessage
}

const actions = {
    fetchCustomers({ commit }) {
        return fetch("http://localhost:3000/customers/")
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw `error with status ${response.status}`;
                }
            })
            .then(customers => {
                commit("setCustomers", customers);
            })
            .catch(error => {
                console.log(error);
            });
    },
    addCustomer({ commit }, customer) {
        var cust = { name: customer.name, address: customer.address, phone: customer.phone }
        return fetch("http://localhost:3000/customers/", {
            method: "POST",
            body: JSON.stringify(cust),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(() => {
            commit('setResult', "success");
            customer.name = "";
            customer.address = "";
            customer.phone = "";
        }).catch(error => {
            console.log(error);
            commit('setResult', "error");
        });
    },
    clearResult({ commit }) {
        commit('clearResult');
    },
    deleteCustomer({ commit }, id) {
        return fetch("http://localhost:3000/customers/" + id, {
            method: "DELETE"
        })
            .then(() => {
                commit('removeCustomer', id);
                commit('setResult', "success");
            })
            .catch(error => {
                console.log(error);
                commit('setResult', "error");
            });
    }
}

const mutations = {
    setCustomers(state, customers) {
        state.customers = customers;
    },
    clearResult(state) {
        state.resultMessage = "";
    },
    setResult(state, result) {
        state.resultMessage = result;
        setTimeout(function () {
            state.resultMessage = "";
        }, 5000);
    },
    removeCustomer(state, id) {
        state.customers = state.customers.filter(c => c.id !== id);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}