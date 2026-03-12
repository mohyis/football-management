const express = require('express');
const { createTeam, getAllTeams, getOneTeam, updateFootballTeam } = require('../controller/teamController');
const router = express.Router();


router.post('/createTeam', createTeam)
router.get('/teams', getAllTeams)
router.get('/team/:id', getOneTeam)
router.put('/updateTeam/:id', updateFootballTeam)

module.exports = router