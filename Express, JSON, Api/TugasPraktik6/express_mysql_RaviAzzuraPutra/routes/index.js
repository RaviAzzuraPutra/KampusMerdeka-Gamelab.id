var express = require('express');
var router = express.Router();
let homeController = require('../controller/home_controller').home;
let profileController = require('../controller/profile_controller').profile;
let verifyUser = require('../library/verify');

/* GET home page. */
router.get('/', verifyUser.isLogin, homeController.home);
router.get('/profile', verifyUser.isLogin, profileController.profile);


module.exports = router;
