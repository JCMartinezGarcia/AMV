const { User } = require("../models"); // You need a User model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });
        res.status(201).json({ user: { id: user.id, email: user.email } });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid password" });

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET || "secretkey",
            { expiresIn: "1d" }
        );

        res.json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const me = async (req, res) => {
    res.json({ user: req.user });
};

module.exports = { register, login, me };
