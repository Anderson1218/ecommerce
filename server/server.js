const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const firebase = require("../firebase/firebase-utils");
const firestore = firebase.fireStore;
const convertCollectionsSnapshotToMap =
  firebase.convertCollectionsSnapshotToMap;

/* Loads all variables from .env file to "process.env" */
require("dotenv").config();

app
  .prepare()
  .then(() => {
    const server = express();

    //express.json is a built-in body parser, don't need to install body-parser
    server.use(express.json());

    server.get("/api/collections", async (req, res) => {
      try {
        const collectionRef = firestore.collection("collections");
        const snapshot = await collectionRef.get();
        const collections = convertCollectionsSnapshotToMap(snapshot);
        res.json(collections);
      } catch (error) {
        console.log(error);
      }
    });

    server.get("*", (req, res) => {
      console.log("Next.js handle requests");
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
