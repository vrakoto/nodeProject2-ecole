const PublisherModel = require('../models/Publisher')
const dayjs = require('dayjs')
dayjs().format()

module.exports = {
    createPublisher: (req, res) => {
        const {name} = req.body
        // const creation_date = new Date().toLocaleDateString()

        const author = new PublisherModel({name})
        author.save((err, user) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: err,
                });
            } else {
                return res.status(201).json({
                    status: 201,
                    message: "Publisher created successfully !",
                    user: user
                })
            }
        })
    },

    editPublisher: (req, res) => {
        const {_id, name} = req.body

        PublisherModel.findByIdAndUpdate(_id,
            {
                name
            },
        (err, author) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    general: "Internal error while updating the publisher",
                    description: err
                })
            }
            return res.status(201).json({
                status: 201,
                general: "Publisher updated ! (see your db's collection)",
                author
            })
        })
    },

    deletePublisher: (req, res) => {
        const {_id} = req.body

        PublisherModel.findByIdAndDelete(_id, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    general: "Internal error while deleting the publisher",
                    description: err
                })
            }
            return res.status(201).json({
                status: 201,
                general: "Publisher deleted successfully !",
                result
            })
        })
    }
}