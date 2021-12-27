<template>
  <div class="user-content">
    <div class="post-div">
      <textarea class="text-area" placeholder="Compose a Post" id="user-text" />

      <button @click="post()">Post!</button>
    </div>

    <div class="posts" v-for="post in allPosts" v-bind:key="post.id">
      <h4>{{ activeUser.name }}</h4>
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
      };

      this.postUserContent(sender);
      text.value = "";
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
  height: 2.5rem;
}
h4 {
  text-align: left;
  margin-left: 5rem;
  margin-bottom: 0;
}
button {
  border: none;
  border-radius: 5rem;
  padding: 0.5rem;
  margin-left: 1rem;
  border: solid rgb(200, 225, 250);
}
button:hover {
  background-color: rgb(195, 225, 255);
  border: solid rgb(39, 118, 197);
}
.user-content {
  border-radius: 2.5rem;
  background: rgb(200, 225, 250);
  padding: 1rem;
  display: flex;
  flex-direction: column;
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
.text-area {
  margin-top: 2rem;
  border: none;
}
</style>