const Donor = require("../models/Donor");

async function getDonors(req, res, next) {
    try {
        const donors = await Donor.find();
        res.render("donors", {
            donors: donors,
        });
    } catch (err) {
        next(err);
    }
}

async function addDonor(req, res, next) {
    let newDonor;

    newDonor = new Donor({
        ...req.body,
    });

    try {
        const result = await newDonor.save();

        const donors = await Donor.find();
        res.render("donors", {
            donors: donors,
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

async function searchDonor(req, res, next) {
    let bloodType = req.body.bloodType;
    let rhFactor = req.body.rhFactor;

    try {
        const donors = await Donor.find({
            bloodType: bloodType,
            rhFactor: rhFactor,
        });
        res.render("donors", {
            donors: donors,
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

async function removeDonor(req, res, next) {
    try {
        const donor = await Donor.findByIdAndDelete({
            _id: req.params.id,
        });

        res.status(200).json({
            message: "Donor was removed successfully!",
        });
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: "Could not delete the donor!",
                },
            },
        });
    }
}

module.exports = {
    getDonors,
    addDonor,
    searchDonor,
    removeDonor,
};
