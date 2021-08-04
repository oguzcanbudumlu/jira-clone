// crud operations
const express = require('express');
const router = express.Router();

let Post = require('./post.model');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', function (req, res) {
    res.send('Birds home page')
})

router.post('/add', function (req, res) {
    let post = new Post(req.body);
    post.save()
        .then(() => {
            res.status(200).json(({
                'business' : 'business in added successfully'
            }));
        })
        .catch(() => {
            res.status(400).send("unable to save to database");
        });
});


module.exports = router;