const config = require('../library/database');

const mysql = require('mysql');

let pool = mysql.createPool(config);

pool.on('error', (error) => {
    console.log(error);
});

module.exports = {
    formRegister(req,res){
        res.render("register", {
            url: 'http://localhost:3000/',
        });
    },

    saveRegister(req,res) {
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.pass; 

        if (username && email && password) {
            pool.getConnection((error, connection) => {
                if (error) throw error; 

                let sql = `INSERT INTO user (username, email, password) VALUES (?, ? , SHA2(?,512));`
                
                connection.query(sql, [username,email,password], (error, result) => {
                    req.flash('color', 'success');
                    req.flash('status', 'yes..');
                    req.flash('message', 'registrasi berhasil!!!');

                    res.redirect('/login');
                });

                connection.relase();
            });
        }else {
            res.redirect('/login');
            res.end();
        }
    }
}