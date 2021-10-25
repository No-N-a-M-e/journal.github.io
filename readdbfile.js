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
db.settings({ timestampInSnapshots: true, merge: true });
var user = window.localStorage.getItem('emailForSignIn');
var exitcol = db.collection("Выходы").doc(user);

document.getElementById("ad").disabled = false;
firebase.auth().onAuthStateChanged(
    function(user) {
        if(user){
            var emailVerified = user.emailVerified;
            var email = user.email;
            if(emailVerified == true){
                $('.nadpis').css('visibility', 'hidden');
                window.alert('verify');
            } else {
                document.getElementById("ad").setAttribute('class', 'disabled');
                auth.currentUser.sendEmailVerification()
                    .then(() => {
                        console.log('Ок');
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                }); 
            }
        } else {
            console.log("No user found")
        }
    }
);

exitcol.onSnapshot((doc) => {
    $("#tt").html(doc.data().vrema_uxoda);
    $("#dt").html(doc.data().data_uxoda);
})
document.getElementById('check').addEventListener('click', function() {
    db.collection('Выходы').doc(user).update({ veryfied: true });
})