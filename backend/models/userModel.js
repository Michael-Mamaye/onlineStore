const mongoose=require('mongoose')
const uuid=require('uuid')

const storeSchema=new mongoose.Schema({
    id:{
        type:String,
        default:uuid.v4(),
        unique:true
    },
    name:{
        type:String,
        required:[true,'what kind of man are you with out a name']
    },
    age:{
        type:Number,
        require:[true, 'you should have an age'],
        default:null
    },
    title:{
        type:String,
        default:'peasant'
    }
})

const User=mongoose.model('User',storeSchema)

module.exports=User;