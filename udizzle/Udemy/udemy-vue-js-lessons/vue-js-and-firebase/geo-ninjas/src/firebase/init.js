/* eslint-disable */

import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA9CW2AKPyYEOduBdQbPrJ6crQw-M49SjY',
  authDomain: 'udemy-geo-ninjas-449f9.firebaseapp.com',
  databaseURL: 'https://udemy-geo-ninjas-449f9.firebaseio.com',
  projectId: 'udemy-geo-ninjas-449f9',
  storageBucket: 'udemy-geo-ninjas-449f9.appspot.com',
  messagingSenderId: '994707541263',
  appId: '1:994707541263:web:40266d6972217eb82b027a'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
