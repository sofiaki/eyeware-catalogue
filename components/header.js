import styles from "./layout.module.css";
import { Grid, Typography } from "@mui/material";
import Search from "./Search";
import CategoryMenu from "./CategoryMenu";
import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { Icon } from '@iconify/react';

export default function Header(props) {
  const headerClass = props.headerClass;

  const brand = { firstnames: "Eyeware", lastname: "shop" };
  const menuItems = [
    { name: "Glasses",
     subCats: [{
       subName: "Woman",
       url: "/categories/glasses/woman"
      },{
        subName: "Man",
        url: "/categories/glasses/man"
       },{
        subName: "Kid",
        url: "/categories/glasses/kid"
       },{
        subName: "Unisex",
        url: "/categories/glasses/unisex"
       }
    ] ,
       url: "" 
      },{ 
      name: "Sunglasses",
    subCats: [{
      subName: "Woman",
      url: "/categories/sunglasses/woman"
     },{
       subName: "Man",
       url: "/categories/sunglasses/man"
      },{
       subName: "Kid",
       url: "/categories/sunglasses/kid"
      },{
       subName: "Unisex",
       url: "/categories/sunglasses/unisex"
      },
   ],
   url: ""
  },{ 
    name: "Contact lenses",
  subCats: [],
 url: "/categories/lences"
},{ 
  name: "Contact lenses liquid",
subCats: [],
url: "/categories/lencessolution"
} 
  ];

  return (
    <Grid className={styles.headerBox}>
      <Grid className={styles.header}>
        <Grid
          className={styles.brandBlock}
          item
          container
          xs={12}
          sm={4}
          md={4}
        >
          <Grid
            className={styles.brandImg}
            item
            container
            xs={12}
            md={12}
            lg={12}
          >
            <Link item href="/">
              <a>
                <img src="/images/logo-header6.png" alt="orasi" width="160" />
              </a>
            </Link>
          </Grid>
          <Grid className={styles.brand} item xs={12} md={12} lg={12}>
            <Grid>
              <Typography variant="body">{brand.firstnames}</Typography>
            </Grid>
            <Grid>
              <Typography variant="body">{brand.lastname}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={headerClass}>
        <Grid className={styles.menu} item container>
          <CategoryMenu menuTitle={"Products"} menuItems={menuItems} />

          <Grid item className={`${styles.menuItem} ${styles.myHover}`}>
            <Link item href="/contact">
              <a>
                <Icon className={styles.menuIcon} icon="entypo:old-phone" color="white" width="1.9em" />
                <Typography variant="body" className={styles.menuTitle}>
                  Contact
                </Typography>
              </a>
            </Link>
          </Grid>
          <Grid item className={`${styles.menuItem} ${styles.myHover}`}>
            <Link item href="/">
              <a>
                <InfoIcon className={styles.menuIcon}></InfoIcon>

                <Typography variant="body" className={styles.menuTitle}>
                  About us
                </Typography>
              </a>
            </Link>
          </Grid>
          <Grid position="absolute" bottom="5px" right="10px" sx={{display: 'inline-flex', alignItems:'flex-end'}}>
            <Search />
            <SocialIcons />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
