import React from 'react'
import {LocalShippingOutlined,PaymentOutlined,ContactSupportOutlined} from '@material-ui/icons'
import useStyles from './style'
import './underRecent.css'
function UnderRecent() {
  const classes=useStyles()
    return (
        <div>
             <div>
                 <p className='underRecentMainTitle'>Why Us</p>
             </div>
             <div className="underRecentContainer">
                 <div className="underRecentGrid">
                    <span><LocalShippingOutlined className={classes.prop}/></span>
                    <p className='underRecentTitle'>Support Customer</p>
                    <p className='underRecentNotes'>
                    Far far away, behind the word mountains,
                     far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                 </div>
              
                    <div className="underRecentGrid">
                        <span><PaymentOutlined className={classes.prop}/></span>
                        <p className='underRecentTitle'>Support Customer</p>
                        <p className='underRecentNotes'>
                        Far far away, behind the word mountains,
                         far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>
                    <div className="underRecentGrid">
                        <span><ContactSupportOutlined className={classes.prop}/></span>
                        <p className='underRecentTitle'>Support Customer</p>
                        <p className='underRecentNotes'>
                        Far far away, behind the word mountains,
                         far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>
                
             </div>
        </div>
    )
}

export default UnderRecent
