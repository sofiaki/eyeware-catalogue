// components/CategoryList.js
import Link from "next/link";
import Category from "./Category";
import React from "react";
import Grid from "@mui/material/Grid"
import styles from "../components/ProductList.module.css";
import Typography from '@mui/material/Typography';


export default function CategoryList(props) {
 
  return (
    <Grid className={styles.categoryArea}>
      <Typography variant="h5">Κατηγορίες Προϊόντων</Typography>
      <Grid className={styles.categoryList} >
        {props.categories.map((category) => (
          <Grid  key={category.slug} className={styles.sampleProductBox}> 
            <Link   href={`/categories/${category.slug}`}>
              <a >
                <Grid  className={`${styles.product} ${styles.categoryItem}`}>  
                  {!category.assets[0]?
                    <Category {...category} />
                    :
                    <>
                      <img src={`${category.assets[0]?.url}`}  alt="slug" className={styles.categoryItemImg}></img>
                      <Grid item container xs={12} lg={12} className={styles.productTitle}>
                        <Typography variant="body">
                                {category.name}
                        </Typography>
                      </Grid>
                    </>
                }
                </Grid>
              </a>
            </Link>
              
          </Grid>
          ))}
        </Grid>
      </Grid>
  );
}
