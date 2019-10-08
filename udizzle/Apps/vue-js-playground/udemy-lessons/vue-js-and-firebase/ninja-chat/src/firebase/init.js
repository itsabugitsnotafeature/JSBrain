import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialization Config
const firebaseConfig = {
  apiKey: 'AIzaSyD-KQmBUNc_k9xYGtsY1oOW3T9Hxk-8_gM',
  authDomain: 'udemy-ninja-chat-b353e.firebaseapp.com',
  databaseURL: 'https://udemy-ninja-chat-b353e.firebaseio.com',
  projectId: 'udemy-ninja-chat-b353e',
  storageBucket: 'udemy-ninja-chat-b353e.appspot.com',
  messagingSenderId: '334503521924',
  appId: '1:334503521924:web:20339eec4d1f40076fdcd1',
  measurementId: 'G-WJZ35LMS1L'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
