const Product =require('./../models/productModel')

exports.getAllProducts= async (req,res)=>{
    try{

        const queryObj= {...req.query}
        const excludeFields=['page','sort','fields','limit']
        excludeFields.forEach(el=> delete queryObj[el]);
      
        //advanced filtering

        let queryStr=JSON.stringify(queryObj);
        queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`);
      
        //the above method adds $ sign infront of the matched item

        let manipulation= await Product.find(JSON.parse(queryStr))
        const product =await manipulation;


        res.status(200).json({result:product.length,
            product})

    }
    catch(err){ 
        res.status(400).json(err)
    }
}
exports.createProduct=async (req,res)=>{
    try{
        const newProduct= await Product.create(req.body)
        res.status(200).json(newProduct)
    }
    catch(err){
        res.status(400).json(err)
    }
}
exports.getSingleProduct=async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }
    catch(err){
        res.status(400).json(err)
    }
}
exports.updateProduct=async (req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(200).json({mdg:"can't update the element"})
    }
}

exports.deleteProduct=async(req,res)=>{

    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"successfully deleted"})
    }
    catch(err){
        res.status(400).json({errd:"can't delete the product error"})
    }
}