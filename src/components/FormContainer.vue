<template>
  <div class="form-container">
    <!-- Sign up form -->
    <FormTemplate
      id="0"
      v-bind:show="hasAccount"
      formClass="sign-in"
      formTitle="Sign In"
      v-bind:formData="signInForm"
      v-bind:submitFunction="onSubmit"
    />
    <!-- END SIGN UP -->

    <!-- Sign in form -->
    <FormTemplate
      id="1"
      v-bind:show="!hasAccount"
      formClass="sign-up-form"
      formTitle="Sign up"
      v-bind:formData="signUpForm"
      v-bind:submitFunction="onSubmit"
    />
    <!-- END SIGN IN -->

    <div class="user-action">
      <input
        id="button1"
        type="button"
        value="Sign Up"
        v-bind:class="[
          !hasAccount ? 'account-nav-selected' : '',
          'account-nav',
        ]"
        @click="userAction($event)"
      />
      <input
        id="button2"
        type="button"
        value="Sign In"
        v-bind:class="[hasAccount ? 'account-nav-selected' : '', 'account-nav']"
        @click="userAction($event)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import FormTemplate from "@/components/forms/FormTemplate";

export default {
  name: "FormContainer",
  components: {
    FormTemplate,
  },
  data() {
    return {
      id: 0,
      name: "",
      email: "",
      pass: "",
      isSignedIn: false,
    };
  },
  methods: {
    ...mapActions(["userAccountCheck", "signUpUser", "loginUser"]),
    // Small bit of logic to see what form to generate
    userAction(event) {
      let answer = false;

      if (event.target.value === "Sign In") {
        answer = true;
      } else if (event.target.value === "Sign Up") {
        answer = false;
      }
      // Sends the answer to the users.js module to be processed
      this.userAccountCheck(answer);
    },


    onSubmit(e, data) {
      console.log("id", e.target.id, data);
      /* for (let item in state) {
        for (let field in state[item].fields) {
          //newUser[field] = state[item].fields[field].value;
          console.log(field);
        }
      } */
      // REGISTER PATH
      if (e.target.id === "1") {
        let newUser = {
          id: Math.floor(Math.random() * 1000),
          name: data.data.username,
          email: data.data.email,
          pass: data.data.password,
          isSignedIn: false,
        };
        console.log(newUser);

        this.signUpUser(newUser);


        alert("Account Successfully Created!");
      }
      // SIGN IN PATH
      else if (e.path[0].id === "0") {
        //console.log(this.users.users[1])
        //console.log(this.users.users[0].name)
        if (e.target[0].value) {
          console.log("here now");
          this.users.users.forEach((element) => {
            if (element.name === e.target[0].value) {
              console.log("poop");
              if (element.pass === e.target[1].value) {
                console.log("success");
                let sender = {
                  name: e.target[0].value,
                  pass: e.target[1].value,
                  isSignedIn: true,
                };
                for (let i in this.users) {
                  //if(this.user[i].id )
                  console.log(this.user[i]);
                }
                console.log(this.activeUser);
                this.loginUser(sender);
                for (let index in e.target) {
                  e.target[index].value = "";
                }
              }
        // e.target[0].value = "";
        // e.target[1].value = "";
        // e.target[2].value = "";

        alert("Account Successfully Created!");
      } else if (e.target.id === "0") {
        console.log(this.users);
        for (let i in this.users) {
          if (data.data.username === this.users[i].name) {
            console.log("correct name");
            if (data.data.password === this.users[i].pass) {
              console.log("correct password");
              console.log(this.users[i].id);
            }
          }
        }
      }
    },
  },
  computed: {
    ...mapState({
      hasAccount: (state) => state.users.userHasAccount,
      signUpForm: (state) => state.users.forms.signUpForm,
      signInForm: (state) => state.users.forms.signInForm,
      users: (state) => state.users.users,
      activeUser: (state) => state.users.activeUser,
    }),
  },
};
</script>

<style scoped>
.form-container {
  border: solid black;
  flex: 2;
  width: 50rem;
  height: 18rem;
  margin: auto;
  padding-bottom: 3rem;
  position: relative;
}
.account-nav {
  cursor: pointer;
  border: none;
  background-color: #36966b;
  padding: 0.25rem;
  margin: 0.25rem;
  border-radius: 0.5rem;
}
.account-nav-selected {
  background-color: #51eba5;
}
.account-nav:hover {
  background-color: #51eba5;
}
.section-name {
  text-align: left;
  margin-left: 14rem;
}
.sign-in {
  cursor: pointer;
  border: none;
  background-color: #41b883;
  padding: 0.5rem;
  margin: 0.5rem;
}
.sign-in:hover {
  color: rgb(46, 149, 197);
}
.user-action {
  width: 100%;
  text-align: right;
  position: absolute;
  top: 0;
}

label {
  width: 25%;
  font-size: 0.75rem;
  font-weight: 1000;
}
</style>
