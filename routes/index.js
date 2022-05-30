var express = require('express');
var router = express.Router();
const authorController = require('../controller/authorController')
const publisherController = require('../controller/publisherController')
const bookController = require('../controller/bookController')

router.route('/author').post(authorController.createAuthor)
router.route('/author').put(authorController.editAuthor)
router.route('/author').delete(authorController.deleteAuthor)

router.route('/publisher').post(publisherController.createPublisher)
router.route('/publisher').put(publisherController.editPublisher)
router.route('/publisher').delete(publisherController.deletePublisher)

router.route('/book').post(bookController.createBook)
router.route('/book').put(bookController.editBook)
router.route('/book').delete(bookController.deleteBook)

module.exports = router;