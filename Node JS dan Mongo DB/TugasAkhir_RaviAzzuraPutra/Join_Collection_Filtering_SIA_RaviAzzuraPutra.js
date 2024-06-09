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

    db.collection('Nilai').aggregate([
        {
            $lookup: {
                from: 'Mapel',
                localField: 'kode_mapel',
                foreignField: 'kode_mapel',
                as: 'data'
            }
        },
        {
            $match: {
                nilai_uas: '97' 
            }
        }
    ]).toArray((error, result) => {
        if (error) {
            throw error;
        }
        console.log(JSON.stringify(result, null, 2));
    });
});
