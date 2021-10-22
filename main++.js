function adddb() {
    var user = window.localStorage.getItem('emailForSignIn');
    var kuda = document.getElementById("flex").value;
    var data_uxoda = document.getElementById("start").value;
    var vrema_uxoda = document.getElementById("time").value;
    var data_prixoda = document.getElementById("end").value;
    var vrema_prixoda = document.getElementById("time_end").value;
    var veryfied = false;
    if (document.getElementById('start').value == getFullYear() + '-' + getMonth() + '-' + getDate()) {
        db.collection('Выходы').doc(user).update({ data_uxoda });
        window.alert('Введите правильную дату');
    }
    db.collection('Выходы').doc(user).update({ kuda });
    if (document.getElementById('time').value == getHours() + ':' + getMinutes()) {
        db.collection('Выходы').doc(user).update({ vrema_uxoda });
        window.alert('Введите правильное время');
    }
    db.collection('Выходы').doc(user).update({ data_prixoda });
    db.collection('Выходы').doc(user).update({ vrema_prixoda });
    db.collection('Выходы').doc(user).update({ veryfied });
}