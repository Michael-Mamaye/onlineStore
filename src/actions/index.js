const newPost= (post)=>async (dispatch)=>{
    try{
        console.log('hello')
    return({
        type:'NEWPOST',
        post
    })
    }
    catch(error){
       console.log(error.message)
    }
    
}

export default newPost