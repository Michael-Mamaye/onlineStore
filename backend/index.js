const express= require('express');
const PORT=process.env.PORT||5000;
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/miki/api',require('./routes/api/memberlist'))



app.listen(PORT,console.log(`server is running at port ${PORT}`))