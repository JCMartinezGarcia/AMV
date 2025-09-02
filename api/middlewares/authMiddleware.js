const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "No token provided" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");

        req.user = decoded; // Attach user info to request
        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = authMiddleware;
