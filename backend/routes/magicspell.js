const express = require('express');
const router = express.Router();
const controllers  = require('../controllers/spellsControllers')

//Task 13 - Creating the spells
router.post('/create', controllers.create);

//Task 14 - Create an endpoint to return all magic spell schools
router.get('/schools', controllers.magicSchools)

//Task 19 - Create a route to read a spell
router.get('/details', controllers.getById)

router.get('/list', controllers.list)


module.exports = router;