import { colors, ListItem, makeStyles } from "@material-ui/core";

export default makeStyles ((theme)=>({

    adminDiv:
    {
        
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    adminDrawer:{
        background: "linear-gradient(-45deg, rgba(78,45,1,0.9752275910364145) 0%, rgba(131,66,12,1) 12%, rgba(166,109,11,1) 100%)",
        height:'100vh',
        width:'250px',
        display:'flex',
        flexDirection:'column',
        color:'white',
       
        
    },
    adminMenus:{
        paddingTop:'20px',
        textDecoration:'none',
        listStyleType:'none',
        alignSelf:'center'
    },
    lists:{
        padding:'20px',
        marginTop:'20px',
        borderRadius:'10px',
        border:'2px solid transparent',
        borderBottom:'1px solid white',
        '&:hover':{
            cursor:'pointer',
            backgroundColor:'rgba(131,66,12,1) '
        }
    } 


}))