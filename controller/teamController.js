const { where } = require('sequelize')
const footballPlayer = require('../models/footballplayer')
const teamModel = require('../models/footballteam')

exports.createTeam = async(req, res)=>{
    try {
        const {teamName, coachName} = req.body
        const newTeam = {
            teamName,
            coachName
        }

        //create the team records in database

        const team = await teamModel.create(newTeam);

        // send a success response

        res.status(201).json({
            message: 'team created successfully',
            team
        })

        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};

exports.getAllTeams = async (req,res)=>{
    try {
        const teams = await teamModel.findAll({include: {model: footballPlayer, as: 'player'}});
        res.status(200).json({
            message: `All teams retrieved successfully and the total is ${teams.length}`,
            teams
        })
        
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
};

exports.getOneTeam = async(req,res)=>{
    try {
        const {id} = req.params
        const team = await teamModel.findByPk(id)
        if(!team){
            res.status(404).json({
                message: 'Team not found'
            })
        }

         res.status(200).json({
            message: `team with ID: ${id} found`,
            team
        })


    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}

exports.updateFootballTeam = async(req,res)=>{

    try {
        const {id} = req.params
        const {teamName, coachName} = req.body

        if(!id){
            return res.status(404).json({
                message: 'Not found'
            })
        }

        const update = {
            teamName,
            coachName
        }
        const updateTeam = await teamModel.update(update, {where: {id}})

        res.status(200).json({
            message: 'team updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

exports.deleteFootballTeam = async(req,res)=>{
    try {
        const {id} = req.params

        if(!id){
            return res.status(404).json({
                message: 'team not found'
            })
        }

        const deleteTeam = await teamModel.destroy({where: {id}})

        res.status(200).json({
            message: 'team deleted successfully'
        })
        
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}