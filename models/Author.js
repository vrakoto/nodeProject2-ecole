const {Schema, model} = require('mongoose')

const Author = new Schema({
    firstname: String,
    lastname: String,
    age: Number
});

const AuthorModel = model('Author', Author);

module.exports = AuthorModel