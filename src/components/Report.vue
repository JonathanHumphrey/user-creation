<template lang="">
    <div class="report-modal" v-if="check">
        <select name="report-reason" id="report">
          <option value="Hate">Hate Speech</option>
          <option value="Harrassment">Harrassment</option>
        </select>
        <textarea
          name="report-text"
          id="report-text"
          cols="30"
          rows="10"
        ></textarea>
        <button class="report-submit" @click="submitReport($event, postID)">Submit</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allPosts"]),
  },
  methods: {
    submitReport(event, postID) {
      console.log(postID, event.target);
      let text = document.getElementById("report-text");
      let body = text.value;
      console.log(body);
      for (let i in this.allPosts) {
        console.log(this.allPosts[i]);
      }
    },
  },
  props: ["postID", "check"],
};
</script>

<style scoped>
</style>