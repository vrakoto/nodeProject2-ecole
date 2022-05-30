const BookModel = require('../models/Book')

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
            } else {
                return res.status(201).json({
                    status: 201,
                    message: "Book created successfully !",
                    user: user
                })
            }
        })
    },

    editBook: (req, res) => {
        const {_id, firstname, lastname, age} = req.body

        AuthorModel.findByIdAndUpdate(_id,
            {
                firstname,
                lastname,
                age
            },
        (err, author) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    general: "Internal error while updating the author",
                    description: err
                })
            }
            return res.status(201).json({
                status: 201,
                general: "Author updated ! (see your db's collection)",
                author
            })
        })
    },

    deleteBook: (req, res) => {
        const {_id} = req.body

        AuthorModel.findByIdAndDelete(_id, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    general: "Internal error while deleting the author",
                    description: err
                })
            }
            return res.status(201).json({
                status: 201,
                general: "Author deleted successfully !",
                result
            })
        })
    }
}