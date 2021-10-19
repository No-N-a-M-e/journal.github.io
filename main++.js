import { getFirestore, getDocs, collection } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.1.2/firebase-firestore.min.js';

function g() {
    var user = window.localStorage.getItem('emailForSignIn');
    var kuda = document.getElementById("flex").value;
    var data_uxoda = document.getElementById("start").value;
    var vrema_uxoda = document.getElementById("time").value;
    var data_prixoda = document.getElementById("end").value;
    var vrema_prixoda = document.getElementById("time_end").value;
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
    db.collection('Выходы').doc(user).update({ kuda });
    db.collection('Выходы').doc(user).update({ data_uxoda });
    db.collection('Выходы').doc(user).update({ vrema_uxoda });
    db.collection('Выходы').doc(user).update({ data_prixoda });
    db.collection('Выходы').doc(user).update({ vrema_prixoda });
    async function getCities(db) {
        const citiesCol = collection(db, 'Выходы');
        const citySnapshot = await getDocs(user);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
    }
    console.log(getCities);
    // document.getElementsByClassName("dating mid-text").value = data_uxoda;
    // document.getElementsByClassName("timing mid-text").value =vrema_uxoda;
};
window.addEventListener("onclick", g);