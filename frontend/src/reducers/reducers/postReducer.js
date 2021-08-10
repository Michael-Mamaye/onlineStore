import Mk from '../../assets/dinu.jpg'
const falls=[
    {pid:1,
     pname:'Samsung',
     fname:'S21 ultra',
     description:'lorem ipsum capcha test is nothing it just makes u bored',
     images:Mk,
    },
    {pid:12,
        pname:'miki',
        fname:'mikis',
        description:'lorem ipsum capcha test is nothing it just makes u bored',
        images:Mk,
       },
    {pid:2,
        pname:'afski',
        fname:'asdis',
        description:'lorem ipsum capcha test is nothing it just makes u bored',
        images:Mk,
       }, 
    {pid:3,
        pname:'adfsadsf',
        fname:'mafadsfdfsakis',
        description:'lorem ipsum capcha test is nothing it just makes u bored',
        images:Mk,
       }
    
]



const postReducer=(state=falls, action)=>{
    
    switch(action.type){
        case 'NEWPOST':
            return state.concat(action.payload);
        default:
            console.log('jdsafads')
            return state;
    }
}


export default postReducer;