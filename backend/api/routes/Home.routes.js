const { Router } = require("express");
const fs = require("fs");

const router = Router();

const FILE_RECORDS = "registros.json";

let registros = [];

if (fs.existsSync(FILE_RECORDS)) {
  const fileContents = fs.readFileSync(FILE_RECORDS, "utf8");
  registros = JSON.parse(fileContents);
}

router.post("/", (req, res) => {
  const time = req.body.time;

  const record = {
    time: time,
    date: new Date(),
  };

  registros.push(record);

  fs.writeFile(FILE_RECORDS, JSON.stringify(registros), () => {
    try {
      res.status(201).send("Record successfully saved");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error saving record");
    }
  });
});

module.exports = router;