import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core';
import {Grid,Paper,TextField,Button,Typography,Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom';
import ScrollToTop from '../scrollToTop/ScrollToTop';

const useStyles=makeStyles((theme)=>({
    signButton:{
        background:'rgba(131,66,12,.9)',
        color:'#DFE0DF',
        fontWeight:'bold',
        border:'1px solid rgba(131,66,12,.8)',
        '&:hover':{
            background:'#DFE0DF',
            color:'rgba(131,66,12,.9)',
            border:'1px solid rgba(131,66,12,.8)'
        }
    }
}))

const Login=()=>{
    const classes=useStyles()
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'rgba(131,66,12,.9)'}
    const btnstyle={margin:'8px 0'}
    return(
        <div style={{paddingTop:'100px'}}>
        <ScrollToTop/>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' variant="contained" style={btnstyle} className={classes.signButton} fullWidth>Sign in</Button>
                <Typography style={{paddingTop:'5px'}}>
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography style={{paddingTop:'5px'}}> Do you have an account ?
                     <Link to='/register' style={{paddingTop:'5px'}}>
                        Sign Up 
                     </Link>
                </Typography>
            </Paper>
        </Grid>
        </div>
    )
}
export default Login