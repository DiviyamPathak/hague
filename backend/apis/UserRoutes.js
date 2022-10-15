const Express = require('express');
const router = Express.Router();
const {RegisterUser,LoginUser,DataUser}= require('../controllers/UserControllers')

router.post('/', RegisterUser);
router.post('/login', LoginUser);
router.get('/', DataUser);

module.exports = router;