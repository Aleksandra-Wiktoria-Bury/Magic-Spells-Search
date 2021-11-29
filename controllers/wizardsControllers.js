const Wizards = require("../models/Wizard");

const create = async (req, res) => {
  const { body } = req;
  try {
    const newWizard = await Wizards.create({
      ...body,
    });
    res.status(201).json({ message: "New wizard added", wizard: newWizard });
  } catch (error) {
    return res.status(500).json(error);
  }
};

//* ------ searches
const getAll = async (req, res) => {
  const searchResult = await Wizards.find({});

  res.status(200).json({ message: "Wizard found!", wizard: searchResult });
};

const origins = async (req, res) => {
  try {
    res.status(201).json(Wizards.schema.path("origin").enumValues);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getById = async (req, res) => {
  const { query } = req;

  try {
    const searchResult = await Wizards.findById(query.id);

    if (!searchResult) {
      return res.status(404).json("Wizard not found");
    }
    res.status(200).json({ message: "Wizard found!", wizard: searchResult });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const learnSpell = async (req, res) => {
  const { spell } = req.body;
  try {
    const learnSpell = await Wizards.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { spells: [spell] },
      },
      { new: true }
    );
    if (!learnSpell) {
      return res.status(404).json("Wizard not found");
    }
    res.status(201).json({ message: "Wizard learned a new spell!" });
  } catch (error) {
    return res.status(500).json(error);
  }
};
const levelUp = async (req, res) => {
  try {
    const levelUp = await Wizards.findByIdAndUpdate(req.params.id, {
      $inc: { level: 1 },
    });
    if (!levelUp) {
      return res.status(404).json("Wizard not found");
    }
    res.status(201).json({ message: "Wizard leveled up!" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAll,
  create,
  origins,
  getById,
  learnSpell,
  levelUp,
};
