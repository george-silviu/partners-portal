const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];
  console.log(token);

  jwt.verify(token, prcess.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token

    req.userId = decoded.id;
    req.username = decoded.username;
    req.userRoles = decoded.roles;
    next();
  });
};

module.exports = checkJWT;
