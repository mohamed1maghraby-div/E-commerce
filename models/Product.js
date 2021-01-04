const mysql = require('mysql');
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12345678',
    database : 'ecommerce'
  });

const product = con.connect((err)=>{
    if (err) throw err;
    console.log('connected!');
    con.query("CREATE TABLE IF NOT EXISTS product (id INT AUTO_INCREMENT PRIMARY KEY, imagepath VARCHAR(255), productname VARCHAR(255), price SMALLINT(255))", (err,result)=>{
        if (err) throw err;
        console.log('database created!')
    });
});

module.exports = product;