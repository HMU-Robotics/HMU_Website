const mysql = require("mysql2")
const path = require("path")
require('dotenv').config({path: path.resolve(__dirname, '../../.env')})


const db =  mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

exports.get_sponsors = async(req,res,next) => {
    db.execute(`
        SELECT s.*, si.image
        FROM sponsor s
        JOIN sponsorImages si ON s.id = si.sponsor_id;
    `, (err,result) => {
        if(err) throw err;
        console.log(result);
        if(result.length === 0) {
            res.status(404).json("Sponsors not Found");
        }
        else {
            res.status(200).json({
                Item: result
            });
        }
    });
}
