const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
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
        password: {
            type: String,
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

const People = mongoose.model("People", peopleSchema);

module.exports = People;
