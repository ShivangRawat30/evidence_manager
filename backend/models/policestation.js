const mongoose = require('mongoose');

const policeStationSchema = new mongoose.Schema({
    policeStationName: {
        type: String,
        required: true,
    },
    publicKey: {
        type: String,
        required: true,
    }
});

const PoliceStation = mongoose.model('PoliceStation', policeStationSchema);

module.exports = PoliceStation;
