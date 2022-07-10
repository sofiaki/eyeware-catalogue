//brands.js
import React from "react";
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

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 24;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const url = new URL("https://api.chec.io/v1/categories/");

      let param = {
        type: "slug",
        limit: "200",
      };
      Object.keys(param).forEach((key) =>
        url.searchParams.append(key, param[key])
      );

      let headers = {
        "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
        Accept: "application/json", 
        "Content-Type": "application/json",
      };
      await fetch(url, {
        method: "GET",
        headers: headers,
      })
        .then((res) => res.json())
        .then((i) => setCategories(i.data));

      setLoading(false);
      
    })()
    
    return ()=>{
      setBrands(categories.filter((i) => i.description === "brand"));
    }
  },[]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(brands.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(brands.length / itemsPerPage));
    setLoading(false);
  }, [itemOffset, itemsPerPage, brands]);

  useEffect(() => {
    setItemOffset(0);
  }, [brands]);

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
