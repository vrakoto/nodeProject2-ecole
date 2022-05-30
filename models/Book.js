const {Schema, model} = require('mongoose')

const Book = new Schema({
    title: String,
    description: String,
    publication_date: Date,
    author: String,
    publisher: String
});

const BookModel = model('Book', Book);

module.exports = BookModel