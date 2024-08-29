const mongoose = require('mongoose');

// You need to get the Schema object from mongoose
const Schema = mongoose.Schema;

// Now you can use Schema to create a new schema
const nurseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

// Create a model using the schema
const Nurse = mongoose.model('Nurse', nurseSchema);

module.exports = Nurse;
