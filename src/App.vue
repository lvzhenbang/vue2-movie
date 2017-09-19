<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    html,body{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0
    }
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;

    }
    
    li {
        display: inline-block;
        margin: 10px;
    }
    a {
        color: #42b983;
        text-decoration: none;
    }
    #app {
        text-align: center;
        color: #2c3e50;
    }
</style>
  