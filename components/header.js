import styles from "./layout.module.css"
import { Grid, Typography } from "@mui/material";
import CategoryMenu from "./CategoryMenu";
import React from "react";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import Link from "next/link"

export default function Header(props){

const headerClass= props.headerClass

  const brand = { firstnames: "Παναγιώτα & Μαλβίνα", lastname: "Κυπραίου" };
  const menuItems = [
    { name: "Γυαλιά Οράσεως", url: "/categories/glasses"},
    { name: "Γυαλιά Ηλίου", url: "/categories/sunglasses" },
    { name: "Φακοί Επαφής", url: "/categories/lences" },
    { name: "Brands", url: "/brands"}
  ];
  
return(
  <>
  <Grid
    className={headerClass}
    container
  >
    <Grid className={styles.brandBlock} item container xs={4} sm={4} md={4}>
      <Grid
        className={styles.brandImg}
        item
        container
        xs={12}
        md={12}
        lg={12}
        >
        <Link item href="/">
          <img
            src="/images/logo-header4.png"
            alt="orasi"
            width="100"
          />
        </Link>
      </Grid>
      <Grid className={styles.brand}item xs={12} md={12} lg={12}>
        <Typography
          display="block"
          variant="body"
          align="center"
          
        >
          {brand.firstnames}
        </Typography>
        <Typography
          display="block"
          variant="body"
          align="center"
        >
          {brand.lastname}
        </Typography>
      </Grid>
    </Grid>
    <Grid className={styles.menu} item container xs={6} sm={8} md={8} lg={6}>
      <CategoryMenu menuTitle={"Προϊόντα"} menuItems={menuItems} />       
      
      <Grid item className={`${styles.menuItem} ${styles.myHover}`} >
        <Link item href="./contact">
          <ContactPageIcon  className={styles.menuIcon}></ContactPageIcon>
        </Link>    
        <Link item href='/contact'>
          <Typography
            className={styles.menuTitle} 
            variant="body"                   
          >
            Επικοινωνία
          </Typography>
        </Link>
      </Grid>
      <Grid item className={`${styles.menuItem} ${styles.myHover}`}>
        <Link item href='/'>
          <InfoIcon className={styles.menuIcon}></InfoIcon>
        </Link>
        <Link item href='/'>
          <Typography
            className={styles.menuTitle}
            variant="body"                  
          >
            Σχετικά με εμας
          </Typography>
        </Link>
      </Grid>
    </Grid>
  </Grid> 
  </>
);}