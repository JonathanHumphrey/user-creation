<template>
    <div class="header">
        <h3>Welcome!</h3>
    </div>
</template>

<script>


export default {
    name: "Header",
}
</script>
 
<style scoped>
    .header{
        display: inline;
        flex: 2;
        width: 20rem;
        margin: auto;
    }
    .account-nav{
        cursor: pointer;
        border: none;
        background-color: #41b883;
        padding: .5rem;
        margin: .5rem;
    }
    .sign-up:hover{
        color: rgb(46, 149, 197);
    }
    .sign-in{
        cursor: pointer;
        border: none;
        background-color: #41b883;
        padding: .5rem;
        margin: .5rem;
    }
    .sign-in:hover{
        color: rgb(46, 149, 197);
    }
    h3{
        width: 5rem;
        margin: 2rem;
        display: inline-block;
    }
</style>