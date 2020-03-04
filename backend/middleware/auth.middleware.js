const _ = require('lodash');
const Response = require('../controllers/response');
const jwt = require('jsonwebtoken');

Auth = (request, response, next) => {
    const token = request.header("x-auth-token");

    if ( _.isUndefined(token) ) {
        return response.status(403).json(new Response(false,"Forbidden Request").toJson());
    }

    jwt.verify(token, process.env.SECRET_KEY,(err) => {
        if (err) {
            return response.status(401).json(new Response(false,"Unauthorized Request").toJson());
        }
    });

    next();
}

module.exports = Auth;