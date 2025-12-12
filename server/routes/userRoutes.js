const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

router.post('/register', async (req, res)=>{
    
    const userExists = await User.findOne({email: req.body.email})
    if(userExists){
        res.send({
            success: false,
            message: "user already exists"
        })
    }

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