const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/api");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};


app.use(cors(corsOptions));

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port 3000"));
