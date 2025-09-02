const { registerUserController, loginUserController } = require('../controllers');

const registerUserHandler = async (req, res) => {
    try {
        const user = await registerUserController(req.body);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUserHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await loginUserController(email, password);
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = { registerUserHandler, loginUserHandler };
