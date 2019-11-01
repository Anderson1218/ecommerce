const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const collectionsRoutes = require("./routes/collections");
/* Loads all variables from .env file to "process.env" */
require("dotenv").config();

app
  .prepare()
  .then(() => {
    const server = express();

    //express.json() is a built-in body parser now, don't need to install body-parser
    server.use(express.json());

    server.use("/api/collections", collectionsRoutes);

    /* give all Next.js's requests to Next.js server */
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
