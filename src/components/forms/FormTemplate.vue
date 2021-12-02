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
      <button class="submit" @click="constructState()">Submit</button>
    </div>
  </form>
</template>
<script>
export default {
  methods: {
    constructState(state) {
      let newState = {};
      for (let item in state) {
        for (let field in state[item].fields) {
          newState[field] = state[item].fields[field].value;
        }
      }
      let sender = {
        data: newState,
      };
      this.buttonFunction(sender);
      if (this.cancelFunction) {
        this.cancelFunction();
      }
    },
  },
  props: ["id", "formClass", "show", "formTitle", "formData", "submitFunction"],
};
</script>