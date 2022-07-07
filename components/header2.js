import styles from "./layout.module.css";
import { Grid, Typography } from "@mui/material";
import CategoryMenu from "./CategoryMenu";
import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { Icon } from '@iconify/react';

export default function Header2(props) {
  const headerClass = props.headerClass;

  const brand = { firstnames: "Παναγιώτα & Μαλβίνα", lastname: "Κυπραίου" };
  const menuItems = [
    { name: "Γυαλιά Οράσεως",
     subCats: [{
       subName: "Γυναικεία Γυαλιά Οράσεως",
       url: "/categories/glasses/woman"
      },{
        subName: "Ανδρικά Γυαλιά Οράσεως",
        url: "/categories/glasses/man"
       },{
        subName: "Παιδικά Γυαλιά Οράσεως",
        url: "/categories/glasses/kid"
       },{
        subName: "Unisex Γυαλιά Οράσεως",
        url: "/categories/glasses/unisex"
       }
    ] ,
       url: "" 
      },{ 
      name: "Γυαλιά Ηλίου",
    subCats: [{
      subName: "Γυναικεία Γυαλιά Ηλίου",
      url: "/categories/sunglasses/woman"
     },{
       subName: "Ανδρικά Γυαλιά Ηλίου",
       url: "/categories/sunglasses/man"
      },{
       subName: "Παιδικά Γυαλιά Ηλίου",
       url: "/categories/sunglasses/kid"
      },{
       subName: "Unisex Γυαλιά Ηλίου",
       url: "/categories/sunglasses/unisex"
      },
   ],
   url: ""
  },{ 
    name: "Φακοί επαφής",
  subCats: [],
 url: "/categories/lences"
},{ 
  name: "Υγρά φακών Επαφής",
subCats: [],
url: "/categories/lencessolution"
} 
  ];

  return (
    <Grid className={styles.headerBox}>
      <Grid className={styles.header2}>
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
          <CategoryMenu menuTitle={"Προϊόντα"} menuItems={menuItems} />

          <Grid item className={`${styles.menuItem} ${styles.myHover}`}>
            <Link item href="/contact">
              <a>
                <Icon className={styles.menuIcon} icon="entypo:old-phone" color="white" width="1.9em" />
                <Typography variant="body" className={styles.menuTitle}>
                  Επικοινωνία
                </Typography>
              </a>
            </Link>
          </Grid>
          <Grid item className={`${styles.menuItem} ${styles.myHover}`}>
            <Link item href="/">
              <a>
                <InfoIcon className={styles.menuIcon}></InfoIcon>

                <Typography variant="body" className={styles.menuTitle}>
                  Σχετικά με εμας
                </Typography>
              </a>
            </Link>
          </Grid>
          <Grid position="absolute" bottom="5px" right="10px">
            <SocialIcons />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
