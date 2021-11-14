<template>
  <div class="container">
    <Header />
    <FormContainer />
    
    <AllUsers />
  </div>
</template>

<script>
// Vuex plugins


// Component Imports
import Header from './components/Header.vue'
import FormContainer from './components/FormContainer.vue'
import AllUsers from './components/AllUsers.vue'

export default {
  name: 'App',
  // Components imports 
  components: {
    Header,
    AllUsers,
    FormContainer
  }, 
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
}
</style>
