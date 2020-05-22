import Vue from 'vue';
import Vuex from 'vuex';
import Customers from './modules/Customers';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        Customers
    }
})