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
    price:{
        type:Number,
        required:[true,'the price must be known for a product'],
    },
    shortDescription:{
        type:String,
        required:[true,'you should have a description about your product']
    },
    quantity:{
        type:Number,
        required:[true,'the quantity of the product should have to be known'],
        default:5
    },
    detailDescription:{
        type:String,
        default:null
    },
    deliveryLocation:{
        type:String,
        default:null
    },
	storage:{
        type:Number,
        default:null
    },
	type:{
        type:String,
        default:null
    },
   
})


const Product=mongoose.model('Product',productSchema);

module.exports=Product;

