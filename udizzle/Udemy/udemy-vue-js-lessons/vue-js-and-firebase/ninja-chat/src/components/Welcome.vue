<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter Your Name: </label>
          <input type="text" name="name" v-model="name">

          <p v-if="feedback" class="red-text"> {{feedback}} </p>
          <button class="btn teal">
            Enter Chat
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(txt) {
      // console.log(this.name)
      if(this.name) {
        // remove feedback
        this.feedback = null

        // transition to 'Chat' route 
        this.$router.push({
          name: 'Chat', 
          params: { name: this.name}
        })

      } else {
        this.feedback = 'You Must enter a name to join!'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}

.welcome h2 { 
  font-size: 3em;
}

.welcome btn {
  margin: 30px auto;
}
</style>
