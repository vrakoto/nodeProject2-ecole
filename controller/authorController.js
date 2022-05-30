const AuthorModel = require('../models/Author')
// const {BookModel} = require('../models/Book')

module.exports = {
    createAuthor: (req, res) => {
        const {firstname, lastname, age} = req.body

        const author = new AuthorModel({firstname, lastname, age})
        author.save((err, user) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: err,
                });
            } else {
                return res.status(201).json({
                    status: 201,
                    message: "Author created successfully !",
                    user: user
                })
            }
        })
    },

    editAuthor: (req, res) => {
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

    deleteAuthor: (req, res) => {
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