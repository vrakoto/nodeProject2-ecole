var express = require('express');
const { default: mongoose } = require('mongoose');

var indexRouter = require('./routes/index');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

mongoose.connect(`mongodb+srv://${id}:${mdp}@cluster0.ftrta.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch (err => {
    console.log(err);
})

module.exports = app;