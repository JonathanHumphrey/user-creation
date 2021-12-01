<template>
  <div class="form-container">
    <v-card-text
      class="text-left"
      v-for="item in formData"
      v-bind:key="item.id"
    >
      <!-- Loops through the form data and renders each section -->
      <div>
        <p>{{ item.sectionName }}</p>
        <div
          class="input-block"
          v-for="field in item.fields"
          v-bind:key="field.id"
        >
          <!-- Then we loop through and render each field in that section -->
          <!-- If the field has type "input" an input is rendered, else we render and text area -->
          <div v-if="field.type === 'input'">
            <v-text-field
              v-bind:label="field.label"
              v-bind:placeholder="field.label"
              v-model="field.value"
              outlined
              class="mt-4"
            >
            </v-text-field>
          </div>
          <div v-else-if="field.type === 'checkbox'">
            <v-checkbox v-model="field.value" v-bind:label="field.label">
            </v-checkbox>
          </div>
          <div v-else>
            <v-textarea
              v-bind:name="field.label"
              outlined
              v-bind:label="field.label"
              v-model="field.value"
            >
            </v-textarea>
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-actions class="mx-5 pt-0">
      <v-row justify="start" class="mb-4">
        <v-btn
         class="white--text mr-2"
          data-testid="saveButton"
          color="actionBlue"
          @click="constructState(formData)"
        >
          Save
        </v-btn>
        <v-btn class="black--text mr-2" v-if="cancelFunction" @click="cancelFunction()"> Cancel </v-btn>
      </v-row>
    </v-card-actions>
  </div>
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
        data: newState
      };
      this.buttonFunction(sender);
      if(this.cancelFunction) {
        this.cancelFunction();
      }
     
    },
  },
  props: ["formData", "cancelFunction", "buttonFunction", "sendTo"],
};
</script>