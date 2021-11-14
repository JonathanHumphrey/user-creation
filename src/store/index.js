import { createStore } from "vuex";
import users from './modules/users.js';


// Create the store
export default createStore({
    modules: {
        users
    }
})