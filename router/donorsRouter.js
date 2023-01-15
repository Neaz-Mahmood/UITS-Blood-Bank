// external imports
const express = require("express");

// internal imports
const {
    getDonors,
    addDonor,
    searchDonor,
    removeDonor,
} = require("../controller/donorsController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

// donors page
router.get("/", decorateHtmlResponse("Donors"), checkLogin, getDonors);

// add donor
router.post("/", decorateHtmlResponse("Donors"), checkLogin, addDonor);

// remove donors
router.delete("/:id", checkLogin, removeDonor);

module.exports = router;
