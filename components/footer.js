import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from "./layout.module.css"
import SocialIcons from "./SocialIcons"


const Footer=()=>{
    return(
        <Grid container className={styles.footer}>
            <Grid className={styles.contactInfo}>
                <div>
                    <Typography variant="body">Sofia Kyriazi</Typography>
                </div>
                
                <SocialIcons />
            </Grid>
        </Grid>
    )
}
export default Footer;