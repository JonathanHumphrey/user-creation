<template>
  <div class="header">
    <h3
      v-bind:class="[
        this.activeUser !== null
          ? this.activeUser.darkMode
            ? 'dark-mode-text'
            : 'light-mode-text'
          : '',
      ]"
    >
      Blogger.io
    </h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState({
      activeUser: (state) => state.users.activeUser,
    }),
  },
};
</script>
 
<style scoped>
.header {
  min-width: 100%;
}

h3 {
  width: 5rem;
  margin: 2rem;
  display: inline-block;
}
.dark-mode-text {
  color: azure;
}
.dark-mode-text {
  color: rgb(0, 0, 0);
}
</style>