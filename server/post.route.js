// crud operations
const express = require('express');
const postRoutes = express.Router();

let Post = require('./post.model');

postRoutes.add('/add').post(function (req, res) {
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


