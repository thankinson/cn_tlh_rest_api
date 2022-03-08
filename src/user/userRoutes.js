const { Router } = require("express");
const { addUser } = require("./userControlers");
const { hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);

module.exports = userRouter;

