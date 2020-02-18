const router = require('express').Router();
let Exercise = require('../models/exercise.model');
let Response = require('../controllers/response');

router.route('/').get((request,response) => {
    Exercise.find()
        .then(exercises => response.json(new Response(true,exercises).toJson()))
        .catch(err => response.status(400).json('Error: ' + err))
    ;
});

router.route('/:id').get((request,response) => {
    
    Exercise.findById(request.params.id)
        .then(exercise => response.json(new Response(true,exercise).toJson()))
        .catch(err => response.status(400).json('Error: ' + err))
    ;
});

router.route('/add').post( (request,response) => {
    const username = request.body.username;
    const description = request.body.description;
    const duration = request.body.duration;
    const date = Date.parse(request.body.date);
    const newExercise = new Exercise (
        {
            username
            ,description
            ,duration
            ,date
        }
    );

    newExercise
        .save()
        .then( () => response.json('Exercise added'))
        .catch( err => response.status(400).json('Error: ' + err))
    ;
});


module.exports = router;