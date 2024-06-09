const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'Ssitem_Informasi_Akademik';

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

     // Hapus koleksi 
     db.collection('SiswaDanNilaiExtra').drop((err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        client.close();
    });
    
});
