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

     let sorting = {pengarang: -1}

     db.collection('Data_Buku').find().sort(sorting).toArray((error, result) => {
        if (error) {
            throw error
        }
        console.log(result);
     })
});
