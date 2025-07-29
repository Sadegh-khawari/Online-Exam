
const db = require('../utils/db');

const Exam = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM exams');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM exams WHERE id = ?', [id]);
    return rows[0];
  }
};

module.exports = Exam;
