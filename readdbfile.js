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
db.settings({ timestampInSnapshots: true });
var user = window.localStorage.getItem('emailForSignIn');
var exitcol = db.collection("Выходы").doc(user);

exitcol.get().then((doc) => {
    $("#tt").html(doc.data().vrema_uxoda);
    $("#dt").html(doc.data().data_uxoda);
})
document.getElementById('check').addEventListener('click', function() {
    $("#tt").html("-");
    $("#dt").html("-");
    var veryfied = true;
    db.collection('Выходы').doc(user).update({ veryfied });
    db.collection('Выходы').doc(user).update({ data_uxoda: "-" });
    db.collection('Выходы').doc(user).update({ vrema_uxoda: "-" });
    db.collection('Выходы').doc(user).update({ data_prixoda: "-" });
    db.collection('Выходы').doc(user).update({ vrema_prixoda: "-" });
    db.collection('Выходы').doc(user).update({ kuda: "-" });
})