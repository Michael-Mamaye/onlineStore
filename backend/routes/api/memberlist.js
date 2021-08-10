const express= require('express')
const router=express.Router()
const members = require('../../Memebers')

router.get('/',(req,res)=>{
    res.json(members)
})

router.get('/:id',(req,res)=>{
    const found=members.some(members=>members.id===parseInt(req.params.id))
    if(found){
        res.json(members.filter(members=>members.id===parseInt(req.params.id)))
    }
    else
    {
        res.status(400).json({msg:`there is no name with ${req.params.id} id`})
    }
    
})

router.post('/',(req,res)=>{
   const newMember={
            id:5,
            name:req.body.name,
            age:req.body.age,
            title:'none'
    }

    if(!req.body.name|| !req.body.age)
    {
        return res.status(400).json({msg:'both name and age are required'})
    }

    members.push(newMember)
    res.json(members);
})


router.put('/:id',(req,res)=>{
    const found=members.some(member=>member.id===parseInt(req.params.id))
    if(found)
    {
        const updMember=req.body;
        members.forEach(member=>{
            if(member.id===parseInt(req.params.id))
            {
                member.name=updMember.name?updMember.name:member.name;
                member.age=updMember.age?updMember.age:member.age;

                res.json({msg:'successfully updated'});
               
            }
        })

    }
    else{
        res.status(400).json({msg:`there is no person with ${req.params.id} id`})
    }
})

module.exports=router;