<template>
  <div class="user-data">
    <h3>{{ activeUser.name }}</h3>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UserData",
  methods: {
    ...mapActions([]),
  },
  computed: {
    ...mapState({
      activeUser: (state) => state.users.activeUser,
    }),
  },
};
</script>

<style scoped>
.user-data {
  border: solid black;
  width: 5rem;
}
</style>