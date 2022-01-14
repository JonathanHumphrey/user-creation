<template>
  <div
    v-bind:class="[
      this.activeUser.darkMode ? 'dark-mode' : 'light-mode',
      'user-content',
    ]"
  >
    <Compose />

    <div class="posts" v-for="post in allPosts" v-bind:key="post.id">
      <h4
        v-bind:class="[
          this.activeUser.darkMode ? 'dark-mode-text' : 'light-mode-text',
        ]"
      >
        {{ post.poster }}
      </h4>
      <img v-if="post.picture" :src="post.picture.URL" alt="" />
      <p
        v-bind:class="[
          this.activeUser.darkMode ? 'dark-mode-text' : 'light-mode-text',
          'post-body',
        ]"
      >
        {{ post.body }}
      </p>
      <div class="likes">
        <i class="far fa-heart" @click="likePost(post.id)"></i>
        <p
          v-bind:class="[
            this.activeUser.darkMode ? 'dark-mode-text' : 'light-mode-text',
          ]"
        >
          Liked by: {{ post.likes }}
        </p>
      </div>
      <p
        v-bind:class="[
          this.activeUser.darkMode ? 'dark-mode-text' : 'light-mode-text',
          'date',
        ]"
      >
        Posted at: {{ post.timeOfPost }}
      </p>
      <i
        v-bind:class="[
          this.activeUser.darkMode ? 'dark-mode-text' : 'light-mode-text',
          'del',
        ]"
        @click="removePost(post.id)"
        >...</i
      >
      <div class="dropdown">
        <button class="post-options">...</button>
        <div class="dropdown-content">
          <a href="">Delete Post</a>
          <a href="">Report Post</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import Compose from "./Compose.vue";

export default {
  name: "UserContent",
  components: {
    Compose,
  },
  methods: {
    ...mapActions([
      "postUserContent",
      "deletePost",
      "fetchPosts",
      "like",
      "focusPost",
    ]),

    removePost(id) {
      this.deletePost(id);
    },
    likePost(id) {
      for (let i in this.allPosts) {
        if (id === this.allPosts[i].id) {
          let postFocused = this.allPosts[i];
          console.log(postFocused);

          this.focusPost(postFocused);
          this.like();
        }
      }
    },
  },

  computed: {
    ...mapGetters(["allPosts"]),
    ...mapState({
      activeUser: (state) => state.users.activeUser,
      posts: (state) => state.posts,
    }),
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
img {
  width: 10rem;
  height: 15rem;
  object-fit: cover;
  margin: auto;
}
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
.dropdown {
  display: inline-block;
  position: absolute;
  cursor: pointer;
  font-weight: bold;
  top: 0;
  right: 0.5rem;
}
.dropdown-content {
  display: none;
  position: absolute;
  background: azure;
  left: -0.5rem;
  width: 10rem;
  overflow: auto;
  border-radius: 1rem;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  display: block;
  color: #000000;
  font-size: 0.95rem;
  padding: 0.25rem;
  text-decoration: none;
}
.dropdown-content a:hover {
  color: #ffffff;
  background-color: #00a4bd;
}
.user-content {
  border-radius: 2.5rem;
  background: rgb(200, 225, 250);
  padding: 1rem;
  display: flex;
  flex-direction: column;

  box-shadow: 4px 7px 18px 5px rgba(0, 0, 0, 1);
  transition: all 0.3s ease-in-out;
}
.user-content:after {
  box-shadow: 4px 7px 18px 5px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease-in-out;
}

.dark-mode {
  background: rgb(22, 71, 117);
  box-shadow: 4px 7px 18px 5px rgba(255, 255, 255, 0.82);
}
.dark-mode-text {
  color: azure;
}
.post-options {
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
  box-shadow: 4px 7px 18px 5px rgba(0, 0, 0, 0.82);
  display: inherit;
  flex-direction: column;
  border-radius: 1rem;
}
.post-body {
  padding: 1rem;
  margin-bottom: 2rem;
}
.text-area {
  margin-top: 2rem;
  border: none;
}
.fa-heart {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  cursor: pointer;
}
.likes {
  display: inherit;
  flex-direction: row;
  width: 20%;
  align-self: center;
  align-items: center;
  justify-content: space-evenly;
}
</style>
