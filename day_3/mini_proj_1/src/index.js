const express = require('express')
const cookieParser = require('cookie-parser')

const { signIn, welcome, refresh } = require('./handler/handlers') ;

const port = 3000 ;

const app = express()
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/welcome', welcome)

app.post('/signin', signIn)
app.post('/refresh', refresh)

app.listen(port);
console.log('port: ', port) ;
