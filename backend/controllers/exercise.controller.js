const _ = require('lodash');

class ExerciseController {

    constructor (exerciseModel, response) {
        this._response = response;
        this._model = exerciseModel;
    }

    fetchAll = (request, response ) => {
        this._model.find()
            .then(exercises => {
                const data = _.isNull(exercises) ? "No Record(s) Found" : exercises;
                response.json(new this._response(true,data).toJson())
            })
            .catch(err => response.status(400).json(new this._response(true, "Error:" + err)))
        ;
    }

    fetchById = (request, response) => {
        this._model.findById(request.params.id)
            .then(exercise => {
                const data = _.isNull(exercise) ? "No Record(s) found" : exercise;
                response.json(new this._response(true,data).toJson())
            })
            .catch( err => {
                response.status(400).json(new this._response(false,"Error: " + err))
            })
    }

    add = (request, response) => {
        const username = request.body.username;
        const description = request.body.description;
        const duration = request.body.duration;
        const date = Date.parse(request.body.date);

        const exercise = new this._model({
            username,
            description,
            duration,
            date
        })

        exercise.save()
            .then(exercise => {
                response.json(new this._response(true,exercise).toJson())
            })
            .catch(err => {
                response.status(400).json(new this._response(false,"Error: " + err))
            })

    }

    updateById = (request, response) => {
        this._model.findByIdAndUpdate(request.params.id,request.body, {new: true})
            .then(exercise => {
                const data = _.isNull(exercise) ? "No Record(s) found to update" : exercise;
                response.json(new this._response(true,data).toJson())
            })
            .catch(err => {
                response.json(new this._response(false, "Error: " + err))
            })
    }

    deleteById = (request, response) => {
        this._model.findByIdAndDelete(request.params.id)
            .then(exercise => {
                const data = _.isNull(exercise) ? "No Record(s) found to delete" : exercise;
                response.json(new this._response(true,data).toJson())
            })
            .catch(err => {
                response.status(400).json(new this._response(false,"Error: " + err))
            })
    }
}

module.exports = ExerciseController;