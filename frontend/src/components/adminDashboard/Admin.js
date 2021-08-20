import React from 'react'
import styles from './style'
import { Drawer } from '@material-ui/core';

function Admin() {
    const classes=styles();

    return (
        <div>
            <div className={classes.adminDiv}>
                <div className={classes.adminDrawer}>
                    <ul className={classes.adminMenus}>
                        <li className={classes.lists}>ADD PRODUCT</li>
                        <li className={classes.lists}>UPDATE PRODUCT</li>
                        <li className={classes.lists}>DELETE PRODUCT</li>
                        <li className={classes.lists}>PROFILE</li>
                   </ul>
                </div>
                <div className={classes.admincontent}>

                </div>
            </div>
        </div>
    )
}

export default Admin
