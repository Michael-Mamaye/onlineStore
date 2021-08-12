const User = require('./../models/userModel')

exports.createUser = async (req,res)=>{
    try{
        const newUser= await User.create(req.body)
        res.json({
            status:'successfully added',
            data:{
                newUser
            }
        })
    }
    catch(err){
        res.status('failure').json({msg:err})
    }
}

exports.getAllUser=async (req,res)=>{
    try{

        const users= await User.find()

        res.json({
            msg:'all the members are here',
            users
        })
    }
    catch(err){
        res.status(400).json({msg:err})
    }
}

exports.getSingleUser=async (req,res)=>{

    try{
        const user=await User.findById(req.params.id)
        res.json(user)
    }
    catch(err){
        res.status(400).json({msg:'there is an error '})
    }
}

exports.updateUser=async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,
             runValidators:true
            })
        res.json(user)
    }
    catch (err){
        res.status(400).json(err)
    }
}

exports.deleteUser=async (req,res)=>{
    try{
         await User.findByIdAndDelete(req.params.id)
         res.status(204).json({
             msg:'successfully deleted'})
    }
    catch(err){
        res.status(400).json({msg:'not deleted'})
    }
}
