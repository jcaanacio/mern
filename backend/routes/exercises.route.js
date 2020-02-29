const router = require('express').Router();
const ExerciseController = require('../controllers/exercise.controller');

/**
 * Returns
 * Instances of Exercise
 */
router.get('/',ExerciseController.fetchAll);
/**
 * Returns
 * An Instance of Exercise
 */
router.get('/:id',ExerciseController.fetchById);
/**
 * Returns
 * The Added Instance of Exercise
 */
router.post('/',ExerciseController.add);
/**
 * Returns
 * The Deleted Instance of Exercise
 */
router.delete('/:id',ExerciseController.deleteById);
/**
 * Returns
 * The Updated Instance of Exercise
 */
router.put('/:id',ExerciseController.updateById);

module.exports = router;