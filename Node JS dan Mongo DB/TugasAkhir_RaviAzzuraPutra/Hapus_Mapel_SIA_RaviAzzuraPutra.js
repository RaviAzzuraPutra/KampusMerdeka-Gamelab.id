const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'Sistem_Informasi_Akademik';

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

    //menghapus data
    db.collection('Mapel').deleteOne({
        kode_mapel: 'DG'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
});
