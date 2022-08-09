<template>
  <form id="form-template">
    <div class="formClass" v-show="show">
      <h3>{{ formTitle }}</h3>
      <div v-for="item in formData" v-bind:key="item.id" class="form">
        <p class="section-name">{{ item.sectionName }}</p>
        <div v-for="field in item.fields" v-bind:key="field.id">
          <div>
            <input
              type="input"
              v-bind:placeholder="field.label"
              v-model="field.value"
              class="input"
            />
          </div>
        </div>
      </div>
      <button :id="id" @click="constructState($event, formData)">Submit</button>
    </div>
  </form>
</template>
<script>
export default {
  methods: {
    // Function takes the user input from the form programmatically regardless of which form is passed, then sends the data to the formContainer component to be processed
    constructState(event, state) {
      event.preventDefault();
      let newState = {};
      for (let item in state) {
        for (let field in state[item].fields) {
          newState[field] = state[item].fields[field].value;
        }
      }
      let sender = {
        data: newState,
      };
      this.submitFunction(event, sender);
      if (this.cancelFunction) {
        this.cancelFunction();
      }
    },
  },
  props: ["id", "formClass", "show", "formTitle", "formData", "submitFunction"],
};
</script>
<style scoped>
.section-name {
  text-align: left;
  margin-left: 14rem;
}
.input {
  flex: 10;
  padding: 10px;
  border: 1px solid #000000;
  outline: 0;
  width: 20rem;
  margin: auto;
}
.submit {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
  margin: auto;
  margin-top: 1rem;
  width: 15rem;
}
h3 {
  width: 100%;
  margin: auto;
  display: inline-block;
}
button {
  margin-top: 1rem;
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
