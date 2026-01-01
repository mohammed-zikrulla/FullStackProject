const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifiedToken = jwt.verify(token, "JWT_SECRET");
    //console.log(verifiedToken); //this returns { id: '693dc2fe50473a81198db1d4', iat: 1766086199, exp: 1766258999 }
    // Keep backward compatibility with routes that read `req.body.id`.
    req.body = req.body || {};
    req.body.userId = verifiedToken.id;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({
      success: false,
      message: "Unauthorized Access",
    });
  }
};
module.exports = authMiddleware;
