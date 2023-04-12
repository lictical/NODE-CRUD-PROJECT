const mongoose = require("mongoose");

const contactScheme = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add the contact"],

    },
    email: {
        type: String,
        required: [true, "Please add the contact"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact"],
    }
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("Contact", contactScheme);
