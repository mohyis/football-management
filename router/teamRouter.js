const express = require('express');
const { createTeam, getAllTeams, getOneTeam, updateFootballTeam, deleteFootballTeam } = require('../controller/teamController');
const router = express.Router();


router.post('/team', createTeam)
router.get('/teams', getAllTeams)
router.get('/team/:id', getOneTeam)
router.put('/team/:id', updateFootballTeam)
router.delete('/team/:id', deleteFootballTeam)

module.exports = router