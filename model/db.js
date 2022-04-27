const mysql = require('mysql');
require('dotenv').config({path: __dirname + '/.env'});

const pool = mysql.createPool({
    host:process.env.RDS_HOSTNAME,
    user:process.env.RDS_USERNAME,
    password:process.env.RDS_PASSWORD,
    port:process.env.RDS_PORT,
    database:process.env.RDS_DB_NAME,
})

function insertData(text,url){
    try{
        pool.getConnection((err,connection)=>{
            if (err) throw err;
            else {
                connection.query('INSERT INTO message(input_msg,img_url) VALUES (?,?)',
                [text,url],
                (err,result)=>{
                    if (err) throw err;
                    console.log('Inserted ' + result.affectedRows + ' row(s).');
                    connection.release();
                })
            }
        })
    }
    catch{
        console.log(err)
    }
}

exports.insertData = insertData