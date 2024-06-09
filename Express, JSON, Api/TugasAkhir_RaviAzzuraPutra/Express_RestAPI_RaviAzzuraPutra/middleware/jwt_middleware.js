const {generateJWT} = require('../controller/jwt');
const db = require('../database/database');

const jwtMiddleware = async (req, res, next) => {
    try {

        const contactId = req.params.id;

    const query = `SELECT id, Nama, Email, NoTelepon FROM contacts WHERE id = ?`;
    db.query(query, [contactId], (err, results) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "Contact Tidak Di Temukan" });
        }

        const contactData = results[0];

        const payload = {
            id: contactData.id,
            Nama: contactData.Nama,
            Email: contactData.Email,
            NoTelepon: contactData.NoTelepon
        };

        const jwtToken = generateJWT(payload);

        res.json({ token: jwtToken });

        next(); 
    });

    } catch (error) {
        console.error('Error generating JWT:', error);
        res.status(500).send('Internal server error');
    }
};

module.exports = { jwtMiddleware };