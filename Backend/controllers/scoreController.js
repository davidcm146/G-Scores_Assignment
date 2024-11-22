const { sequelize, GScore } = require('../models');
const { Op } = require('sequelize');

class ScoreController {
    static async getScores(req, res) {
        const { registration_no } = req.params;
        try {
            const score = await GScore.findOne({ where: { registration_no } });
            if (!score) {
                return res.status(404).json({ message: "Registration number not found" });
            }
            res.json(score);
        } catch (err) {
            res.status(500).json({ message: "An error occurred while fetching the data." });
        }
    }
    

    static async reportScore(req, res) {
        try {
            const report = {};
            const levels = [
                { name: ">= 8", condition: { [Op.gte]: 8 } },
                { name: "6 - 8", condition: { [Op.between]: [6, 8] } },
                { name: "4 - 6", condition: { [Op.between]: [4, 6] } },
                { name: "< 4", condition: { [Op.lt]: 4 } },
            ]

            for (const level of levels) {
                const count = await GScore.count({
                    where: {
                        [Op.or]: [
                            { math: level.condition },
                            { literature: level.condition },
                            { foreign_language: level.condition },
                            { physics: level.condition },
                            { chemistry: level.condition },
                            { biology: level.condition },
                            { history: level.condition },
                            { geography: level.condition },
                            { civic_education: level.condition },
                        ],
                    },
                });
                report[level.name] = count;
            }
            res.status(200).json({ message: "Report created", data: report });
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async getTop10(req, res) {
        try {
            // Find top 10 students based on total score (Math + Physics + Chemistry)
            const topStudents = await GScore.findAll({
                where: {
                    math: { [Op.ne]: null }, 
                    physics: { [Op.ne]: null },
                    chemistry: { [Op.ne]: null },
                },
                order: [
                    [sequelize.literal('math + physics + chemistry'), 'DESC'],
                ],
                limit: 10, // Get the top 10 students with the highest total score
            });
    
            if (topStudents.length === 0) {
                return res.status(404).json({ message: "No students found" });
            }
    
            res.status(200).json(topStudents);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    

}

module.exports = ScoreController;