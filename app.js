const express = require("express");
const cors = require("cors");
const routes = require("./api/countries/routes.js");

const app = express();
const port = 5000;

// const corsOptions = {
//   origin: ["https://restful-countries-ksh.netlify.app", "http://localhost:3000"],
// };

// app.use(cors(corsOptions));
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Flag service is running at http://localhost:${port}`);
});

module.exports = app;
