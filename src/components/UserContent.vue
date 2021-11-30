<template>
  <div class="user-content">
    <textarea placeholder="Compose a Post" id="user-text" />

    <button @click="post()">Post!</button>

    <div v-for="post in allPosts" v-bind:key="post.id">
      <p>{{ post.body }}</p>
      <i class="del">x</i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserContent",
  components: {},
  methods: {
    ...mapActions(["postUserContent, deletePost"]),
    post() {
      let text = document.getElementById("user-text");
      let str = text.value;

      let sender = {
        id: Math.floor(Math.random() * 100),
        body: str,
      };
      console.log(sender);
      this.postUserContent(sender);
    },
  },
  computed: {
    ...mapGetters(["allPosts"]),
  },
};
</script>

<style scoped>
textarea {
  resize: none;
  width: 20%;
}
.user-content {
  border: solid black;
}
</style>