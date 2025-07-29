const User = require('../models/model_User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { first_name, last_name, password, email, role } = req.body;
    if (!first_name || !last_name || !password || !email || !role) {
        return res.status(400).json({ message: 'first_name, last_name, password, email, and role are required.' });
    }
    try {
        const existingUser = await User.findByEmail(email);
        if (existingUser.length > 0) {
            return res.status(409).json({ message: 'Email already exists.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create(first_name, last_name, hashedPassword, email, role);
        return res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        return res.status(500).json({ message: 'Database error.', error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    try {
        const users = await User.findByEmail(email);
        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role, first_name: user.first_name, last_name: user.last_name },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '1h' }
        );
        return res.status(200).json({ message: 'Login successful.', token });
    } catch (err) {
        return res.status(500).json({ message: 'Database error.', error: err.message });
    }
};

module.exports = {
    register,
    login
}
