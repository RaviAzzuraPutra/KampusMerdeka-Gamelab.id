const router = require('express').Router();
const loginController = require('../controller/login_controller').login;
const verifyUser = require('../library/verify');

router.get('/', verifyUser.isLogOUt, loginController.login);

router.get('/', loginController.logout);

router.post('/auth', loginController.loginAuth);

module.exports = router;