const { Router } = require("express");
const fs = require("fs");

const router = Router();

const FILE_RECORDS = "registros.json";

router.get("/", (_req, res) => {
  fs.readFile(FILE_RECORDS, "utf8", (err, data) => {
    try {
      const records = JSON.parse(data);
      res.status(200).send(records);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error reading file");
    }
  });
});

router.delete("/", (_req, res) => {
  fs.readFile(FILE_RECORDS, () => {
    const newRecord = [];

    fs.writeFile(FILE_RECORDS, JSON.stringify(newRecord), (err) => {
      try {
        res.status(204).send("Records deleted successfully");
      } catch (err) {
        console.error(err);
        res.status(500).send("Error delete file");
      }
    });
  });
});

module.exports = router;
