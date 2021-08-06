
const loginReducer=(state=false,action)=>{
        switch(action.type){
            case 'NEWPOST':
                return !state;
            default:
                return  state;
        }
}


export default loginReducer;