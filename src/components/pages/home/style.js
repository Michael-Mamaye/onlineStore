import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    btns:{
        background: '#DFE0DF',
        color:' #83420C',
        maxWidth:' 300px',
        alignSelf:' center',
        fontWeight:' bolder',
        fontSize:' 20px',
        border:'2px solid #DFE0DF',
        '&:hover':
            {
                color:' #DFE0DF',
                border:'2px solid #DFE0DF',
               
            }
    }
}))