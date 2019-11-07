<template>
  <div class="signup container">
    <form @submit.prevent="signup" class="card-panel1">
      <h2 class="center deep-purrple-text">Sign Up</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias" />
      </div>
      <p class="red-text center" v-if="feedback">{{ feedback }}</p>

      <div class="field center">
        <button class="btn deep-purple">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'Signup',
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null,
    };
  },
  methods: {
    signup() {
      if(this.alias && this.email && this.password) {
        this.feedback = null;
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })

        let ref = db.collection('users').doc(this.slug)
        /* First check if slug for this alias already exists */
        ref.get().then(doc => {
          if(doc.exists) {

            /* Give feedback if alias already exists */
            this.feedback = "This alias already exists"
          } else {

            /* Create a new user in the firebase AUTH DB */
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {

              /* If user creation successful, add user alias + ID + geolocation to our `users` DB */
              ref.set({
                alias: this.alias,
                geoLocation: null,
                user_id: cred.user.uid,
              }).then(() => {
                /* Everything Cool, Redirect to home page => Gmap Page */
                this.$router.push({name:'GMap'})
              })
            })
            .catch(e => {
              /* If user already exists, give feedback */
              console.log(e)
              this.feedback = e.message;
            })
          }
        })
        // console.log(this.slug)
      } else {

        /* User must enter all fields to sign up successfully */
        this.feedback = 'You must enter ALL alias';
      }
    }
  }
};
</script>

<style>
.signup {
  max-width: 400px;
  margin-top: 60px;
}
.signup h2 {
  font-size: 2.4em;
}
.signup .field {
  margin-bottom: 16px;
}
</style>