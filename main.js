import { getDocs } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.1.3/firebase-firestore-lite.min.js';

function add() {
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
    read();
    document.getElementsByClassName("dating mid-text").value = data_uxoda;
    document.getElementsByClassName("timing mid-text").value = vrema_uxoda;
    // db.collection('Выходы').snapshots()
    //     .then({

    //     })
    async function getCities(db) {
        const citiesCol = collection(db, 'cities');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
    }
};
elem.addEventListener("onclick", add());
async function read() {
    const querySnapshot = await getDocs(collection(db, "Выходы"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
};