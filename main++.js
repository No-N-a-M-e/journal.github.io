function adddb() {
    var user = window.localStorage.getItem('emailForSignIn');
    var kuda = document.getElementById("flex").value;
    var vrema_uxoda = document.getElementById("time").value;
    var data_prixoda = document.getElementById("end").value;
    var vrema_prixoda = document.getElementById("time_end").value;
    var now = new Date();
    var data_uxoda = String(now.getYear() + 1900) + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    db.collection('Выходы').doc(user).update({ data_uxoda });
    db.collection('Выходы').doc(user).update({ kuda });
    if (vrema_uxoda >= now.getHours() + ':' + now.getMinutes()) {
        db.collection('Выходы').doc(user).update({ vrema_uxoda });
        if (data_prixoda >= data_uxoda) {
            db.collection('Выходы').doc(user).update({ data_prixoda });
            if (((vrema_prixoda > vrema_uxoda) && (data_uxoda == data_prixoda)) || (data_prixoda > data_uxoda)) {
                db.collection('Выходы').doc(user).update({ vrema_prixoda });
            } else {
                window.alert('Введите правильное время прихода');
            }
        } else {
            window.alert('Введите правильную дату');
        }
    } else {
        window.alert('Введите правильное время ухода');
    }
    db.collection('Выходы').doc(user).update({ veryfied: false });
}

function ccheck() {
    if (db.collection('Выходы').doc(user).get("data_prixoda") != null) {
        db.collection('Выходы').doc(user).update({ veryfied: true });
    }
}