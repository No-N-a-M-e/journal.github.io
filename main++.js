function adddb() {
    var user = window.localStorage.getItem('emailForSignIn');
    var kuda = document.getElementById("flex").value;
    var data_uxoda = document.getElementById("start").value;
    var vrema_uxoda = document.getElementById("time").value;
    var data_prixoda = document.getElementById("end").value;
    var vrema_prixoda = document.getElementById("time_end").value;
    var veryfied = false;
    var now = new Date();
    console.log(document.getElementById('start').value + "==" + now.getYear() + '-' + now.getMonth() + '-' + now.getDate())
    if (document.getElementById('start').value == now.getYear() + '-' + now.getMonth() + '-' + now.getDate()) {
        db.collection('Выходы').doc(user).update({ data_uxoda });
    } else {
        window.alert('Введите правильную дату');
    }
    db.collection('Выходы').doc(user).update({ kuda });
    if (document.getElementById('time').value == now.getHours() + ':' + now.getMinutes()) {
        db.collection('Выходы').doc(user).update({ vrema_uxoda });
    } else {
        window.alert('Введите правильное время');
    }
    db.collection('Выходы').doc(user).update({ data_prixoda });
    db.collection('Выходы').doc(user).update({ vrema_prixoda });
    db.collection('Выходы').doc(user).update({ veryfied });
}