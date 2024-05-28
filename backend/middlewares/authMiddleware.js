import jwt from 'jsonwebtoken';

function verifyToken(req, res, next) {
    // Get the token from the 'Authorization' header
    const token = req.header('Authorization');

    // Check if the token is not provided
    if (!token) {
        return res.status(401).json({ error: 'Access denied' });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the user ID from the token to the request object
        req.userId = decoded.userId;

        // Call next to pass control to the next middleware
        next();
    } catch (error) {
        // If token verification fails, return an error response
        res.status(400).json({ error: 'Invalid token' });
    }
}

export default verifyToken;