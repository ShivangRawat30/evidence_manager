const mongoose = require('mongoose');

const courtSchema = new mongoose.Schema({
    courtName: {
        type: String,
        required: true,
    },
    publicKey: {
        type: String,
        required: true,
    }
});

const Court = mongoose.model('Court', courtSchema);

module.exports = Court;
