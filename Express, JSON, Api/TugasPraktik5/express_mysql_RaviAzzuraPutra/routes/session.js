let express = require('express');
let router = express.Router();

router.get('/', (req,res) => {
    req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
    res.send(`Anda telah berkunjung ke website ini sebanyak ${req.session.counter} kali!!`) 
});

let sessionData;

router.get('/set_session', (req,res) => {
    sessionData = req.session;
    sessionData.user = {};
    let username = 'Ravi';
    sessionData.user.username = username;
    sessionData.user.id = Math.random();
    console.log("Setting session data:username =%s and salary =%s", username,sessionData.user.id)
    res.json(sessionData.user);
});

router.get('/setting_session', (req,res) => {
    sessionData = req.session;
    if (!sessionData.user) {
        sessionData.user = {}; 
    }
    let userObj = sessionData.user;
    console.log('GET data pada: username', userObj);
    res.json(userObj);
});

router.get('/destroy_session', (req,res) => {
    sessionData = req.session;

    sessionData.destroy((error) => {
        if (error) {
            throw error
        }else {
            msg = 'Session Destroy';
            console.log(msg);
            res.json(msg);
        }
    });
});

module.exports = router;