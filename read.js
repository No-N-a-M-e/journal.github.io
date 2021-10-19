import { getFirestore, getDocs, collection } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.1.2/firebase-firestore.min.js';
import initializeApp from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.1.2/firebase-app.min.js';

const firebaseConfig = {
    apiKey: "AIzaSyCuU3_U0yblB7IHdY8CTJb3nY5SSdIlmK8",
    authDomain: "basr-d0079.firebaseapp.com",
    databaseURL: "https://basr-d0079-default-rtdb.firebaseio.com",
    projectId: "basr-d0079",
    storageBucket: "basr-d0079.appspot.com",
    messagingSenderId: "250883445973",
    appId: "1:250883445973:web:c200dd55f9dfd739e0fe5c",
    measurementId: "G-3M0ZDER1R6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getTodos() {
    try {
        const todoRef = collection(db, 'Выходы');
        let allTodos = await getDocs(todoRef);
        console.log(allTodos)
    } catch (err) {
        console.log(err)
    }
};
getTodos();