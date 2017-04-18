const FirebaseConfig = require('../config/firebase.config.json')
const firebase = require('firebase')
console.log(FirebaseConfig)
const firebaseApp = firebase.initializeApp(FirebaseConfig)
const db = firebaseApp.database()
export default db
export let usersRef = db.ref('users')
export let chartRef = db.ref('charts')