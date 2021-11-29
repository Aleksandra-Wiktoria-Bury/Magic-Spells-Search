const { Schema, model } = require('mongoose');

const magicSpellSchema = new Schema({
    name: String,
    description: String,
    cost: Number,
    damage: Number,
    castingTime: Number,
    level: Number,
    range: Number,
    areaOfEffect: Boolean
});

const MagicSpell = model('MagicSpell', magicSpellSchema);

module.exports = MagicSpell;