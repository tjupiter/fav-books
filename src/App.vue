<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link> |
    <!-- <router-link :to="{name: 'Parralax2'}">Parralax2</router-link> -->
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

#nav {
  padding: 0;
  height: 8vh;
  background: black;
  /* position: sticky; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
}

#nav a {
  font-weight: bold;
  color: rgb(185, 214, 233);
  text-decoration: none;
  text-transform: uppercase;
}

#nav a.router-link-exact-active {
  color: rgb(65, 141, 193);
}
</style>
