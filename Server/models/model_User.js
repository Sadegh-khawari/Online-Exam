
// مدل User برای MySQL با استفاده از mysql2/promise
const db = require('../utils/db');
const { v4: uuidv4 } = require('uuid');

const User = {
  create: async (first_name, last_name, password, email, role) => {
    const id = uuidv4();
    const sql = 'INSERT INTO users (id, first_name, last_name, password, email, role, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())';
    const [result] = await db.query(sql, [id, first_name, last_name, password, email, role]);
    return result;
  },
  findByEmail: async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await db.query(sql, [email]);
    return rows;
  }
};

module.exports = User;
