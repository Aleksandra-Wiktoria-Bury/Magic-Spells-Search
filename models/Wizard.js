const { Schema, model } = require("mongoose");

const wizardSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  age: { type: Number, required: true, min: 1 },
  level: { type: Number, default: 1, min: 1 },
  accuracy: { type: Number, default: 0.3, min: 0, max: 1 },
  critical: { type: Number, default: 0, min: 0, max: 1 },
  origin: {
    type: String,
    enum: [
      "Ankh-Morpork",
      "Bad Schüschein",
      "Betrek",
      "Borogravia",
      "Brindisi",
      "Chimeria",
      "Chirm",
      "Copperhead",
      "Cori Celesti",
      "Djelibeybi",
      "Ephebe",
      "Ghat",
      "Hersheba",
      "Howondaland",
      "Klatchistan",
      "Lipwig",
      "Rehigreed Province",
      "Schmaltzberg",
      "Skund",
      "Sto Helit",
      "Sto Lat",
      "Sunken Leshp",
      "The Chalk",
      "The Wyrmberg",
      "Überwald",
    ],
    required: true,
  },
  energy: {
    health: { type: Number, default: 1, min: 0 },
    stamina: { type: Number, default: 10, min: 0 },
    magic: { type: Number, default: 100, min: 0 },
  },
});

const Wizard = model("Wizard", wizardSchema);

module.exports = Wizard;
