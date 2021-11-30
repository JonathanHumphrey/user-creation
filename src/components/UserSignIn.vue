<template>
  <div class="container">
    Sign In
    <div class="sign-in-form">
      <form @submit="onSubmit">
        <input type="text" v-model="name" placeholder="Enter Your Name" />
        <input type="text" v-model="email" placeholder="Enter Your Email" />
        <input type="text" v-model="pass" placeholder="Enter Your Password" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
//import { mapState } from 'vuex';
export default {
  name: "UserSignIn",
  methods: {},
  data() {},
};
</script>
 
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  width: 20rem;
  margin: auto;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
  margin: auto;
  width: 15rem;
}
.container {
  width: 75%;
  margin: auto;
  padding: 2rem;
}
</style>