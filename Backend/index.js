const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/api");

const app = express();
app.use(bodyParser.json());

// Configure CORS for the specific domain
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use("/api", router);

app.listen(3000, () => console.log("Server running on port 3000"));
