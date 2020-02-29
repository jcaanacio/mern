const Exercise = require('../models/exercise.model');
const Response = require('../controllers/response');
const _ = require('lodash');


exports.fetchAll = (request, response) => {
    Exercise.find()
        .then(exercises => {
            const data = _.isNull(exercises) ? "No Record(s) Found" : exercises;
            response.json(new Response(true,data).toJson())
        })
        .catch(err => response.status(400).json(new Response(true, "Error:" + err)))
    ;
    
};

exports.fetchById = (request, response) => {
    Exercise.findById(request.params.id)
        .then(exercise => {
            const data = _.isNull(exercise) ? "No Record(s) Found" : exercise;
            response.json(new Response(true,data).toJson())
        })
        .catch(err => response.status(400).json(new Response(true, "Error:" + err)))
};

exports.add = (request, response) => {
    const username = request.body.username;
    const description = request.body.description;
    const duration = request.body.duration;
    const date = Date.parse(request.body.date);
    const exercise = new Exercise ({
        username,
        description,
        duration,
        date
    });

    exercise.save()
        .then( exercise => response.json(new Response(true,exercise).toJson()))
        .catch(err => response.json(new Response(false, "Error: " + err)))
};

exports.deleteById =  (request, response) => {
    Exercise.findByIdAndDelete(request.params.id)
        .then(exercise => {
            const data = _.isNull(exercise) ? "No Record(s) Found to delete" : exercise;
            response.json(new Response(true,data).toJson())
        })
        .catch(err => response.json(new Response(false,"Error: " + err)))
    ;
};

exports.updateById = (request, response) => {
    Exercise.findByIdAndUpdate(request.params.id, request.body, {new: true})
        .then(exercise => {
            const data = _.isNull(exercise) ? "No record(s) found to update" : exercise;
            response.json(new Response(true,data).toJson())
        })
        .catch(err => response.status(400).json(new Response(false,"Error: " + err)))
    ;
};