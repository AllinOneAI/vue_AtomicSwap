<script setup>
    import TheNavigator from "./components/TheNavigator.vue"
    import { useTestStore } from "@/stores/Test.js" 

    const testStore = useTestStore();


</script>

<template>
    <img class="kit" hidden="testStore.stat" src="./asses/peaking_cat.gif" />
    <router-link to="/kitty"><img src="./asses/sunset.gif"/></router-link><br><br>
    <TheNavigator />
    <div class="content">
        <router-view></router-view>
    </div>
    <button @click="testStore.change()">Mem</button>
</template>

<style>
    #app {
        margin-top:5%;
        text-align: center;
        background-color: rgb(220, 87, 173);
    }

    .content{
        font-size:2ch;
        color: black;
        padding: 20px;
        padding-top: 0px;
        margin: auto;
        width: 620px;
        height: 550px;
        border: 2px solid black; 
    }

    .kit{
        position: fixed;
        top: 50px;
        left: 100px;
    }
</style>