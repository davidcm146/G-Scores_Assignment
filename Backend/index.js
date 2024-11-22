const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/api");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

app.listen(3000, () => console.log("Server running on port 3000"));
