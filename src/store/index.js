import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"


import users from './modules/users.js';
import userPosts from "./modules/userPosts.js";

// Create the store
export default createStore({
    modules: {
        users,
        userPosts
    },
    plugins: [createPersistedState()]
})