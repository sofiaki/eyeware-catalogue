import Link from "next/link"
import React from 'react'
import Product from "./Product"
import Grid from "@mui/material/Grid"
import styles from "./ProductList.module.css"
import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react"



export default function ProductList({items}) {
  if (!items) return null;


  return(
    
  <Grid item container xs={12} md={12} lg={12} >  
    <Grid item  className={styles.productList} container xs={12} md={12} lg={12} >
      {items && items.map((product) => (
          <Grid className={styles.productBox} key={product.permalink} >       
            <Link key={product.permalink} href={`/products/${product.permalink}`}>
              <a>
                <Product props={product} />
              </a>
            </Link>
          </Grid>
      ))}
    </Grid>
    
     </Grid>
  );
  
}