import axios from 'axios'

const state = {
    users: [],
    activeUser: null,
    posts: null,
    userHasAccount: false,
    invalidCredentials: false,
    forms: {
        signUpForm: {
            name: {
                id: 0,
                sectionName: "Name",
                fields: {
                    username: {
                        id: "field-0",
                        label: "Username",
                        value: "",
                        type: "input",
                    },
                }
            },
            contact: {
                id: 1,
                sectionName: "Contact",
                fields: {
                    email: {
                        id: "field-1",
                        label: "Email",
                        value: "",
                        type: "input"
                    }
                }
            },
            password: {
                id: 0,
                sectionName: "Password",
                fields: {
                    password: {
                        id: "field-2",
                        label: "Password",
                        value: "",
                        type: "input"
                    }
                }
            }
        },
        signInForm: {
            name: {
                id: 0,
                sectionName: "Name",
                fields: {
                    username: {
                        id: "field-0",
                        label: "Username",
                        value: "",
                        type: "input",
                    },
                }
            },
            password: {
                id: 0,
                sectionName: "Password",
                fields: {
                    password: {
                        id: "field-2",
                        label: "Password",
                        value: "Submit",
                        type: "button"
                    }
                }
            }
        }
    }
};
// Grabs allUsers from the state
const getters = {
    allUsers: (state) => state.users,
    allState: (state) => state,
};
const actions = {
    // executes the actions "signUpUser" from UserSignUp.vue and commits the object to the 'newUser' mutation
    async signUpUser({ commit }, newUser ){
        const res = await axios.post('http://localhost:5000/users', newUser)

        console.log(newUser, res)
        commit('newUser', res.data) 
    },
    // executes the action "fetchUsers" from AllUsers.vue and commits the array of users to the 'setUsers' mutation
    async fetchUsers({ commit }) {
        const res = await axios.get('http://localhost:5000/users')

        console.log(res.data)
        commit('setUsers', res.data)
    },
    async deleteUser({ commit }, id) {
        await axios.delete(`http://localhost:5000/users/${id}`)
        commit('removeUser', id)
    },
    async userAccountCheck({ commit }, answer) {
        console.log(state.userHasAccount)
        commit('userAccount', answer)
    },
    async userAccess({ commit }, sender) {
        console.log(commit, sender)
    },
    async loginUser ({ commit }, sender){
        console.log(sender.name)
        commit('selectedUser', sender)
        //console.log(state.activeUser)
        console.log(sender.name)
    },
    async logOutUser({ commit }) {
        console.log(commit)
        commit('logout')
    }
    
};
const mutations = {
    newUser: (state, newUser) => state.users.unshift(newUser),
    setUsers: (state, users) => (state.users = users),
    removeUser: (state, id) => (state.users = state.users.filter(user => user.id !== id)),
    userAccount: (state, answer) => (state.userHasAccount = answer),
    selectedUser: (state, sender) => (state.activeUser = sender),
    logout: (state) => (state.activeUser = null)
}

export default {
    state,
    getters,
    actions,
    mutations
}