import "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore-compat.js"

async function readdb() {
    const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    // });
    console.log(querySnapshot);
}