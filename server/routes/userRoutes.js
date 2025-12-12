const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/register', async (req, res)=>{
    
    const userExists = await User.findOne({email: req.body.email})
    if(userExists){
        res.send({
            success: false,
            message: "user already exists"
        })
    }
    
    // hasing and salting
    const salt = bcrypt.genSaltSync(10);
    console.log(salt);

    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashedPassword;


    const newUser = await User(req.body);
    await newUser.save();

    res.send({
        success: true,
        message: 'user registered successfully'
    })
})

router.post('/login', async ()=>{

})

module.exports = router;