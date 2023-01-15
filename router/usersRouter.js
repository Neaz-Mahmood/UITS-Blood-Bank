// external imports
const express = require("express");
const { check } = require("express-validator");

// internal imports
const {
    getUsers,
    addUser,
    removeUser,
} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
    addUserValidators,
    addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

// users page
router.get(
    "/",
    decorateHtmlResponse("Users"),
    checkLogin,
    //requireRole(["admin"]),
    getUsers
);

// add user
router.post("/", decorateHtmlResponse("Users"), checkLogin, addUser);

// remove user
router.delete("/:id", checkLogin, removeUser);

module.exports = router;
