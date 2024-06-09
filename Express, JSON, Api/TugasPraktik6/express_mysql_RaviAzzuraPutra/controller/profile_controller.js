const config = require('../library/database');

let mysql = require('mysql');
let pool = mysql.createPool(config);

pool.on('error', (error) => {
    console.log(error);
});

module.exports = {
    profile(req,res){
        let id = req.session.userid
        pool.getConnection((error, connection) => {
            if (error) throw error;

            let sql = `SELECT * FROM user where user_id = ${id}`;

            connection.query(sql, (error, result) => {
                if (error) throw error;
                res.render("profile", {
                    url: 'http://localhost:3000/',
                    userName: req.session.name,
                    nama: result[0]['username'],
                    email: result[0]['email']
                });
            });
            connection.relase();
        })
    }
}