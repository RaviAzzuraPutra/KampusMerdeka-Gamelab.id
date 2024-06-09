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


     db.collection('Siswa').aggregate([
        {
            $lookup: {
                from: 'Kelas',
                localField: 'kode_kelas',
                foreignField: 'kode_kelas',
                as: 'data'
            }
        }
     ]).toArray((error, result) => {
        if (error) {
            throw error
        }
        console.log(JSON.stringify(result,null,2));
     })
});
