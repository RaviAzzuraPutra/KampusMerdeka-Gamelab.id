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

    db.collection('Data_Buku').aggregate([
        {
            $lookup: {
                from: 'Lokasi_Buku',
                localField: 'kode_buku',
                foreignField: 'kode_buku',
                as: 'data'
            }
        },
        {
            $match: {
                pengarang: 'ChatGPT' 
            }
        }
    ]).toArray((error, result) => {
        if (error) {
            throw error;
        }
        console.log(JSON.stringify(result, null, 2));
    });
});
