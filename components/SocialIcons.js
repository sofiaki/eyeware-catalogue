import React from "react";
import styles from "../components/layout.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialIcons(){
const handleClickFb= (event)=>{
    window.open('https://www.facebook.com/OptikaOrase', '_blank');
}
const handleClickIg= (event)=>{
    window.open('https://www.instagram.com/optica_orasi/', '_blank');
}
return(

    <div className={styles.contactIcons} xs={12}>
        <InstagramIcon className={`${styles.icon} ${styles.myHover}`} onClick={handleClickIg} />
        <FacebookIcon onClick={handleClickFb} className={`${styles.icon} ${styles.myHover}`} />
    </div>)
}