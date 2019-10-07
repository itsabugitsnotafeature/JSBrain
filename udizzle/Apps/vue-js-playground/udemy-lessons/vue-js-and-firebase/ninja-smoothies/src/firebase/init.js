import firebase from 'firebase'
// import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDqVDxNFClNW06MYR7hSPUaa1t9zV0r54E',
    authDomain: 'udemy-ninja-smoothies-a9fea.firebaseapp.com',
    databaseURL: 'https://udemy-ninja-smoothies-a9fea.firebaseio.com',
    projectId: 'udemy-ninja-smoothies-a9fea',
    storageBucket: 'udemy-ninja-smoothies-a9fea.appspot.com',
    messagingSenderId: '789037824178',
    appId: '1:789037824178:web:64769fa72e570f77b5f1ab',
    measurementId: 'G-23KN4RGS1X'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()

// firebaseApp.firestore().settings({
//     timestampsInSnapshots: true
// });

// export firestore database
export default firebaseApp.firestore()
