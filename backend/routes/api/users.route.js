const router = require('express').Router();
const UserController = require('../../controllers/user.controller');
const User = require('../../models/user.model');
const Response = require('../../controllers/response');
const userController = new UserController(User,Response);
const Auth = require('../../middleware/auth.middleware');

/**
 * Returns
 * List of User();
 */
router.get('/', Auth, userController.fetchAll);
/**
 * Returns
 * An instance of User();
 */
router.get('/:id', Auth, userController.fetchById);

/**
 * Returns
 * An instance of added User();
 */
router.post('/', Auth, userController.add);

/**
 * Returns
 * An instance of delete User();
 */
router.delete('/:id', Auth, userController.deleteById);

/**
 * Returns
 * An instance of update User();
 */
router.put('/:id', Auth, userController.updateById);


module.exports = router;