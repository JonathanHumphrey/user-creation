import axios from 'axios'

const state = {
    posts: []
};
const getters = {
    allPosts: (state) => state.posts
};
const actions = {
    async postUserContent({ commit }, sender) {
        const res = await axios.post('http://localhost:5000/userPosts', sender)
        console.log(state.posts, res)
        //let content = res.data.body
        commit('post', sender)
    },
    async deletePost({ commit }, id) {
        await axios.delete(`http://localhost:5000/userPosts/${id}`)
        commit('removePost', id)
    }
};
const mutations = {
    post: (state, content) => state.posts.unshift(content),
    removePost: (state, id) => (state.posts = state.posts.filter(post => post.id !== id))
};

export default {
    state,
    getters,
    actions,
    mutations
}