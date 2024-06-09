const db = require('../db/connection');


const getALLcontacts =  (req,res) => {
    let sql = `SELECT * FROM contacts`;

    db.query(sql,(error, result) => {
        if (error) {
            res.send(error);
            res.json({
                data: ' '
            });
        }else {
            res.json({
                data: result
            });
        };
    });
};

const insertContact = (req, res) => {
    let Nama = req.body.Nama;
    let Email = req.body.Email;
    let NoTelepon = req.body.NoTelepon;

    let data = { Nama: Nama, Email: Email, NoTelepon: NoTelepon };

    let sql = 'INSERT INTO contacts set ? ';

    db.query(sql, data, (error, result) => {
        if (error) {
            res.send(error);
        }else {
            res.send('Data Berhasil Disimpan!')
        };
    });

    //body request
    // {
    //     "Nama": "Deden Ferdiansyah",
    //     "Email": "deden@yahoo.com",
    //     "NoTelepon": "081598006426"
    // }

};

const updateContact = (req, res) => {
    let id = req.params.id;
    let Nama = req.body.Nama;
    let Email = req.body.Email;
    let NoTelepon = req.body.NoTelepon;

    let data = { Nama: Nama, Email: Email, NoTelepon: NoTelepon };

    let sql = `UPDATE contacts SET ? WHERE id = ?`;

    db.query(sql, [data, id], (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.json({
                id: id,
                Nama: data.Nama,
                Email: data.Email,
                NoTelepon: data.NoTelepon,
                message: 'Data Berhasil Diubah!'
            });
        }
    });

    //request body
    // {
    //     "Nama" : "Yuri Alberto",
    //     "Email": "Yuri@yahoo.com",
    //     "NoTelepon": "081729905439"
    // }
    //result 
    // {
    //     "id": "20",
    //     "Nama": "Yuri Alberto",
    //     "Email": "Yuri@yahoo.com",
    //     "NoTelepon": "081729905439",
    //     "message": "Data Berhasil Diubah!"
    // }
};

const deleteContact = (req,res) => {
    let id = req.params.id;

    let sql = `DELETE FROM contacts WHERE id = ${id}`

    db.query(sql, id, (error, result) => {
        if (error) {
            res.send(error);
        }else {
            res.send('Data Berhasil Dihapus!')
        }
    });
};

module.exports = {
    getALLcontacts,
    insertContact,
    updateContact,
    deleteContact,
}