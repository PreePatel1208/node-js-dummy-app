const express=require('express')

const app=express()

const bodyParser=require('body-parser')

const userRouter=require('./routes/userRoute')

const authRouter=require('./routes/authRoute')

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use('/',authRouter)
app.use('/user',userRouter)

module.exports=app