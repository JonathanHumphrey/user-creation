<template>
  <div class="post-div">
    <div class="text-post" id="text" v-if="this.type === 'text'">
      <textarea
        placeholder="Compose a Post"
        id="user-text"
        maxlength="100"
        v-bind:class="[
          this.activeUser.darkMode ? 'dark' : 'light',
          'text-area',
        ]"
      />

      <button @click="post()">Post!</button>
    </div>
    <div class="pic-post" id="pic" v-if="this.type === 'picture'">
      <input
        class="inputFile"
        type="file"
        name="file"
        id="file"
        ref="fileInput"
        @change="selectImage"
      />
      <label for="file"><strong>Choose a Picture</strong></label>

      <div class="preview" v-if="preview">
        <img :src="preview" alt="" />
      </div>
      <textarea
        name="caption"
        placeholder="Compose a Post"
        id="user-text"
        maxlength="100"
        v-bind:class="[
          this.activeUser.darkMode ? 'dark' : 'light',
          'text-area',
        ]"
      ></textarea>

      <button @click="post()">Post!</button>
    </div>
    <div class="selection">
      <i
        v-bind:class="[
          this.activeUser.darkMode ? 'dark-i' : 'light-i',
          'far fa-image',
        ]"
        id="picture"
        @click="postForm($event)"
      ></i>
      <i
        v-bind:class="[
          this.activeUser.darkMode ? 'dark-i' : 'light-i',
          'fas fa-font',
        ]"
        id="text"
        @click="postForm($event)"
      ></i>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["postUserContent"]),

    // Function takes the user's input from the text-area as well as some user data to form a 'post' object and then sends that object to the server
    post() {
      // TEXT POSTING LOGIC
      if (this.type === "text") {
        let text = document.getElementById("user-text");
        let str = text.value;

        let moment = require("moment");
        console.log(text);
        let sender = {
          id: Math.floor(Math.random() * 100),
          body: str,
          timeOfPost: moment(new Date()).format("h:mm A MM/DD/YYYY"),
          poster: this.activeUser.name,
          likes: 0,
        };
        this.postUserContent(sender);
        text.value = "";
      }
      // PHOTO POSTING LOGIC
      else {
        console.log(this.data);
        let moment = require("moment");

        let text = document.getElementById("user-text");
        let str = text.value;
        let imgUrl = this.preview;
        let imageData = {
          image: this.image,
          URL: imgUrl,
        };
        console.log(this.image);

        let sender = {
          id: Math.floor(Math.random() * 100),
          picture: imageData,
          body: str,
          timeOfPost: moment(new Date()).format("h:mm A MM/DD/YYYY"),
          poster: this.activeUser.name,
          likes: 0,
        };
        this.postUserContent(sender);
        console.log(sender);
      }
    },
    // Checks to see what type of content the user is trying to post
    postForm(event) {
      this.type = event.target.id;

      console.log(this.type);
    },
    // creates a URL for the image to be accessed by the user and preview it
    selectImage() {
      this.image = this.$refs.fileInput.files.item(0);
      this.preview = URL.createObjectURL(this.image);
    },
  },
  computed: {
    ...mapState({
      activeUser: (state) => state.users.activeUser,
    }),
  },
  data() {
    return {
      type: "text",

      image: undefined,
      preview: undefined,
    };
  },
};
</script>
<style scoped>
.dark-i {
  color: white;
}
.light {
  background: rgb(22, 71, 117);
  color: white;
}
.dark {
  background: rgb(200, 225, 250);
  color: black;
}
.text-area {
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 0;
  border: 1px solid rgb(94, 94, 94);

  border-radius: 0.75rem;
}
.pic-post {
  display: flex;
  flex-direction: column;
}
.inputFile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputFile + label {
  font-size: 1.25em;
  font-weight: 700;
  color: rgb(0, 0, 0);
  background-color: white;
  display: inline-block;
  cursor: pointer;
  border: none;
  border-radius: 5rem;
  padding: 0.5rem;
  width: 30%;
  align-self: center;
  margin-top: 2rem;
  border: solid rgb(200, 225, 250);
}
.fa-font {
  font-size: 1.5rem;
}
.fa-image {
  font-size: 1.75rem;
}
.inputFile:focus + label,
.inputFile + label:hover {
  background-color: rgb(195, 225, 255);
  border: solid rgb(39, 118, 197);
}
.selection {
  width: 10rem;
  margin: auto;
  display: inherit;
  justify-content: space-evenly;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.post-div {
  display: flex;
  flex-direction: column;
}

i {
  padding: 0.5rem;
  cursor: pointer;
  margin: 0;
}

textarea {
  resize: none;
  width: 20rem;
  height: 3.5rem;
}
button {
  border: none;
  border-radius: 5rem;
  background-color: white;
  padding: 0.5rem;
  margin-left: 1rem;
  border: solid rgb(200, 225, 250);
  width: 5rem;
  align-self: center;
}
button:hover {
  background-color: rgb(195, 225, 255);
  border: solid rgb(39, 118, 197);
}
img {
  width: 10rem;
  height: 15rem;
  object-fit: cover;
}
</style>