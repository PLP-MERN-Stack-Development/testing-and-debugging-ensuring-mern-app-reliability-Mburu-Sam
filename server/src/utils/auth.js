const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "test-secret";

function generateToken(user) {
  const payload = { id: user._id, username: user.username };
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

// Middleware to decode token for tests
function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return next();
  try {
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
  } catch (err) {
    // ignore for tests
  }
  next();
}

module.exports = { generateToken, authMiddleware };
