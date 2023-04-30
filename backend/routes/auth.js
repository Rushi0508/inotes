const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const router = express.Router({mergeParams: true});
const User = require("../models/users");
const {validateUser, validateUserRules} = require("../middleware")
JWT_SECRET = "I am JWT SEC"
// Create User 
router.post("/",validateUserRules(), validateUser, async (req,res)=>{
    let user = await User.findOne({email: req.body.email});
    if(user){
        res.send("enter unique email");
    }else{
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        res.send(authToken)
    }
})

module.exports = router;