const express = require("express");

const{postBook,getBook,putBook,deleteBook,patchBook}= require("./controlfunction/function");

const router = express.Router();

router.post("/add",postBook);
router.get("/details",getBook);

router.put("/changes",putBook);
router.delete("/remove",deleteBook)
router.patch("/change",patchBook)

module.exports = router