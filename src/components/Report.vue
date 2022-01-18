<template lang="">
    <div class="report-modal">
        <select name="report-reason" id="report">
          <option value="none" selected disabled hidden>Select Reason</option>
          <option value="Hate">Hate Speech</option>
          <option value="Harrassment">Harrassment</option>
          <option value="Other">Other</option>
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allPosts", "grabFocus"]),
  },
  methods: {
    submitReport(event, postID) {
      let reportType = document.getElementById("report");
      let reportReason = reportType.options[reportType.selectedIndex].value;
      console.log(reportReason);
      let text = document.getElementById("report-text");
      let reportObject = {
        poster: this.grabFocus.poster,
        id: postID,
        reason: reportReason,
        reportBody: text.value,
      };
      console.log(reportObject);
      this.putReport(reportObject);
      alert("Your report has been submitted! Thank you!");
    },
    ...mapActions(["putReport"]),
  },
  props: ["postID", "check"],
};
</script>

<style scoped>
textarea {
  background: rgb(200, 225, 250);
  color: black;
  resize: none;
  width: 20rem;
  height: 3.5rem;
  border-radius: 0.75rem;
}
select {
  border-radius: 2rem;
  background-color: rgb(195, 225, 255);
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
</style>