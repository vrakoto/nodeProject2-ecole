const {Schema, model} = require('mongoose')

const current = new Date()
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(), current.getSeconds(), current.getMilliseconds()));

const Book = new Schema({
    title: String,
    description: String,
    publication_date: {
        type: Date,
        default: timeStamp
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'Publisher',
        required: true
    }
});

const BookModel = model('Book', Book);

module.exports = BookModel