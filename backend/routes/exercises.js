const router = require('express').Router();
let Exercise = require('../models/exercise.model');


router.route('/').get((request,response) => {
    Exercise.find()
        .then(users => response.json(users))
        .catch(err => response.status(400).json('Error: ' + err))
    ;
});

router.route('/add').post( (request,response) => {
    const username = request.body.username;
    const newUser = new Exercise({username});

    newUser
        .save()
        .then( () => response.json('User added'))
        .catch( err => response.status(400).json('Error: ' + err))
    ;
});


module.exports = router;