const express = require("express");
const app = express();
const port = 3000;
const sqlite3 = require("sqlite3").verbose();
app.use(express.json());

const db = new sqlite3.Database("./db.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
});

app.get("/", (req, res) => {
  db.all("SELECT * FROM Document", (err, rows) => {
    if (err) {
      res.status(400).end();
    }
    res.send(rows);
  });
});

app.put("/", (req, res) => {
  db.exec(
    `UPDATE Document SET Comment = \'${req.body.comment}\', Grade = ${req.body.grade} WHERE DocumentId = ${req.body.documentId}`,
    (err) => {
      if (err) {
        res.status(400).end();
      }
    }
  );
  res.status(200).send();
});

app.listen(port, () =>
  console.log(`Express app running on http://localhost:${port}`)
);
