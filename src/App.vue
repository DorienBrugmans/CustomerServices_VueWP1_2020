<template>
  <div id="app">
    <templateheader />
    <router-view />
    <templatefooter />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Vue from "vue";

Vue.component("templateheader", Header);
Vue.component("templatefooter", Footer);

export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.customersoverview {
  margin: 3rem auto;
}
.header {
  background-color: #2c3e50;
  color: #ffffff;
}

.header-title {
  margin-top: 2rem;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  margin-bottom: 2rem !important;
}

.btn-general {
  width: 100%;
}

.btn-medium {
  min-width: 50%;
}

#Header {
  background-color: #36393b !important;
  color: #ffffff !important;
}

#logo {
  height: 4rem;
}

#Header {
  padding: 2rem 2rem 0 2rem;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 3.5rem; 
}

#footer {
  position: absolute;
  bottom: -10rem;
  width: 100%;
  height: 5.5rem; 
  line-height: 60px;
  background-color: #36393b !important;
  color: #ffffff !important;
}
</style>
