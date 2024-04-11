const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: `Token not provided` });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_WORD);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
