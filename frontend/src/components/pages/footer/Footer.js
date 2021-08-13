import { Grid } from '@material-ui/core'
import React from 'react'
import './footer.css'
import { Facebook,Twitter,Instagram,Email} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import useStyles from './style'

function Footer() {
    const classes=useStyles()
    return (
        <div className='footerDiv'>
            <div className='allFooter'>
                <Grid container spacing={3}>
                    <Grid item lg={12} sm={12}> 
                        <h1>GET IN TOUCH</h1>
                    </Grid>
                    
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <h3>Call Us</h3>
                            <p style={{marginLeft:'30px'}}>09123...23</p>
                            <p style={{marginLeft:'30px'}}>09123...23</p>
                            <p style={{marginLeft:'30px'}}>09123...23</p>
                         
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <h3>Email Us</h3>
                            <p style={{marginLeft:'30px'}}>onlinestore234@gmail.com</p>
                            <p style={{marginLeft:'30px'}}>onsanestore234@gmail.com</p>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <h3>Follow Us</h3>
                         <Facebook className={`icons ${classes.iconss}`}/>
                         <Twitter className={`icons ${classes.iconss}`}/>
                         <Instagram className={`icons ${classes.iconss}`}/>
                         <Email className={`icons ${classes.iconss}`}/>
                         <br/>
                         <Link className='footerAbout'to='/about'><h3>About Us</h3></Link>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default Footer
