// external imports
const express = require("express");

// internal imports
const {
    getDonors,
    addDonor,
    removeDonor,
} = require("../controller/donorsController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { checkLogin, requireRole } = require("../middlewares/common/checkLogin");

const router = express.Router();

// users page
router.get(
    "/",
    decorateHtmlResponse("Donors"),
    checkLogin,
    //requireRole(["admin"]),
    getDonors
);

// add user
router.post("/", decorateHtmlResponse("Donors"), checkLogin, addDonor);

// remove user
router.delete("/:id", checkLogin, removeDonor);

module.exports = router;
