<template>
  <div class="hello">
    <ul>
      <li> <router-link :to="{name: 'Home'}"> Home </router-link> </li>
      <li> <router-link :to="{name: 'About'}"> About </router-link> </li>
    </ul>
    <h2>Users</h2>
    <ul>
      <li v-for="(id, index) in userIds" :key="index">
        <router-link :to="{name: 'ViewProfile', params: {user_id: id}}">
          <span>
            Profile {{ id }}             
          </span>
        </router-link>

      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      userIds: ['1', '2', '3', '4', '5'],

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  padding: 0px;
}

a {
  color: #42b983;
}
</style>
