const Express = require('express');
const {getHandler ,postHandler, putHandler,deleteHandler} = require('../controllers/excCon.js')
const router = Express.Router();

router.get('/', getHandler);

router.post("/", postHandler);

router.put("/:id", putHandler);

router.delete("/:id", deleteHandler);



module.exports = router;
