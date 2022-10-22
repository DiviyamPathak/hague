const Express = require('express');
const {getHandler ,postHandler, putHandler,deleteHandler} = require('../controllers/excCon.js')
const router = Express.Router();
const { protec } = require('../middlewareauth')
router.get('/',protec, getHandler);

router.post("/", protec,postHandler);

router.put("/:id", protec,putHandler);

router.delete("/:id",protec, deleteHandler);



module.exports = router;
