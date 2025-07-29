const Exam = require('../models/model_Exam');

const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.getAll();
    res.send(exams);
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
};

const getExamById = async (req, res) => {
  try {
    const result = await Exam.getById(req.params.id);
    if (!result) return res.status(404).json({ message: 'Exam not found' });
    res.send(result);
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
};

module.exports = {
    getAllExams ,
    getExamById
}
