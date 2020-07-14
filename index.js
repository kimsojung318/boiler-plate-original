const express = require('express') // express 모듈을 가져옴
const app = express()
const port = 5000
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

// bodyParser가 client에서 오는 정보를 서버에서 분석 후 가져올 수 있도록 하기 위해 추가
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('config.mongoURI', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('DAY6'))

app.post('/register', (req, res) => { // 회원가입을 위한 Route
    // 회원가입 시 필요한 정보를 client에서 가져오면 DB에 넣어준다.
    const user = new User(req.body);

    user.save((err, userInfo) => { // MongoDB에서 오는 메소드 / ()안은 콜백함수
        if (err) return res.json({ success: false, err }) // json 형태로 err 메시지와 함께 전달
        return res.status(200).json({ // 전달 성공할 경우
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))