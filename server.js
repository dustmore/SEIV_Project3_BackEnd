/*
require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");

db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.options('*', cors())

//parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

 //simple route
app.get("/", (req, res) => {
 res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/auth.routes.js")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/course.routes")(app);
require("./app/routes/section.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3014;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
*/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
 

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/course.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3014;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


