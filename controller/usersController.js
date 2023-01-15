const bcrypt = require("bcrypt");

const User = require("../models/People");

async function getUsers(req, res, next) {
    try {
        const users = await User.find();
        res.render("users", {
            users: users,
        });
    } catch (err) {
        next(err);
    }
}

async function addUser(req, res, next) {
    let newUser;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    newUser = new User({
        ...req.body,
        password: hashedPassword,
    });

    try {
        const result = await newUser.save();

        const users = await User.find();
        res.render("users", {
            users: users,
        });
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: "Unknown error occured!",
                },
            },
        });
    }
}

async function removeUser(req, res, next) {
    try {
        const user = await User.findByIdAndDelete({
            _id: req.params.id,
        });

        res.status(200).json({
            message: "User was removed successfully!",
        });
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: "Could not delete the user!",
                },
            },
        });
    }
}

module.exports = {
    getUsers,
    addUser,
    removeUser,
};
