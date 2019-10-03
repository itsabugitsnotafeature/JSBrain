<template>
  <div id="all-friends">
    <h2>
      AllFriends
    </h2>
    <div v-for="(friend, index) in friends" :key="index">
      <!-- <span v-if="friend.online">{{friend.name}}</span> -->
      <span>{{friend.name}}</span> - 
      <span>{{friend.online}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllFriends',
  props: ['friends'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#all-friends {
  margin: 10px;
}

</style>
