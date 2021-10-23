function adddb() {
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
    var kuda = document.getElementById("flex").value;
    var vrema_uxoda = document.getElementById("time").value;
    var data_prixoda = document.getElementById("end").value;
    var vrema_prixoda = document.getElementById("time_end").value;
    var veryfied = false;
    var now = new Date();
    var data_uxoda = String(now.getYear() + 1900) + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    db.collection('Выходы').doc(user).update({ data_uxoda });
    db.collection('Выходы').doc(user).update({ kuda });
    var count = 0;
    if (vrema_uxoda < now.getHours() + ':' + now.getMinutes()) {
        db.collection('Выходы').doc(user).update({ vrema_uxoda });
        count++;
    } else {
        window.alert('Введите правильное время');
    }
    if (data_prixoda < data_uxoda && count == 1) {
        db.collection('Выходы').doc(user).update({ data_prixoda });
        count++;
    } else {
        window.alert('Введите правильную дату');
    }
    if ((vrema_prixoda > vrema_uxoda && data_uxoda == data_prixoda) || (vrema_prixoda < vrema_uxoda && data_prixoda > data_uxoda) && count == 2) {
        db.collection('Выходы').doc(user).update({ vrema_prixoda });
    } else {
        window.alert('введите правильное время');
    }
    db.collection('Выходы').doc(user).update({ veryfied });
}