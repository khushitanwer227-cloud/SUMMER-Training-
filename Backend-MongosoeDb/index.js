const express = require('express');

const {logReqRes} = require("./middlewares/index") 
const {connectMongoDb} = require('./connection')
const userRouter = require('./routes/user')

const app = express();
const PORT = 2000;

//connection
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app')
.then(()=> console.log('mongodb connected!'));

//Middleware-Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));


//Routes

app.use("/api/users",userRouter)

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))







