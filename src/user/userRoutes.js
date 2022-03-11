const { Router } = require("express");
const { addUser, login } = require("./userControlers");
const { hashPassword, decryptPassword, checkToken, updatePassword  } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login)
userRouter.patch("/user", hashPassword, checkToken, updatePassword);
// userRouter.delete("/user/:filterKey/:filterVal", deleteUser);
module.exports = userRouter;
