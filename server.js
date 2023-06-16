const app=require('./app')

require('dotenv').config({path:'config/.env'})

const {connect}=require('./config/db')

connect()

PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log("Server is listen at =>",PORT);
})