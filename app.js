const express = require("express");
const cors = require("cors");
const flagData = require("./flag_data/cleaned_data.json");

const app = express();
const port = 5000;

const corsOptions = {
  origin: ["https://restful-countries-ksh.netlify.app", "http://localhost:3000"],
};

// app.use(cors(corsOptions));
app.use(cors());

app.get("/countries", (req, res) => {
  try {
    res.status(200).json(flagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/country/:name", (req, res) => {
  try {
    const countryName = req.params.name;
    const country = flagData.find(
      (country) => country.common_name === countryName
    );
    if (country) {
      res.status(200).json(country);
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`Flag service is running at http://localhost:${port}`);
});