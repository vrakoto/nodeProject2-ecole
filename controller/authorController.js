const AuthorModel = require('../models/Author')

module.exports = {
    createAuthor: (req, res) => {
        const Author = new AuthorModel({
            firstname: "John",
            lastname: "Doe",
            age: 30
        })

        Author.save((err, user) => {
            if (err) {
                res.status(500).json({
                    status: 500,
                    message: err,
                });
            } else {
                res.status(201).json({
                    status: 201,
                    message: "Author created successfully !",
                    user: user
                })
            }
        })
    },

    editAuthor: (req, res) => {
        const {idAuthor, firstname, lastname, age} = req.body

        console.log(idAuthor, firstname);

        AuthorModel.findByIdAndUpdate(idAuthor,
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
                general: "Author updated !",
                author
            })
        })
    },

    deleteAuthor: (req, res) => {
        const idArticle = req.params.id

        ArticleModel.findByIdAndDelete(idArticle, (err, result) => {
            if (err) {
                req.session.toast = {
                    status: 500,
                    general: "Internal error suppression de l'article",
                    description: err
                }
            }

            req.session.toast = "Article supprimé."
            UserModel.findById(result.author, (err, user) => {
                if (!user) {
                    return res.redirect('/')
                } else {
                    return res.redirect(`/user/${result.author}`)
                }
            })
        })
    }
}