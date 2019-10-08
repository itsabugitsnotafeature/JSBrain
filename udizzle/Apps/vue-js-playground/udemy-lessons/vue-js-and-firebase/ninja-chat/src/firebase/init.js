import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialization Config
const firebaseConfig = {
  apiKey: 'AIzaSyBuvbw99js5OK1bdyDqjwk9egIQerdVHys',
  authDomain: 'udemy-ninja-chat-ce59d.firebaseapp.com',
  databaseURL: 'https://udemy-ninja-chat-ce59d.firebaseio.com',
  projectId: 'udemy-ninja-chat-ce59d',
  storageBucket: 'udemy-ninja-chat-ce59d.appspot.com',
  messagingSenderId: '1081015383459',
  appId: '1:1081015383459:web:820bc048321e3c44bad616',
  measurementId: 'G-3XVVP5J229'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
