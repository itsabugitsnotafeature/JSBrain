import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAGQ1OMpamnRRFmx8iH6KbfCmqauznm3tI',
  authDomain: 'udemy-geo-ninjas-3ee20.firebaseapp.com',
  databaseURL: 'https://udemy-geo-ninjas-3ee20.firebaseio.com',
  projectId: 'udemy-geo-ninjas-3ee20',
  storageBucket: '',
  messagingSenderId: '221106351820',
  appId: '1:221106351820:web:8e51babcd41f38020c5c69'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
