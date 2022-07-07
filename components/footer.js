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
                    <Typography variant="body">Πατρέως 40Α, Πάτρα</Typography>
                </div>
                <div>
                    <Typography variant="body"><a href="tel:+302610318995">2610621070</a></Typography>
                </div>
                <SocialIcons />
            </Grid>
        </Grid>
    )
}
export default Footer;