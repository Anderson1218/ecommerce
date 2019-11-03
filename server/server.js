const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 80;
const morgan = require("morgan");
const app = next({ dev });
const handle = app.getRequestHandler();
const collectionsRoutes = require("./routes/collectionsRoutes");
const authRoutes = require("./routes/authRoutes");
/* Loads all variables from .env file to "process.env" */
require("dotenv").config();

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};
mongoose
  .connect(process.env.MONGODB_URI, mongooseOptions)
  .then(() => console.log("MongoDB connected"));
mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(morgan("short"));
    server.use(express.json());
    server.use("/api/auth", authRoutes);
    server.use("/api/collections", collectionsRoutes);

    /* give all Next.js's requests to Next.js server */
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
