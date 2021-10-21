db.on('value', function(snapshot) {
    var uniqName = snapshot.name();
    var comment = snapshot.val()["Выходы"];
    console.log(comment);
});