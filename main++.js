function adddb() {
    var user = window.localStorage.getItem('emailForSignIn');
    var kuda = document.getElementById("flex").value;
    var data_uxoda = document.getElementById("start").value;
    var vrema_uxoda = document.getElementById("time").value;
    var data_prixoda = document.getElementById("end").value;
    var vrema_prixoda = document.getElementById("time_end").value;
    db.collection('Выходы').doc(user).update({ kuda });
    db.collection('Выходы').doc(user).update({ data_uxoda });
    db.collection('Выходы').doc(user).update({ vrema_uxoda });
    db.collection('Выходы').doc(user).update({ data_prixoda });
    db.collection('Выходы').doc(user).update({ vrema_prixoda });
}

function readdb() {
    firebaseApp.firestore().on('value', function(snapshot) {
        var uniqName = snapshot.name();
        var comment = snapshot.val()["Выходы"];
        console.log(comment);
    });
}