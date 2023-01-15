const express = require("express");

const { searchDonor } = require("../controller/donorsController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

router.post("/", decorateHtmlResponse("Donors"), checkLogin, searchDonor);

module.exports = router;
