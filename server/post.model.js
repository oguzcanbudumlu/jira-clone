const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaDefinition = {
    title: {
        type: String
    },
    body: {
        type: String
    }
}

const schemaOptions = {
    collection: 'posts' 
}

let Post = new Schema(
    schemaDefinition, 
    schemaOptions
);

module.exports = mongoose.model('Post', Post);