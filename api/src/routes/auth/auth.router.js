const authRouter = require("express").Router();

const { handleLogin, handleLogout } = require("../auth/auth.controller");

authRouter.post("/login", handleLogin);
authRouter.post("/logout", handleLogout);

module.exports = authRouter;
