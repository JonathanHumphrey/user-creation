<template>
  <div class="user-data" v-if="this.activeUser !== null">
    <h3>{{ this.activeUser.name }}</h3>
    <p>Contact: {{ this.activeUser.email }}</p>
    <img :src="this.activeUser.profilePicture" alt="" />
    <button @click="signOut($event)">Log Out</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UserData",
  methods: {
    ...mapActions(["logOutUser"]),

    // function sets the active user to null, there might be a better way to do this
    signOut() {
      console.log(this.activeUser);
      this.logOutUser(null);
    },
  },
  date: {},
  computed: {
    ...mapState({
      activeUser: (state) => state.users.activeUser,
      users: (state) => state.users.users,
    }),
  },
};
</script>

<style scoped>
.user-data {
  z-index: 1;
  width: 15rem;
  border-radius: 2.5rem;
  justify-content: left;
  display: inherit;
  flex-direction: column;
  background: rgba(109, 168, 226, 1);
  height: 7.5rem;
  box-shadow: 7px 7px 7px -1px rgba(0, 0, 0, 0.64);
  position: relative;
}
img {
  width: 20px;
  height: 20px;
}
h3 {
  margin: 0;
}
p {
  font-size: 0.75rem;
}
button {
  align-self: center;
  border-radius: 2rem;
  border: none;
  padding: 0.5rem;
  position: absolute;
  bottom: 0.5rem;
  right: 0.75rem;
}
button:hover {
  color: rgb(243, 128, 128);
  background-color: rgb(195, 225, 255);
}
</style>