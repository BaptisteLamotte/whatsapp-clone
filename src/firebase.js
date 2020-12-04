import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAsBXUEQSq6hHsSr_VqiurhRLbIupllxv8",
    authDomain: "whattsapp-clone-30764.firebaseapp.com",
    projectId: "whattsapp-clone-30764",
    storageBucket: "whattsapp-clone-30764.appspot.com",
    messagingSenderId: "948251568823",
    appId: "1:948251568823:web:97412166095aeaf81cbb32",
    measurementId: "G-8168C19J73"  
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db ;