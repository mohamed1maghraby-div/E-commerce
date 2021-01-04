const mysql = require('mysql');
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12345678',
    database : 'ecommerce'
  });
var values = [
    ['iPhone-smartphone-PUREGOLD-HD-normal-size-optim.png','iPhone', 500],
    ['iPhone-smartphone-PUREGOLD-HD-normal-size-optim.png','iPhone', 600],
    ['iPhone-smartphone-PUREGOLD-HD-normal-size-optim.png','iPhone', 700],
];
const product = con.connect((err)=>{
    if (err) throw err;
    console.log('connected!');
    con.query("INSERT INTO product (imagepath , productname , price) VALUES ?", [values], (err,result)=>{
        if (err) throw err;
        console.log('database created!')
    });
});

module.exports = product;