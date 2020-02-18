const router = require('express').Router();


router.route('/').get((request,response) => {
    response.status(200).json(
        {
            success: true,
            body: {
                message: "welcome!"
            }
        }
    );
});


module.exports = router;