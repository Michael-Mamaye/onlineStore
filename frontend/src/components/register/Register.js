import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, makeStyles } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ScrollToTop from '../scrollToTop/ScrollToTop'
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
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#83420C' }
    const marginTop = { marginTop: 5 }
    const classes=useStyles()
    return (
        <div style={{paddingTop:'100px'}}>
        <ScrollToTop/>
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio color='primary' />} label="Female" />
                            <FormControlLabel value="male" control={<Radio color='primary' />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox color='primary'name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained'  className={classes.signButton}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
        </div>
    )
}
export default Signup;