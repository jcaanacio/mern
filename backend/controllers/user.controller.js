const _ = require('lodash');

class UserController {
    constructor (userModel, response) {
        this._model = userModel;
        this._response = response;
    }


    fetchAll = (request, response) => {
        this._model.find()
            .then(users => {
                const data = _.isNull(users) ? "No Record(s) Found" : users;
                response.json(new this._response(true, data).toJson())
            })
            .catch(err => {
                response.status(400).json(new this._response(false,"Error: " + err).toJson())
            })
    }

    fetchById = (request,response) => {
        this._model.findById(request.params.id)
            .then(user => {
                const data = _.isNull(user) ? "No Record(s) Found" : user;
                response.json(new this._response(true, data).toJson())
            })
            .catch(err => {
                response.status(400).json(new this._response(false, "Error: " + err).toJson())
            })
    }

    updateById = (request, response) => {
        this._model.findByIdAndUpdate(request.params.id,request.body, {new:true})
            .then(user => {
                const data = _.isNull(user) ? "No Record(s) found" : user;
                response.json(new this._response(true, data).toJson())
            })
            .catch(err => {
                response.status(400).json(new this._response(false, "Error:" + err ).toJson())
            })
    }

    deleteById = (request, response) => {
        this._model.findByIdAndDelete(request.params.id)
            .then(user => {
                const data = _.isNull(user) ? "No Record(s) found to delete" : user;
                response.json(new this._response(true, data).toJson())
            })
            .catch(err => {
                response.status(400).json(new this._response(false,"Error: " + err))
            })
    }


    add = (request, response) => {
        const username = request.body.username;
        const newUser = new this._model({username});
        newUser
            .save()
            .then(() => response.json(new this._response(true,newUser).toJson()))
            .catch( err => response.status(400).json(new this._response(false,'Error: ' + err).toJson()))
        ;
    }
}

module.exports = UserController;