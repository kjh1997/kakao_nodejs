const express = require('express');
const { model } = require('mongoose');
const Board = require('../models/board')
const User = require('../models/user')
const router = express.Router();

router.route('/')
.get(async (req,res,next) =>{
    try{
        const boards = await Board.findAll({})
        res.json(boards)
    } catch (err) {
        console.log(err)
        next(err);
    }
})

router.route('/create')
.post(async (req,res,next)=>{
    try{
        const user = await User.findOne({
            name : req.body.author
        })
        console.log("user", user.id)
        const boards = await Board.create({
            title : req.body.title,
            context:req.body.context,
            author: req.body.author,
            boarder: user.id
        })
        res.json(boards)
    } catch (err){
        console.log(err)
        next(err);
    }
})



module.exports=router