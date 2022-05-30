const {Schema, model} = require('mongoose')

const current = new Date()
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(), current.getSeconds(), current.getMilliseconds(), current.getUTCHours()));

const Publisher = new Schema(
{
    name: String,
    creation_date: {
        type: Date,
        default: timeStamp
    }
});

const PublisherModel = model('Publisher', Publisher)

module.exports = PublisherModel