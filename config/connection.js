const mysql=require('mysql');

var connection=mysql.createConnection({
    host:       'localhost',
    password:   'SmartWork_1234',
    user:       'root',
    database:   'messenger'
})

connection.connect(err=>{
    if(err) throw err;
})

module.exports={
    connection
}