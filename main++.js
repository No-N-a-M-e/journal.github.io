import { doc, getDocs } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.1.2/firebase-firestore-lite.min.js";

async function getCities(db, user) {
    const citiesCol = doc(db, 'Выходы', user);
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}