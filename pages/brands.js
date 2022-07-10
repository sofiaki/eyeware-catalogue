//brands.js
import React from "react";
import commerce from "../lib/commerce";
import Head from "next/head";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import styles from "../components/ProductList.module.css";
import Category from "../components/Category";
import Loading from "../components/Loading";

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

export async function getStaticProps() {
   const { data: categories } = await commerce.categories.list({
     limit: 200,
 
   });
   return {
    props: {
      categories,
    },
  };
}
export default function CategoriesPage({categories}) {
  const cats= categories.filter((i) => i.description === "brand")
  const [brands, setBrands] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 24;
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setBrands(cats)
  },[])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(brands.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(brands.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, brands]);

  useEffect(()=>{
    setItemOffset(0)
  },[brands]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % brands.length;
    setItemOffset(newOffset);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Οπτικά Όραση - Brands</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <Layout />
        <Grid container className={styles.container}>
          <Grid container className={styles.productList}>
            {loading && <Loading />}
            {currentItems &&
              currentItems.map((brand) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={3}
                  key={brand.slug}
                  className={`${styles.productBox}  ${styles.brandsItem}`}
                >
                  <Grid className={`${styles.product} ${styles.brandsItem}`}>
                    <Link
                      className={`${styles.link} ${styles.myHover}`}
                      href={`/categories/${brand.slug}`}
                    >
                      {!brand.assets[0] ? (
                        <Category {...brand} />
                      ) : (
                        <>
                          <img
                            src={`${brand.assets[0]?.url}`}
                            alt="slug"
                            className={styles.brandsImg}
                          ></img>
                        </>
                      )}
                    </Link>
                  </Grid>
                </Grid>
              ))}
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <ReactPaginate
              className={styles.paginator}
              activeClassName={styles.activeClassName}
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="<"
            />
          </Grid>
        </Grid>
        <Footer />
      </StyledEngineProvider>
    </React.Fragment>
  );
}
