
<template>
    <div class="container">
        <div class='sign-up-form'>
            Sign Up
            <form @submit="onSubmit">
                <input type="text" v-model="name" placeholder="Enter Your Name">
                <input type="text" v-model="email" placeholder="Enter Your Email">
                <input type="text" v-model="pass" placeholder="Enter Your Password">

                <input type="text" v-model="pass" placeholder="poop">

                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
// imports mapActions from vuex for the actions below
import { mapActions } from 'vuex';

export default {
    name: "UserSignUp",
    data(){
        return{
            id: 0,
            name: "",
            email: "",
            pass: ""
        }
    },
    methods: {
        // pulls the actions from users.js in order to create a new object and append it onto the array of users
        ...mapActions(['signUpUser']),
        onSubmit(e){
            e.preventDefault();
            
            this.signUpUser({
                id: Math.floor(Math.random() * 100),
                name: this.name,
                email: this.email,
                pass: this.pass
            })
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
    }
    input[type="text"]{
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
        width: 20rem;
        margin: auto;
    }
    input[type="submit"]{
        flex: 2;
        background: #41b883;
        color: #fff;
        border: 1px solid #41b883;
        cursor: pointer;
        margin: auto;
        width: 15rem;
    }
    .container{
        width: 75%;
        margin: auto;
        padding: 2rem;
    }
</style>