var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require ('jsonwebtoken')
const privateKey = "testing123";
require('dotenv').config();

var indexRouter = require('./routes/index');
const UserRouter = require('./routes/User');
const EventRouter = require('./routes/Event')
var app = express();
mongodConnect = process.env.DB_LOCAL;
mongoose.connect(mongodConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use (cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', UserRouter);
app.use('/event',validateUser , EventRouter)

function validateUser(req, res, next) {
    jwt.verify(req.headers["access-token"], privateKey, (err, decoded) => {
      if (err) {
        res.json(err);
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  }
module.exports = app;
