const crypto = require('crypto');
const jwtSecret = "your_secret_key";

const generateJWT = (payload) => {
    //header
        const header = {
            "alg": "HS256", 
            "typ": "JWT"
        };

        const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64');

        console.log(`Ini Adalah token untuk header: ${encodedHeader}`);

    //payload
        const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64');

        console.log(`Ini Adalah token untuk payload: ${encodedPayload}`);

    //signature
        const signature = crypto.createHmac('sha256', jwtSecret).update(encodedHeader + '.' + encodedPayload).digest('base64');
        console.log(`Ini Adalah token untuk payload: ${signature}`);

    //menggabungkan Header,Payload,Signature
        const jwt = `${encodedHeader}.${encodedPayload}.${signature}`
        console.log(`ini adalah token JWT: ${jwt}`);

        return jwt;
}



module.exports = {
    generateJWT
};