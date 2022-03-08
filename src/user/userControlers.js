const jwt = require("jsonwebtoken");
const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = await jwt.sign({_id: newUser._id}, process.env.SECRET)
        res.status(200).send({user: newUser.username})
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message})
    };
};

exports.login = async (req, res) =>{
    try {
        // const user = await User.findOne({ username: req.body.username});
        res.status(200).send({ user: req.user.username});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    };
};