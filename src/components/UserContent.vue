<template>
  <div class="user-content">
    <textarea placeholder="Compose a Post" id="user-text" />

    <button @click="post()">Post!</button>

    <div v-for="post in allPosts" v-bind:key="post.id">
      <h4></h4>
      <p>{{ post.body }}</p>
      <i class="del" @click="removePost(post.id)">x</i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "UserContent",
  components: {},
  methods: {
    ...mapActions(["postUserContent", "deletePost", "fetchPosts"]),
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
    removePost(id) {
      this.deletePost(id);
    },
  },
  computed: {
    ...mapGetters(["allPosts"]),
    ...mapState(["activeUser"]),
  },
  created() {
    this.fetchPosts();
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