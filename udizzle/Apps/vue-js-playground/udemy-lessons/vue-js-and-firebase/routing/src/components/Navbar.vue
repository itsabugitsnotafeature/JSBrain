<template>
  <div class="hello">
    <!-- Simple Nav -->
    <ul>
      <li> <router-link :to="{name: 'Home'}"> Home </router-link> </li>
      <li> <router-link :to="{name: 'About'}"> About </router-link> </li>
    </ul>

    <!-- User Profile Link List -->
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

    <!-- Navigation Controls -->
    <h2>Navigation Controls</h2>
    <ul>
      <li>
        <button @click="goBack">
          Go Back
        </button>
        
        <button @click="goHome">
          Redirect to Home
        </button>

        <button @click="goForward">
          Go Forward
        </button>
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
  },
  methods: {
    goHome() {
      this.$router.push({name: 'Home'});
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
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

li {
  display: inline-block;
  margin: 5px;
}

</style>
