const {Schema, model} = require('mongoose')

const Publisher = new Schema({
    name: String
}, {timestamp: true});

const PublisherModel = model('Publisher', Publisher)

module.exports = PublisherModel