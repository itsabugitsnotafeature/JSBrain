<template>
  <div class="login container">
    <form @submit.prevent="login" class="class-panel">
      <h2 class="center deep-purple-text">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input placeholder="t@t.com" type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" placeholder="test123" name="password" v-model="password" />
      </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field">
        <button class="btn deep-purple">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    login() {
      // console.log(this.email + ' <- email and pass -> ' + this.password)
      if(this.email && this.password) {
        this.feedback = null;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((cred)=>{
          // cred.user for Firebase 5
          console.log('Hooray!! Logged in as => ' + cred.user)
          this.feedback = 'Welcome back ' + cred.user.email + '!'
          setTimeout(() => {
            this.$router.push({
              name: 'GMap'
            })  
          }, 1000);
        })
        .catch(()=>{
          this.feedback = 'Incorrect username or password!'
        })

      } else {
        this.feedback = 'Please fill in both fields!'
      }
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin-top: 60px;
}

.login h2 {
  font-size: 2.4em;
}

.login .field {
  margin-bottom: 16px;
}
</style> 