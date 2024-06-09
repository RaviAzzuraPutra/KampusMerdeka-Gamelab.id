const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'perpustakaan';

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        throw error
    }

    //pilih database
    const db = client.db(dbName);

    //Menambahkan 1 data ke collections perpustakaan
    db.collection('Data_Buku').insertOne(
        {
            kode_buku: '',
            judul_buku: 'Seri Pemrograman Internet : Panduan Pemrograman JavaScript (sampai dengan JavaScript 1.2)',
            pengarang: 'Antony Pranata',
            jml_halaman: 69,
            thn_terbit: 2009
        }, 
        (error, result) => {
            if (error) {
                return console.log('gagal manambahkan data');
            }

            console.log(result);
        }
    )
})