<script>
    
</script>

<template>
    <div class="nav">
        <img alt="sunset" src="./asses/sunset.gif"/><br>
        <router-link to="/dmytro">Dmytro</router-link> |
        <router-link to="/">About</router-link> |  
        <router-link to="/petro">Petro</router-link>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<style>
    #app {
        text-align: center;
        background-color: pink;
    }

    .vue-active-link{
        color: white;
    }

    .content{
        padding: 20px;
        margin: auto;
        width: 600px;
        height: 500px;
        border: 1px solid black; 
    }
</style>