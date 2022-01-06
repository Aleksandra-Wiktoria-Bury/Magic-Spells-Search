const Spells = require("../models/MagicSpell");

const create = async (req, res) => {
  const { body } = req;
  try {
    const newSpell = await Spells.create({
      ...body,
    });
    res.status(201).json({ message: "New spell added", spell: newSpell });
  } catch (error) {
    return res.status(500).json(error);
  }
};

//* ----- searches

const magicSchools = async (req, res) => {
  try {
    res.status(201).json(Spells.schema.path("school").enumValues);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getById = async (req, res) => {
  const { query } = req;

  try {
    const searchResult = await Spells.findById(query.id);

    if (!searchResult) {
      return res.status(404).json("Spell not found");
    }
    res.status(200).json({ message: "Spell found!", spell: searchResult });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const list = async (req, res) => {
  const search = req.query["search"];
  const field = req.query["field"];
  const filter = req.query["filter"];
  const data = await Spells.find({[field] : filter})
    .sort(search ? { [search]: 1, level: 1, cost: 1 } : { school: 1 })
    .limit(Number(req.query["limit"]) || 10)
    .skip(Number(req.query["skip"]) || 0)
    .lean();
  res.status(200).send(data);
};

module.exports = {
  create,
  magicSchools,
  getById,
  list,
};
