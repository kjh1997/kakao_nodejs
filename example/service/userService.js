const express = require('express')
const User = require('../models/user')
class UserService{
    async createUser(req){
        try{
            console.log("test", req.body)
            const user = await User.create({
                name :req.body.name,
                age :req.body.age,
                married :req.body.married
            })
            return user
        } catch (err) {
            console.error(err)
            next(err)
        }
    }
}

module.exports = UserService