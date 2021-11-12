import express from 'express';
const BookController = require('./../controllers/book.controller')
const router = express.Router();

router.get('/', BookController.get)

module.exports = router;