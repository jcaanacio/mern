const router = require('express').Router();
const Response = require('../../controllers/response');
const ExerciseController = require('../../controllers/exercise.controller');
const Exercise = require('../../models/exercise.model');
const exerciseController = new ExerciseController(Exercise,Response);
const Auth = require('../../middleware/auth.middleware');
/**
 * Returns
 * Instances of Exercise
 */
router.get('/', Auth, exerciseController.fetchAll);
/**
 * Returns
 * An Instance of Exercise
 */
router.get('/:id', Auth, exerciseController.fetchById);
/**
 * Returns
 * The Added Instance of Exercise
 */
router.post('/', Auth, exerciseController.add);
/**
 * Returns
 * The Deleted Instance of Exercise
 */
router.delete('/:id',Auth, exerciseController.deleteById);
/**
 * Returns
 * The Updated Instance of Exercise
 */
router.put('/:id',Auth, exerciseController.updateById);


module.exports = router;