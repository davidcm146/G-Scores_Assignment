const express = require("express");
const ScoreController = require("../controllers/scoreController");

const router = express.Router();

router.get("/scores/:registration_no", ScoreController.getScores)
      .get("/report", ScoreController.reportScore)
      .get("/top10", ScoreController.getTop10)

module.exports = router;
