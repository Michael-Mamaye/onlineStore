const mongoose= require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name of the product is required'],
    },
    brand:{
        type:String,
        default:'unknown'
    },
    item:Number,
    quantity:{
        type:Number,
        required:[true,'you should have to know how many products you have'],
        default:10
    },
    description:{
        type:String,
        default:null
    },
    detailDescription:{
        type:String,
        default:null
    }
})


const Product=mongoose.model('Product',productSchema);

module.exports=Product;

