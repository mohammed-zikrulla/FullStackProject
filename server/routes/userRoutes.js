const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {

    const userExists = await User.findOne({ email: req.body.email })
    if (userExists) {
        res.send({
            success: false,
            message: "user already exists"
        })
    }

    // hasing and salting
    const salt = await bcrypt.genSalt(10);
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

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        res.send({
        success: false,
        message: "user does not exist Please Register",
      });
    }

    // validate password

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
    res.status(401).send({
        success: false,
        message: "Sorry, invalid password entered!",
      });
    }

    res.send({
      success: true,
      message: "You've successfully logged in!",
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;