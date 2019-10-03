<template>
  <div id="app">
    <NavBar/>
    <AllFriends :friends="friends" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import AllFriends from './components/AllFriends.vue'
import OnlineFriends from './components/OnlineFriends.vue'


export default {
  name: 'app',
  components: {
    NavBar,
    AllFriends,
    OnlineFriends,
  },
  data() {
    return {
      friends: [
        {name: 'Manish', online: (Math.floor((Math.random() * 100)) % 2 === 0)},
        {name: 'UD', online: (Math.floor((Math.random() * 100)) % 2 === 0)},
        {name: 'Bholi', online: (Math.floor((Math.random() * 100)) % 2 === 0)},
        {name: 'Viki', online: (Math.floor((Math.random() * 100)) % 2 === 0)},
        {name: 'Madan', online: (Math.floor((Math.random() * 100)) % 2 === 0)},
      ]
    }
  },
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
