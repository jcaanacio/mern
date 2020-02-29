const router = require('express').Router();
const UserController = require('../controllers/user.controller');

/**
 * Returns
 * List of User();
 */
router.get('/',UserController.fetchAll);
/**
 * Returns
 * An instance of User();
 */
router.get('/:id',UserController.fetchById);

/**
 * Returns
 * An instance of added User();
 */
router.post('/',UserController.add);

/**
 * Returns
 * An instance of delete User();
 */
router.delete('/:id',UserController.deleteById);

/**
 * Returns
 * An instance of update User();
 */
router.put('/:id',UserController.updateById);

module.exports = router;