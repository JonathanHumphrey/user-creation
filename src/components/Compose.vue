<template>
  <div class="post-div">
    <div class="text-post" id="text" v-if="this.type === 'text'">
      <textarea class="text-area" placeholder="Compose a Post" id="user-text" />

      <button @click="post()">Post!</button>
    </div>
    <div class="pic-post" id="pic" v-if="this.type === 'picture'">
      <input
        class="inputfile"
        type="file"
        name="file"
        id="file"
        ref="fileInput"
        @change="selectImage"
      />
      <label for="file"><strong>Choose a Picture</strong></label>

      <div v-if="preview">
        <img :src="preview" alt="" />
      </div>

      <button @click="post()">Post!</button>
    </div>
    <div class="selection">
      <i class="far fa-image" id="picture" @click="postForm($event)"></i>
      <i class="fas fa-font" id="text" @click="postForm($event)"></i>
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
        };
        this.postUserContent(sender);
        text.value = "";
      } else {
        console.log(this.data);
        let moment = require("moment");

        let imgUrl = this.preview;
        let imageData = {
          image: this.image,
          URL: imgUrl,
        };
        console.log(this.image);

        let sender = {
          id: Math.floor(Math.random() * 100),
          body: imageData,
          timeOfPost: moment(new Date()).format("h:mm A MM/DD/YYYY"),
          poster: this.activeUser.name,
        };
        this.postUserContent(sender);
      }
    },
    postForm(event) {
      this.type = event.target.id;

      console.log(this.type);
    },
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
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
  font-size: 1.25em;
  font-weight: 700;
  color: rgb(0, 0, 0);
  background-color: rgb(195, 225, 255);
  display: inline-block;
  cursor: pointer;

  border: none;
  border-radius: 5rem;
  padding: 0.5rem;
  margin-left: 1rem;
  border: solid rgb(200, 225, 250);
}

.inputfile:focus + label,
.inputfile + label:hover {
  background-color: rgb(195, 225, 255);
  border: solid rgb(39, 118, 197);
}
.selection {
  width: 10rem;
  margin: auto;
  display: inherit;
  justify-content: space-evenly;
}
.post-div {
  border: solid black;
  display: flex;
  flex-direction: column;
}
i {
  border: solid black;
  padding: 0.5rem;
  cursor: pointer;
}
textarea {
  resize: none;
  width: 20%;
  height: 2.5rem;
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
</style>