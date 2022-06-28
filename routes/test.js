const express = require('express')
const router = express.Router();


router.get('/',(req, res)=>{
    res.send('test')
    console.log(req.param('name'))
})
router.get('/auth',(req, res)=>{
    res.render('test')
})

module.exports = router;