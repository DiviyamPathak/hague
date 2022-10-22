const Express = require('express');
const router = Express.Router();
const {RegisterUser,LoginUser,DataUser}= require('../controllers/UserControllers');
const {protec} = require('../middlewareauth');

router.post('/', RegisterUser);
router.post('/login', LoginUser);
router.get('/me', protec ,DataUser);

module.exports = router;