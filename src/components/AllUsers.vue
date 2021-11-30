<template>
  <div>
    <h3>Users</h3>
    <div class="users">
      <span class="name">Name</span>
      <span class="email">Email</span>
      <div class="name-column">
        <div class="name-for" v-for="user in allUsers" :key="user.id">
          {{ user.name }}
        </div>
      </div>
      <div class="email-column">
        <div class="email-for" v-for="user in allUsers" :key="user.id">
          {{ user.email }}
          <i @click="deleteUser(user.id)" class="del">x</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AllUsers",
  methods: {
    ...mapActions(["fetchUsers", "deleteUser"]),
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  },
};
</script>
<style scoped>
.users {
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  border: solid blue;
  width: 40rem;
}
.name {
  display: inline-block;
  width: 5rem;
  padding: 10px;
  padding-bottom: 0;
  text-align: left;
}
.email {
  display: inline-block;
  width: 5rem;
  padding: 10px;
  text-align: left;
}
.name-column {
  text-align: left;
  margin-top: 0;
  margin-left: 1rem;
}
.email-column {
  text-align: left;
  margin-top: 0;
  margin-left: 1rem;
}
.name-for {
  padding: 5px;
}
.email-for {
  padding: 5px;
}
.del {
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem;
  float: right;
  margin-left: 5rem;
  padding: 0;
}
</style>
