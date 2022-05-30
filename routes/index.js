var express = require('express');
var router = express.Router();
const authorController = require('../controller/authorController')
const publisherController = require('../controller/publisherController')
const bookController = require('../controller/bookController')

router.route('/author').post(authorController.createAuthor)
router.route('/author').put(authorController.editAuthor)

module.exports = router;