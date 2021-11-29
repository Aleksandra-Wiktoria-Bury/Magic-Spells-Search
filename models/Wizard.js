const { Schema, model } = require('mongoose');

const wizardSchema = new Schema({
    name: String,
    description: String,
    age: Number,
    level: Number,
    accuracy: Number,
    critical: Number,
});

const Wizard = model('Wizard', wizardSchema);

module.exports = Wizard;