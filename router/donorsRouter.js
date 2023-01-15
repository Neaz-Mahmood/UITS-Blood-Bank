const express = require("express");

const {
    getDonors,
    addDonor,
    searchDonor,
    removeDonor,
} = require("../controller/donorsController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

router.get("/", decorateHtmlResponse("Donors"), checkLogin, getDonors);

router.post("/", decorateHtmlResponse("Donors"), checkLogin, addDonor);

router.delete("/:id", checkLogin, removeDonor);

module.exports = router;
