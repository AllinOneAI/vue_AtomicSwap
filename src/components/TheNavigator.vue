<template>
    <div id="nav">
        <router-link to="/dmytro">Dmytro</router-link> 
        <router-link to="/">About</router-link>  
        <router-link to="/petro">Petro</router-link>
    </div>
</template>
<style>
#nav {
  font-size:25px;
  position:relative;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 20px;
 
  color: rgb(0, 0, 0);
 
  align-items: center;
 
  z-index: 2;
}
#nav a {
  display: inline-block;
  margin-right: 20px;
  color: rgb(25, 13, 13);
  opacity: 0.5;
  transition: 0.2 ease color;
}
#nav a.router-link-active,
#nav a:hover {
  font-size: 30px;
  opacity: 1;
}
</style>