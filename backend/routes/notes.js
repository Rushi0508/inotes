const express = require("express");
const router = express.Router({mergeParams: true});

router.get("/", (req,res)=>{
    const obj = {
        a: 12
    }
    res.json(obj)
})

module.exports = router;