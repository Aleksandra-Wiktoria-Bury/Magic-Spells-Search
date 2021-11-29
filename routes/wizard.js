const express = require("express");
const router = express.Router();
const controllers = require("../controllers/wizardsControllers");

//Task 16 - Creating the wizard's route and endpoints
router.post("/create", controllers.create);

//Task 17 - Create an endpoint to return all wizard origins
router.get("/origins", controllers.origins);

//Task 20 - Adding spells to a wizard
router.get("/details", controllers.getById);
//Task 21 - Adding spells to a wizard
router.put("/learn/:id", controllers.learnSpell);
//Task 22 - Level up a wizard
router.put("/levelup/:id", controllers.levelUp);

router.get("/all", controllers.getAll);

module.exports = router;
