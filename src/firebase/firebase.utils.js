import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCEyV6K9FTDJ7_R7-Wm1_ERjPXDyEpQiAE",
  authDomain: "decor-web.firebaseapp.com",
  projectId: "decor-web",
  storageBucket: "decor-web.appspot.com",
  messagingSenderId: "799622983534",
  appId: "1:799622983534:web:7e53b0485083b22971db7f",
  measurementId: "G-L0BD50M9H2"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase