import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyCPNsBXJNJWLoRa46e4kiDwZkwmvrX4i3w",
    authDomain: "svelte-users-2c6ea.firebaseapp.com",
    databaseURL: "https://svelte-users-2c6ea.firebaseio.com",
    projectId: "svelte-users-2c6ea",
    storageBucket: "svelte-users-2c6ea.appspot.com",
    messagingSenderId: "978767777056",
    appId: "1:978767777056:web:beb83f6e0ef8a0b48d9b45",
    measurementId: "G-GWWRZVV8WK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()