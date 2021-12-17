<template>
  <div class="user-data" v-if="this.activeUser !== null">
    <h3>{{ this.activeUser.name }}</h3>
    <p>{{ this.activeUser.email }}</p>
    <button @click="signOut($event)">Sign Out</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UserData",
  methods: {
    ...mapActions(["logOutUser"]),
    signOut() {
      console.log(this.activeUser);
      this.logOutUser(null);
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

<style scoped>
.user-data {
  border: solid black;
  width: 10rem;
  margin-left: -5rem;
  justify-content: left;
  display: flexbox;
}
p {
  font-size: 0.75rem;
}
button {
  align-self: center;
}
</style>