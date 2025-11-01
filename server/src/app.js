const express = require("express");
const bodyParser = require("body-parser");
const postsRouter = require("./routes/posts");
const { authMiddleware } = require("./utils/auth");

const app = express();
app.use(bodyParser.json());

// attach auth middleware (will set req.userId when Authorization header present)
app.use(authMiddleware);
app.use("/api/posts", postsRouter);

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
