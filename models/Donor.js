const mongoose = require("mongoose");

const donorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        bloodType: {
            type: String,
            enum: ["A", "B", "O", "AB"],
            required: true,
        },
        rhFactor: {
            type: String,
            enum: ["+", "-"],
            required: true,
        },
        batch: {
            type: String,
            required: true,
        },
        section: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
