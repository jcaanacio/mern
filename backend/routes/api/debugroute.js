const router = require('express').Router();
const Auth = require('../../middleware/auth.middleware');
const jwt = require('jsonwebtoken');


router.post('/', (request, response) => {
    // Mock user
    const user = {
        id:1,
        username: 'brad2'
    };

    jwt.sign({user}, process.env.SECRET_KEY, (err, token) => {
        response.json({
            token
        });
    });
});

router.get('/', Auth, (request,response) => {
    response.status(200).json(
        {
            success: true,
            body: {
                message: "Welcome!"
            }
        }
    );
});


module.exports = router;