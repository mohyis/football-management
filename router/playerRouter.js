const router = require('express').Router()
const {createPlayer, getAllPlayer, getOnePlayer} = require('../controller/playerController')

router.post('/player', createPlayer)
router.get('/players', getAllPlayer)
router.get('/player/:id', getOnePlayer)

module.exports = router