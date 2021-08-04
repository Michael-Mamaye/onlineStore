import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    
    contentNames:{
        textAlign:'left',
        fontSize:'16px',
        fontFamily:'verdana',
        fontWeight:'bold',
    },
    contentDescription:{
        textAlign:'left',
        marginLeft:'10px',
        fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        opacity:'0.85',
        fontSize:'14px',
        
    },
    buyBtn:{
        background: '#83420C',
        color:' #DFE0DF',
        fontWeight:'bold',
        border:'1px solid #83420C',
        alignSelf:'left',
        height:'30px',
        '&:hover':
            {
                color:' #83420C',
                border:'1px solid #83420C',
               
            }
    },
    detailsBtn:{
        background: '#DFE0DF',
        color:'#83420C',
        fontWeight:'bold',
        border:'1px solid #DFE0DF',
        height:'30px',
        '&:hover':
            {
                color:'#83420C',
                border:'1px solid #83420C',
               
            }
    },

}))