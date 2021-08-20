const express= require('express');
const PORT=process.env.PORT||5000;
const app=express();
const userRouter=require('./routes/userRoutes')
const productRouter=require('./routes/productRoutes')
const mongoose=require('mongoose');

const cors=require('cors');

app.use(cors());
mongoose.connect('mongodb://localhost:27017/onlineStore',
           { useNewUrlParser:true,
             useUnifiedTopology:true,
             useCreateIndex:true,
             useFindAndModify:true
            })

const db=mongoose.connection;
db.once('open',()=>{console.log("successfully connected")})

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use('/users/create',userRouter);
app.use('/products/create',productRouter);


app.listen(PORT,console.log(`server is running at port ${PORT}`))