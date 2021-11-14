<template>
	<div class="form-container">
		<div class="sign-in-form" v-show="test">
			<div v-for="item in signInForm" v-bind:key="item.id" class="form">
				<p>{{ item.secionName }}</p>
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

			<div class="sign-up-form" v-show="!test">
				<div v-for="item in signUpForm" v-bind:key="item.id" class="form">
					<p>{{ item.secionName }}</p>
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
			</div>
		</div>

		<div>
			<label for="button">Don't have an account yet? Create one here!</label>
			<input
				id="button"
				type="button"
				value="Sign In"
				class="account-nav"
				@click="userAction($event)"
			/>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";

//import UserSignIn from './UserSignIn.vue'
//import UserSignUp from './UserSignUp.vue'

export default {
	name: "FormContainer",
	components: {
		//UserSignIn,
		//UserSignUp,
	},
    data() {
        return {
            test: this.hasAccount
        }
    },
	methods: {
		...mapActions(["userAccountCheck"]),
		userAction(event) {
			console.log(event.target.labels[0].innerHTML);
			let answer = false;

			if (event.target.value === "Sign In") {
				answer = true;
				event.target.value = "Sign Up";
				event.target.labels[0].innerHTML =
					"Don't have an account yet? Create one here!";
			} else {
				event.target.value = "Sign In";
				event.target.labels[0].innerHTML =
					"Already have an account? Sign in here!";
			}

			this.userAccountCheck(answer);
		},
	},
	computed: {
		...mapState({
			hasAccount: (state) => state.users.userHasAccount,
			signUpForm: (state) => state.users.forms.signUpForm,
			signInForm: (state) => state.users.forms.signInForm,
		}),
	},
};
</script>

<style scoped>
.sign-up-form {
	display: none;
}
.sign-in-form {
	display: block;
}
.form-container {
	border: solid black;
	flex: 2;
	width: 50rem;
	margin: auto;
}
.form {
	
}
.account-nav {
	cursor: pointer;
	border: none;
	background-color: #41b883;
	padding: 0.5rem;
	margin: 0.5rem;
}
.sign-up:hover {
	color: rgb(46, 149, 197);
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
h3 {
	width: 5rem;
	margin: 2rem;
	display: inline-block;
}
label {
	width: 25%;
}
.input {
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
</style>
