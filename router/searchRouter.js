// external imports
const express = require("express");

// internal imports
const { searchDonor } = require("../controller/donorsController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

// search donor
router.post("/", decorateHtmlResponse("Donors"), checkLogin, searchDonor);

module.exports = router;
