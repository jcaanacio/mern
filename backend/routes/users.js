const router = require('express').Router();
const User = require('../models/user.model');
const Response = require('../controllers/response');
const _ = require('lodash');
router.route('/').get((request,response) => {
    User.find()
        .then(users => response.json(new Response(true,users).toJson()))
        .catch(err => response.status(400).json('Error: ' + err))
    ;
});

router.route('/:id').get((request,response) => {
    // return new Response (true,request.body.id);
    User.findById(request.params.id)
        .then(user => {
            const res = _.isNull(user) ? new Response(false,{}).toJson() : new Response(true,user).toJson() ;
            response.status(200).json(res);
        })
        .catch(err => response.status(400).json('Error: ' + err))
    ;
});

router.route('/:id').delete((request,response) => {
    // return new Response (true,request.body.id);
    User.findByIdAndDelete(request.params.id)
        .then(user => response.json(new Response(true,user).toJson()))
        .catch(err => response.status(400).json('Error: ' + err))
    ;
});

router.route('/add').post( (request, response ) => {
    const username = request.body.username;
    const newUser = new User({username});
    newUser
        .save()
        .then( () => response.json(new Response(true,newUser).toJson()))
        .catch( err => response.status(400).json('Error: ' + err))
    ;
});

router.route('/:id').delete((request,response) => {
    User.findByIdAndDelete(request.body.id)
        .then(users => response.json(new Response(true,users).toJson()))
        .catch(err => response.status(400).json('Error: ' + err))
    ;
});


module.exports = router;