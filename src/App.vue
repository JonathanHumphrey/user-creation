<template>
  <div class="container">
    <Header class="header" />

    <!-- Router links for A Home component and form rendering -->
    <div class="test">
      <div class="nav">
        <UserData class="user-data" />
        <router-link to="/" class="router-link"> Home </router-link>
        <router-link to="register" class="router-link"
          >Login/Register</router-link
        >
      </div>
      <div class="view-container">
        <router-view class="view"></router-view>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
// Vuex plugins

// Component Imports
import Header from "./components/Header.vue";
//import FormContainer from "./components/FormContainer.vue";
//import AllUsers from "./components/AllUsers.vue";
import UserData from "./components/UserData.vue";

export default {
  name: "App",
  // Components imports
  components: {
    Header,
    //AllUsers,
    UserData,
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

  width: 100%;
  height: 100%;
}
html {
  min-height: 100%;
  background: rgb(181, 177, 236);
  background: linear-gradient(
    180deg,
    rgba(181, 177, 236, 1) 0%,
    rgba(109, 168, 226, 1) 35%,
    rgba(20, 33, 36, 1) 100%
  );
}
.container {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
.router-link {
  font-size: 2rem;
  color: azure;

  border-radius: 2.5rem;
  width: 15rem;
  height: 2.5rem;
}
.router-link:hover {
  color: aquamarine;
}
.nav {
  display: inherit;
  flex-direction: column;
}
.view-container {
  width: 100%;
  border-radius: 5rem;
}
.test {
  display: inherit;
}
::-webkit-scrollbar {
  width: 1rem;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(29, 29, 29);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(109, 168, 226, 1) 35%;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(181, 177, 236, 1) 0%;
}
</style>
