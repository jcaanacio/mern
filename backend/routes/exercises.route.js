const router = require('express').Router();
const Response = require('../controllers/response');
const ExerciseController = require('../controllers/exercise.controller');
const Exercise = require('../models/exercise.model');
const exerciseController = new ExerciseController(Exercise,Response);
/**
 * Returns
 * Instances of Exercise
 */
router.get('/',exerciseController.fetchAll);
/**
 * Returns
 * An Instance of Exercise
 */
router.get('/:id',exerciseController.fetchById);
/**
 * Returns
 * The Added Instance of Exercise
 */
router.post('/',exerciseController.add);
/**
 * Returns
 * The Deleted Instance of Exercise
 */
router.delete('/:id',exerciseController.deleteById);
/**
 * Returns
 * The Updated Instance of Exercise
 */
router.put('/:id',exerciseController.updateById);

module.exports = router;