const express = require('express');
const { createTeam, getAllTeams, getOneTeam } = require('../controller/teamController');
const router = express.Router();


router.post('/createTeam', createTeam)
router.get('/teams', getAllTeams)
router.get('/team/:id', getOneTeam)

module.exports = router