<template>
  <body>
    <div
      class="container"
      v-bind:class="[
        this.activeUser !== null
          ? this.activeUser.darkMode
            ? 'dark-mode'
            : 'light-mode'
          : 'container',
      ]"
    >
      <Header class="header" />

      <i
        class="far fa-lightbulb"
        @click="togglePallete($event)"
        v-show="[this.activeUser && this.activeUser.darkMode]"
      ></i>
      <i
        class="fas fa-lightbulb"
        @click="togglePallete($event)"
        v-show="[this.activeUser && !this.activeUser.darkMode]"
      ></i>
      <!-- Router links for A Home component and form rendering -->
      <div class="left-nav">
        <div class="nav">
          <div class="">
            <UserData class="user-data" />
          </div>
          <div class="nav-item">
            <router-link to="/" class="router-link"> Home </router-link>
          </div>
          <div class="nav-item">
            <router-link to="register" class="router-link"
              >Login/Register</router-link
            >
          </div>
        </div>
        <div class="view-container">
          <router-view class="view"></router-view>
        </div>
      </div>
      <br />
    </div>
  </body>
</template>

<script>
// Vuex plugins
import { mapState, mapActions } from "vuex";

// Component Imports
import Header from "./components/Header.vue";
import UserData from "./components/UserData.vue";

export default {
  name: "App",

  // Components imports
  components: {
    Header,
    UserData,
  },
  methods: {
    ...mapActions(["alterUserData"]),

    // Function allows the user to toggle the darkMode boolean that is stored in the user object, logic is spread out across the app to render one of the two themes
    togglePallete(event) {
      if (this.activeUser !== null) {
        console.log(event.target);
        if (this.activeUser.darkMode === false) {
          console.log("bop");
          this.alterUserData(true);
        } else if (this.activeUser.darkMode === true) {
          this.alterUserData(false);
        }
      }
    },
  },
  computed: {
    ...mapState({
      activeUser: (state) => state.users.activeUser,
      users: (state) => state.users.users,
    }),
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

  min-height: 100%;
}
.nav-item {
  text-align: center;
  transition: all 0.3s ease-in;
  margin-top: 0.5rem;
}
.nav-item:hover {
  z-index: 1;
  width: 15rem;
  border-radius: 2.5rem;
  justify-content: left;
  display: inherit;
  flex-direction: column;
  background: rgba(109, 168, 226, 1);
  height: 2.5rem;
  box-shadow: 7px 7px 7px -1px rgba(0, 0, 0, 0.64);
}
.light-mode {
  background: linear-gradient(180deg, #b5b1ec 0%, #6da8e2 35%, #294861 100%);
}
.dark-mode {
  background: linear-gradient(
    180deg,
    hsla(244, 76%, 59%, 1) 0%,
    hsla(210, 35%, 40%, 1) 51%,
    hsla(207, 67%, 17%, 1) 100%
  );
}
</style>
<style scoped>
i {
  cursor: pointer;
  font-size: 2.5rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}
.container {
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  min-height: 100vh;
}
.router-link {
  font-size: 2rem;
  text-decoration: none;
  color: azure;
  border-radius: 2.5rem;
  width: 100%;
  min-height: 100%;
  margin: auto;
}
.router-link:hover {
  color: aquamarine;
}
.nav {
  display: inherit;
  flex-direction: column;
}

.nav-item:after {
  transition: opacity 0.3s ease-in-out;
}
.view-container {
  width: 100%;
  border-radius: 5rem;
}
.left-nav {
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
