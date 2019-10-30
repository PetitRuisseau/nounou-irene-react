import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCDFAJmtBn4nUqmzc-DXHBZN2dygtpaswA",
    authDomain: "nounouirene-587da.firebaseapp.com",
    databaseURL: "https://nounouirene-587da.firebaseio.com",
    projectId: "nounouirene-587da",
    storageBucket: "nounouirene-587da.appspot.com",
    messagingSenderId: "543229833407",
    appId: "1:543229833407:web:7eac5b3fc4de7dda66d60a",
    measurementId: "G-64HG7CCJXD"
}

const firebaseApp = firebase.initializeApp({firebaseConfig})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base