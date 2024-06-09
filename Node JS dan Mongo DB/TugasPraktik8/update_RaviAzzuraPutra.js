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

    //mengubah data
    const updatePromise = db.collection('Data_Buku').updateOne(
        {
            judul_buku: 'Seri Pemrograman Internet : Panduan Pemrograman JavaScript (sampai dengan JavaScript 1.2)'
        },
        {
            $set: {
                kode_buku: 'AB109',
            },
        },
        );

        updatePromise.then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        });
});
