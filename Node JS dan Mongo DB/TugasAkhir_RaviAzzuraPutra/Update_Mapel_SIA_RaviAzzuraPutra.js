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
    const updatePromise = db.collection('Mapel').updateOne(
        {
            kode_mapel: 'PJOK'
            
        },
        {
            $set: {
                nama_mapel: 'Pendidikan Jasmani, Olahraga, dan Kesehatan'
            },
        },
        );

        updatePromise.then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        });
});
