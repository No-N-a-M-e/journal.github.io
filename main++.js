async function getCities(db, user) {
    const citiesCol = doc(db, 'Выходы', user);
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}