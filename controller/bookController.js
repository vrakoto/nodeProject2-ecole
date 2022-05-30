const BookModel = require('../models/Book')
const dayjs = require('dayjs')
const now = dayjs().format('DD-MM-YYYY à HH:MM:ss')

module.exports = {
    createBook: (req, res) => {
        const {title, description, author, publisher} = req.body

        const book = new BookModel({title, description, author, publisher})
        book.save((err, user) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    general: "Le(s) id de author et/ou publisher ne sont/n'est pas correct",
                    message: err,
                });
            }

            return res.status(201).json({
                status: 201,
                message: "Book created successfully !",
                user: user
            })
        })
    },

    editBook: (req, res) => {
        const {_id, title, description, author, publisher} = req.body

        BookModel.findByIdAndUpdate(_id,
            {
                title,
                description,
                author,
                publisher
            },
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    general: "Internal error while updating the book",
                    description: err
                })
            } else if (!result) {
                return res.status(404).json({
                    status: 404,
                    message: "The book doesn't exist"
                })
            }

            return res.status(201).json({
                status: 201,
                general: "Book updated ! (see your db's collection)",
                result
            })
        })
    },

    deleteBook: (req, res) => {
        const {_id} = req.body

        BookModel.findByIdAndDelete(_id, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    general: "Internal error while deleting the book",
                    description: err
                })
            } else if (!result) {
                return res.status(404).json({
                    status: 404,
                    general: "The book doesn't exist"
                })
            }

            return res.status(201).json({
                status: 201,
                general: "Book deleted successfully !",
                result
            })
        })
    },

    getBook: (req, res) => {
        const {_id} = req.body

        BookModel.findById(_id, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    general: "Internal error while searching for the book",
                    description: err
                })
            } else if (!result) {
                return res.status(404).json({
                    status: 404,
                    message: "The book doesn't exist"
                })
            }
            
            return res.status(201).json({
                status: 201,
                general: "Book found successfully !",
                result: {
                    title: result.title,
                    description: result.description,
                    publication_date: now,
                    author: result.author,
                    publisher: result.publisher
                }
            })
        })
    }
}