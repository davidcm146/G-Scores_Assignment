const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/api");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const corsOptions = {
    origin: function (origin, callback) {
      const allowedOrigins = [process.env.FRONTEND_URL];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };

app.use(cors(corsOptions));

app.use("/api", router);

app.listen(3000, () => console.log("Server running on port 3000"));
