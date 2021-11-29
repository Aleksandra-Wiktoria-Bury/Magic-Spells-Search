const { Schema, model } = require("mongoose");

const magicSpellSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, min: 1 },
  damage: { type: Number, required: true, min: 0 },
  castingTime: { type: Number, default: 6, min: 0 },
  level: { type: Number, default: 1, min: 1 },
  range: { type: Number, default: 0.1, min: 0 },
  areaOfEffect: { type: Boolean, default: false },
  school: {
    type: String,
    enum: ["physical", "arcane", "fire", "frost", "nature", "shadow", "holy"],
  },
  required: true,
});

const MagicSpell = model("MagicSpell", magicSpellSchema);

module.exports = MagicSpell;
