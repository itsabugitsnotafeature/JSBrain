import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBwMfneE1oATGEEU6YbX3ajessoufGKszk',
  authDomain: 'udemy-geo-ninjas-449f9.firebaseapp.com',
  databaseURL: 'https://udemy-geo-ninjas-449f9.firebaseio.com',
  projectId: 'udemy-geo-ninjas-449f9',
  storageBucket: '',
  messagingSenderId: '994707541263',
  appId: '1:994707541263:web:40266d6972217eb82b027a'
}

const  firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
