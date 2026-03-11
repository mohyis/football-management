const playerModel = require('../models/footballplayer');
const FootballTeam = require('../models/footballteam');

exports.createPlayer = async (req,res)=>{
    try {
        const {teamId, playerName, age, position} = req.body;
        const playerData = {
            teamId, playerName, age, position
        }

        const player = await playerModel.create(playerData)

        res.status(201).json({
            message: 'Player created successfully',
            player
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

exports.getAllPlayer = async(req,res)=>{
    try {
        const players = await playerModel.findAll({
            include: {model: FootballTeam, as: "team"}
        });
        res.status(200).json({
            message: `All Players found and the total is ${players.length}`,
            players
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getOnePlayer = async(req,res)=>{
    try {
        const {id} = req.params
        const player = await playerModel.findByPk(id, 
            {include: {model: FootballTeam, as: 'team'}}
        )

        if(!player){
            return res.status(404).json({
                message: 'player not found'
            })
        }

        res.status(200).json({
            message: `player with ID: ${id} found`,
            player
        })
        
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}