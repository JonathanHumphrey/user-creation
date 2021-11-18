import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"
import users from './modules/users.js';


// Create the store
export default createStore({
    modules: {
        users,
    },
    plugins: [createPersistedState()]
})