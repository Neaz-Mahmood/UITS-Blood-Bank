const express = require("express");
const { check } = require("express-validator");

const {
    getUsers,
    addUser,
    removeUser,
} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

router.get("/", decorateHtmlResponse("Users"), checkLogin, getUsers);

router.post("/", decorateHtmlResponse("Users"), checkLogin, addUser);

router.delete("/:id", checkLogin, removeUser);

module.exports = router;
