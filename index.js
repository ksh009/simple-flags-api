const express = require("express");
const cors = require("cors");
const flagData = require("./flag-data/cleaned_data.json");

const app = express();
app.use(cors());
const port = 5000;

app.get("/flags", (req, res) => {
  try {
    res.status(200).json(flagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`Flag service is running at http://localhost:${port}`);
});
