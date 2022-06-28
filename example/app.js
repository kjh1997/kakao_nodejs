// ----- 모듈 로딩
const express = require('express')
const routes = express.Router()
const morgan = require('morgan')
const session = require('express-session') 
const dotenv = require('dotenv')
const path = require('path')
// 회원가입을 위한 설정
const passport = require('passport')
const passportConfig = require('./config/passport-config')
// passportConfig()
// --- 시퀄라이저 설정
const { sequelize, User } = require('./models')
sequelize.sync({ force: false})
    .then(()=> {
        console.log('db connect!!')
    })
    .catch((err) =>{
        console.log(err)
    })


// -- express 설정
const app = express()
app.use(express.static(path.join(__dirname,'public')))
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure:false
    },
    name:'session-cookie'
}))
app.set('port', 5000)
app.set('view engine', 'html')
app.use(morgan('dev')) 
app.use(express.json()) // json 데이터 파싱해줌 req.body

// ------ 라우터 로딩
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const boardRouter = require('./routes/board')
app.use(express.urlencoded({extended: false })) // 쿼리스트링 사용
app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/board', boardRouter)

// 미들웨어


app.listen(app.get('port'),()=>{
    console.log("server start")
})