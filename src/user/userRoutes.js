const { Router } = require("express");
const { addUser, login } = require("./userControlers");
const { hashPassword, decryptPassword  } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);

module.exports = userRouter;
