const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'perpustakaan';

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        throw error;
    }

    // Pilih database
    const db = client.db(dbName);

    // Menambahkan Beberapa data ke collections perpustakaan
    db.collection('Data_Buku').insertMany([
        {
            kode_buku: 'XC090',
            judul_buku: 'MANAJEMEN keuangan',
            pengarang: 'Martono, Agus Harjito',
            jml_halaman: 69,
            thn_terbit: 2001
        },
        {
            kode_buku: 'AS887',
            judul_buku: 'ARTICLES on Literature and Other Writings from the Cincinnati Enquirer 1873',
            pengarang: 'Ed. Hojin Yano, Tadanobu Kawai, Hiroyoshi Kishimoto',
            jml_halaman: 1000,
            thn_terbit: 1975
        }
    ], (error, result) => {
        if (error) {
            return console.log('gagal menambahkan data:', error);
        }

        console.log(result);
    });
});
