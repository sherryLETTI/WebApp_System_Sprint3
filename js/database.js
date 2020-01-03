var mysql = require('mysql');

var dbCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "testserver",
    database: "lecturers"
});

dbCon.connect(function(err) {
    if (err)
        throw err;

    console.log("DB CONNECTION SUCCESS");

    var sql = "CREATE TABLE lecturers (firstname VARCHAR(255), lastname VARCHAR(255))";
    dbCon.query(sql, function (err, result) {
        if (err) throw err;

        console.log("Table created");
    });
    sql = "INSERT INTO lecturers (firstname, lastname) VALUES ('Roxy', 'Koitz')";
    dbCon.query(sql);
});
