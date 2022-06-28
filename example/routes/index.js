const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.sendFile("success")
    const result = req.body;
    console.log(result)
})

router.post('/', (req, res) =>{
    res.sendFile("success")
    const result = req.body;
    console.log(result)
})



module.exports = router;