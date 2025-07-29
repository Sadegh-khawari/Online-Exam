const express = require('express');
const router = express.Router();
const examsController = require('../controller/Controller_exams');


router.get('/', examsController.getAllExams);

router.get('/:id', examsController.getExamById);

module.exports = router;
