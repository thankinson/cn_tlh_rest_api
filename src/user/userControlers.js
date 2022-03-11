const jwt = require("jsonwebtoken");
const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = await jwt.sign({_id: newUser._id}, process.env.SECRET);
        res.status(200).send({user: newUser.username, token })
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message})
    };
};

exports.login = async (req, res) =>{
    try {
        const token = await jwt.sign({_id: req.user._id}, process.env.SECRET)
        // const user = await User.findOne({ username: req.body.username});
        res.status(200).send({ user: req.user.username, token});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    };
};

exports.updatePassword = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { username: req.user.username },
            { password: req.body.password }
        );
        if (updatedUser.matchedCount > 0) {
            res.status(200).send({msg: "Update successfull"});
        } else {
            throw new Error("Did not Update");
        }
        // req.user
        // req.body.password
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message})
    }
};

exports.deleteUser = async (req, res) => {
    try {
      const deletedUser = await User.deleteOne({
        [req.params.filterKey]: req.params.filterVal,
      });
      if (deletedUser.deletedCount > 0) {
        res.status(200).send({ msg: "Successfully removed User" });
      } else {
        throw new Error("Did not remove user");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };

// exports.deleteUser = async (req, res) =>{
//     try {
//         let result
//         if (req.user.username === req.params.username){
//             result = await User.deleteOne({username: req.user.username});
//         }
//         if (result && result.deletedCount > 0){
//             res.status(200).send({msg: "User Deleted"});
//         } else {
//             throw new Error("Notthing deleted");
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({err: error.message})
//     }
// }