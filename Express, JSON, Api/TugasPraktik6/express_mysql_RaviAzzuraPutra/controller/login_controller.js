const config = require('../library/database');

let mysql = require('mysql');

let pool = mysql.createPool(config);

pool.on('error', (error) => {
    console.log(error);
});

module.exports = {
    login(req,res){
        res.render("login", {
            url: 'http://localhost:3000/',
            colorFlash: req.flash('color', 'success'),
            statusFlash: req.flash('status', 'yes..'),
            pesanFlash: req.flash('message', 'registrasi berhasil!!!'),
        });
    },

    loginAuth(req,res){
        let email = req.body.email;
        let password = req.body.pass;
        if (email && password) {
            pool.getConnection((error, connection) => {
                if (error) throw error;

                let sql = `SELECT * FROM user WHERE email = ? AND password = SHA(?,512);`

                connection.query(sql, [email,password], (error,result) => {
                    if (error) throw error; 

                    if (result.length > 0) {
                        req.session.loggedin = true;
                        req.session.userid = result[0].user_id;
                        req.session.username = result[0].username;
                        res.redirect('/');
                    }else {
                        req.flash('color', 'danger');
                        req.flash('status', 'oops..');
                        req.flash('message', 'akun tidak ditemukan');
                        res.redirect('/login')
                    }
                });
                connection.relase()
            });
        }else {
            res.redirect('/login');
            res.end();
        }
    },
    logout(req,res){
        req.session.destroy((error) => {
            if (error) {
                return console.log(error);
            }
            res.clearCookie('secretname');
            res.redirect('/login')
        });
    }
}