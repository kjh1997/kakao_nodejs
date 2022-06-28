const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.route('/')
.get(async (req, res, next) => {
    try{
        const user = await User.findAll()
        res.json(user);
    } catch (err){
        console.error(err)
        next(err)
    }
})
router
.post('/join', async (req, res, next)=>{
    // console.log(req.body)
    try{
        const user = await User.create({
            name :req.body.name,
            age :req.body.age,
            married :req.body.married
        })
        res.status(201).json(user)
    } catch (err) {
        console.error(err)
        next(err)
    }
})

module.exports = router