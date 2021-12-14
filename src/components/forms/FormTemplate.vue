<template>
  <form id="id">
    <div class="formClass" v-show="show">
      <h3>{{ formTitle }}</h3>
      <div v-for="item in formData" v-bind:key="item.id" class="form">
        <p class="section-name">{{ item.sectionName }}</p>
        <div v-for="field in item.fields" v-bind:key="field.id">
          <div v-if="field.type === 'input'">
            <input
              type="field.type"
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
  border: 1px solid #41b883;
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
</style>
