import axios from 'axios'

const state = {
    posts: []
};
const getters = {
    allPosts: (state) => state.posts
};
const actions = {
    async postUserContent({ commit }, sender) {
        await axios.post('http://localhost:5000/userPosts', sender)
        console.log(state.posts)
        //let content = res.data.body
        commit('post', sender)
    },
    async deletePost({ commit }, id) {
        await axios.delete(`http://localhost:5000/userPosts/${id}`)
        commit('removePost', id)
    },
    async fetchPosts({ commit }) {
        const res = await axios.get('http://localhost:5000/userPosts')

        console.log(res.data)
        let reversed = res.data.reverse();
        commit('setPosts', reversed)
    }
};
const mutations = {
    post: (state, content) => state.posts.unshift(content),
    removePost: (state, id) => (state.posts = state.posts.filter(post => post.id !== id)),
    setPosts: (state, posts) => (state.posts = posts),
};

export default {
    state,
    getters,
    actions,
    mutations
}