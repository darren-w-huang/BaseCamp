// /plugins/firebase.js
import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyBXLnV1fHMqdBmzCs1kuwwhu4bmPW8lFLI",
    authDomain: "basecamp-70de0.firebaseapp.com",
    databaseURL: "https://basecamp-70de0.firebaseio.com",
    projectId: "basecamp-70de0",
    storageBucket: "basecamp-70de0.appspot.com",
    messagingSenderId: "890594893991",
    appId: "1:890594893991:web:0fde4595dcb3f29df23b82",
    measurementId: "G-7WS9W9ZF0W"
  };

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(config)
}

export const db = app.database()