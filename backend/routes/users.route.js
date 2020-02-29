const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const User = require('../models/user.model');
const Response = require('../controllers/response');
const userController = new UserController(User,Response)

/**
 * Returns
 * List of User();
 */
router.get('/',userController.fetchAll);
/**
 * Returns
 * An instance of User();
 */
router.get('/:id',userController.fetchById);

/**
 * Returns
 * An instance of added User();
 */
router.post('/',userController.add);

/**
 * Returns
 * An instance of delete User();
 */
router.delete('/:id',userController.deleteById);

/**
 * Returns
 * An instance of update User();
 */
router.put('/:id',userController.updateById);

module.exports = router;