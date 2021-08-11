const express= require('express');
const PORT=process.env.PORT||5000;
const app=express();

const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/onlineStore',
           { useNewUrlParser:true,
             useUnifiedTopology:true})

const db=mongoose.connection;
db.once('open',()=>{console.log("successfully connected")})

app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.listen(PORT,console.log(`server is running at port ${PORT}`))