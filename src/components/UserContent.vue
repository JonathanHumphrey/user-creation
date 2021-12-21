<template>
  <div class="user-content">
    <textarea placeholder="Compose a Post" id="user-text" />

    <button @click="post()">Post!</button>

    <div class="posts" v-for="post in allPosts" v-bind:key="post.id">
      <h4>{{ post.poster }}</h4>
      <p class="post-body">{{ post.body }}</p>
      <p class="date">Posted at: {{ post.timeOfPost }}</p>
      <i class="del" @click="removePost(post.id)">...</i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
//import moment from "moment";

export default {
  name: "UserContent",
  components: {},
  methods: {
    ...mapActions(["postUserContent", "deletePost", "fetchPosts"]),
    post() {
      let text = document.getElementById("user-text");
      let str = text.value;

      let moment = require("moment");

      let sender = {
        id: Math.floor(Math.random() * 100),
        body: str,
        timeOfPost: moment(new Date()).format("h:mm A MM/DD/YYYY"),
        poster: this.activeUser.name
      };
      console.log(sender.timeOfPost);
      this.postUserContent(sender);
      
      text = "";
    },
    removePost(id) {
      this.deletePost(id);
    },
  },
  computed: {
    ...mapGetters(["allPosts"]),
    ...mapState({
      activeUser: (state) => state.users.activeUser,
    }),
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
h4 {
  text-align: left;
  margin-left: 5rem;
  margin-bottom: 0;
}
.user-content {
  border: solid black;
}
.del {
  position: absolute;
  cursor: pointer;
  font-weight: bold;
  top: 0;
  right: 0.5rem;
}
.date {
  width: 100%;
  text-align: right;
  position: absolute;
  bottom: -0.5rem;
  right: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
}
.posts {
  border: solid black;
  width: 60%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
}
.post-body {
  padding: 1rem;
  margin-bottom: 2rem;
}
</style>