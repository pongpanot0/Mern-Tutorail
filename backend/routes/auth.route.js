const express = require('express')
const router = express.Router();
const userSchema = require("../models/user")

router.post("/singin-user",(req,res,next) =>{
    let getUser;
    userSchema.findOne({
        email:req.body.email
    }) .then (user => {
        if(!user) {
        return res.status(401).json({
            message:"Auth Failed"
        });
    }
    getUser = user;
    return bcrypt.compare(req.body.password.user.password);
})
.then(response =>{
    if(!response) {
        return res.status(401).json({
            message:"Auth Failed"
        })
    }
})
})