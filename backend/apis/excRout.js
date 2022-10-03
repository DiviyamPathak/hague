const Express = require('express');
const router = Express.Router();

router.get("/", (req,res)=> {res.json({msg:`hello`})});

router.post("/", (req,res)=> {res.json({msg:`hello`})});

router.put("/:id", (req,res)=> {res.json({msg:`hello`})});

router.delete("/:id", (req,res)=> {res.json({msg:req})});



module.exports = router;
