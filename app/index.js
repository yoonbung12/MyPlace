const express = require('express');
const app = express();
const PORT = 8000;
const session = require('express-session');

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 세션 설정 추가
app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
    secure: true, // https에서만 동작하도록함.
  })
);

const { mainRouter, userRouter, galleryRouter } = require('./routes');
// 메인페이지 경로
app.use('/main', mainRouter);

// 회원 관련 경로
app.use('/user', userRouter);

// 갤러리 관련 경로
app.use('/gallery', galleryRouter);

// 지도 경로(임시)
app.get('/map', (req, res) => {
  res.render('map');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
