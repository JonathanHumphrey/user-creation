<template>
  <div>
    <h3> Home </h3>
    <p>Welcome to the website, create an account or sign in to an existing one to view your dashboard</p>
  </div>
  <div class='user-dash' v-show="activeUser.name">
    {{ activeUser.name }}
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {

  },
  methods: {

  },
  computed: {
    ...mapState({
      activeUser: (state) => state.users.activeUser
    })
  }
}
</script>
