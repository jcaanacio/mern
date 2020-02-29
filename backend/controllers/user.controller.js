const User = require('../models/user.model');
const Response = require('../controllers/response');
const _ = require('lodash');

exports.fetchAll = (request, response) => {
    User.find()
        .then(users => response.json(new Response(true,users).toJson()))
        .catch(err => new Response(true,'Error: ' + err).toJson())
    ;
};

exports.fetchById = (request, response) => {
    User.findById(request.params.id)
        .then(user => {
            const res = _.isNull(user) ? new Response(false,{}).toJson() : new Response(true,user).toJson() ;
            response.status(200).json(res);
        })
        .catch(err => response.status(400).json('Error: ' + err))
    ;
};

exports.add = (request, response) => {
    const username = request.body.username;
    const newUser = new User({username});
    newUser
        .save()
        .then( () => response.json(new Response(true,newUser).toJson()))
        .catch( err => response.status(400).json('Error: ' + err))
    ;
};

exports.updateById = (request, response) => {
    User.findByIdAndUpdate(request.params.id,request.body,{new: true})
        .then(user => {
            const data = _.isNull(user) ? "No record(s) to update" : user;
            response.json(new Response(true, data).toJson());
        })
        .catch(err => response.status(400).json('Error: ' + err))
    ;
};

exports.deleteById = (request, response) => {
    User.findByIdAndDelete(request.body.id)
        .then(user => response.json(new Response(true,user).toJson()))
        .catch(err => response.status(400).json('Error: ' + err))
    ;
};