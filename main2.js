function create_accaunt() {
    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://n0-n4-m3.github.io/journal/',
        // This must be true.
        handleCodeInApp: true,
    };
    var emailin = document.getElementById("Emai").value;
    var password = document.getElementById("Passwor").value;
    var errorCode = ' ';
    firebase.auth().createUserWithEmailAndPassword(emailin, password)
        .then((userCredential) => {
            // Signed in 
            var data_uxoda = "-";
            var vrema_uxoda = "-";
            db.collection('Выходы').doc(emailin).set({});
            db.collection('Выходы').doc(emailin).update({ data_uxoda });
            db.collection('Выходы').doc(emailin).update({ vrema_uxoda });
            db.collection('Ученики').doc(emailin).set({});
            window.alert('Проверьте электронную почту');
            var user = userCredential.user;
            verifiy(emailin, actionCodeSettings);
            main(emailin);
        })
        .catch((error) => {
            errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            if (errorCode == 'auth/email-already-in-use') window.alert('Введите другую почту');
        });
};

function verifiy(e, a) {
    firebase.auth().sendSignInLinkToEmail(e, a)
        .then(() => {

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
};

function login() {

    var emailin = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    firebase.auth().signInWithEmailAndPassword(emailin, password)
        .then((userCredential) => {
            var user = userCredential.user;
            window.localStorage.setItem('emailForSignIn', emailin);
            document.location.href = 'https://n0-n4-m3.github.io/journa/main.html'
            window.localStorage.setItem('emailForSignIn', emailin);
            $('.grid').css('grid-temlate-areas', 'out out')
                // if (user.email.Verified) {
                //     console.log('ok');
                // } else {
                //     window.alert('verifiy suka');
                // }
        })
        .catch((error) => {
            var errorCode = error.code;
            if (errorCode == 'auth/user-not-found') {
                window.alert('Введите существующую почту');
            }
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
};

function main(a, name, secname, room) {
    var name = String(document.getElementById("Name").value);
    var secname = String(document.getElementById("secName").value);
    var room = String(document.getElementById("Room").value);
    db.collection('Ученики').doc(a).update({ name });
    db.collection('Ученики').doc(a).update({ secname });
    db.collection('Ученики').doc(a).update({ room });
};


function aaa() {
    $('.in').css('visibility', 'hidden');
    $('.in2').css('visibility', 'visible');
};

function bbb() {
    $('.in2').css('visibility', 'hidden');
    $('.in').css('visibility', 'visible');
};