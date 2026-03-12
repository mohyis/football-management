const router = require('express').Router()
const {createPlayer, getAllPlayer, getOnePlayer, updateFootballPlayer} = require('../controller/playerController')

router.post('/player', createPlayer)
router.get('/players', getAllPlayer)
router.get('/player/:id', getOnePlayer)
router.put('/player/:id', updateFootballPlayer)

module.exports = router