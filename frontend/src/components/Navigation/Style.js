import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    wholeNav:{
        alignSelf:'center',
        alignItems:'right',
        marginLeft:'10%',
        marginTop:'20px',
        width:'80%',
        borderRadius:'20px',
        position:'fixed',
        backgroundColor:'white',
        boxShadow:'1px 1px 10px rgb(0,0,0,0.5)',
        padding:'10px',
        transform:"TranslateX(0px)",
        transition:'transform 2s',
        zIndex:'900',
        overflowX:'hidden'
    },
    wholeNav2:{
        transform:"TranslateY(-100px)",
        transition:'transform 2s',
        overflowX:'hidden'
    },
    appBar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexDirection:'column',
        }
    },
    navLinks:{
        justifyContent:'center',
        marginTop:'10px',
        width:'30%',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            padding:'5px'
        }
    },
    links:{
        padding:'10px',
        textDecoration:'none',
        fontSize:'20px',
        fontWeight:'bold',
        color:'rgb(0,0,0,0.6)',
        borderBottom:'black',
        transition:'border 1s',
        "&:hover":{
            cursor:'pointer',
            borderBottom:'black',
            transition:'transfrom 1s ease-in-out'
        },

    },
    loginLink:{
        padding:'10px',
        textDecoration:'none',
        fontSize:'20px',
        fontWeight:'bold',
        color:'rgb(0,0,0,0.6)',
        borderBottom:'black',
        transition:'border 1s',
        margin:'5px',
        '&:hover':{
            cursor:'pointer',
            borderBottom:'black',
            outline:'none',
            
        },
  
    },
    shopings:{
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            padding:'5px',
        }
    },
    movetop:{
        [theme.breakpoints.down('sm')]:{
            transform:'translate(0px,-180px)',
            overflowX:'hidden'
        }
    }
    
}))