import React from "react";
import Layout from "../components/layout";
import styles from "../components/layout.module.css"
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import SocialIcons from "../components/SocialIcons"



const Contact=()=>{
    return(
        <>
        <StyledEngineProvider injectFirst>
        <Layout />
        <Grid className={`${styles.container} ${styles.contactBackground}`}>
        <Grid className={styles.contact}>
            <Grid m="20px">
                <Grid className={styles.contactDetails}  sx={{m:'20px'}}>     
                    <Typography variant="body">Πατρέως 40Α, Πάτρα.</Typography>
                    <Typography variant="body">Τηλέφωνο: <a href="tel:+302610318995">2610621070</a></Typography>
                    <Typography variant="body">Email : optika-orash@hotmail.com</Typography>
                   
                </Grid>
                <Grid className={styles.contactDetails}   sx={{ m:'20px', textAlign: 'end'}}>
                    <Typography variant="body">Ώρες λειτουργίας καταστήματος:</Typography>
                    <Typography variant="body">Δευτέρα - Τετάρτη - Σάββατο :</Typography> 
                    <Typography>9:00 - 15:00</Typography>
                    <Typography variant="body">Τρίτη - Πέμπτη - Παρασκευή :</Typography>
                    <Typography> 9:00 - 14:00 , 17:30 - 21:00</Typography>
              </Grid>
            </Grid>
            <Grid>
                <Box sx={{m:'20px', textAlign:'center'}}>
                    <iframe title='Optika-Orasi' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12533.841175117426!2d21.7340085!3d38.2456293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda448bc5e1b16781!2zzp_Ooc6RzqPOlyAtIM6fzqDOpM6ZzprOkSAtIM6azqXOoM6hzpHOmc6fzqUgzqDOkc6dzpHOk86ZzqnOpM6RIC0gzqDOkc6kzqHOkQ!5e0!3m2!1sel!2sgr!4v1640525283011!5m2!1sel!2sgr" width="100%" height="250px" style={{border:0}} loading="lazy"></iframe>
                </Box>
            </Grid>
            <Grid className={styles.contactInfo} display="flex" justifyContent="center" m="20px">
             <SocialIcons />
            </Grid>
        </Grid>
        </Grid>
        </StyledEngineProvider>
        </>
    )
}
export default Contact;

