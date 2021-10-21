const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuU3_U0yblB7IHdY8CTJb3nY5SSdIlmK8",
    authDomain: "basr-d0079.firebaseapp.com",
    databaseURL: "https://basr-d0079-default-rtdb.firebaseio.com",
    projectId: "basr-d0079",
    storageBucket: "basr-d0079.appspot.com",
    messagingSenderId: "250883445973",
    appId: "1:250883445973:web:c200dd55f9dfd739e0fe5c",
    measurementId: "G-3M0ZDER1R6"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
db.settings({
    timestampInSnapshots: true
});
var user = window.localStorage.getItem('emailForSignIn');
db.collection('Выходы').doc(user).get().then((snapshot) => {
    console.log(snapshot.docs);
})