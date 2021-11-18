<template>
  <div class="container">
    <Header />
    <!-- Router links for A Home component and form rendering -->
    <router-link to="/"> Home </router-link>
    -
    <router-link to="register">Sign In/Sign Up</router-link>

    <router-view></router-view>
    <AllUsers />
  </div>
</template>

<script>
// Vuex plugins

// Component Imports
import Header from "./components/Header.vue";
//import FormContainer from "./components/FormContainer.vue";
import AllUsers from "./components/AllUsers.vue";

export default {
  name: "App",
  // Components imports
  components: {
    Header,
    AllUsers,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
}
</style>
