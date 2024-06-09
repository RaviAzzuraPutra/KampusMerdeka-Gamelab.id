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

    //Menampilkan semua data
    console.log(db.collection('Data_Buku').find().toArray((error, result) => {
        console.log(result)
    }))
})