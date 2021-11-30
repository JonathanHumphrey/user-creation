<template>
  <div>
    <h3>Home</h3>
    <p>
      Welcome to the website, create an account or sign in to an existing one to
      view your dashboard
    </p>
  </div>
  <div class="user-dash" v-show="activeUser.name">
    {{ activeUser.name }}
    <UserContent />
  </div>
</template>
<script>
import { mapState } from "vuex";

// Component import
import UserContent from "../components/UserContent.vue";

export default {
  name: "Home",
  components: {
    UserContent,
  },
  methods: {},
  computed: {
    ...mapState({
      activeUser: (state) => state.users.activeUser,
    }),
  },
};
</script>
