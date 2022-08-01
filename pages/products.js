import Layout from "../components/layout";
import Footer from "../components/footer";
import ProductList from "../components/ProductList";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import styles from "../components/ProductList.module.css";
import { useState, useEffect } from "react";
import FilterBox from "../components/filterBox";
import usePagination from "../components/Pagination";
import Pagination from "@mui/material/Pagination";
import commerce from "../lib/commerce"
export async function getStaticProps() {
  const { data: products1 } = await commerce.products.list(
    {
      limit: 200,
      page: 1,
      sortBy: 'created_at',
      sortDirection: 'desc'
    }
  );
  const { data: products2 } = await commerce.products.list(
    {
      limit: 200,
      page: 2,
      sortBy: 'created_at',
      sortDirection: 'desc'
    }
  );
  const products = products1.concat(products2)
  return {
    props: {
      products,
    },
  };
}
export default function ProductsPage({ products }) {
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [allProducts, setProducts] = useState(products);

  let [page, setPage] = useState(1);
  const PER_PAGE = 24;
  const count = Math.ceil(products.length / PER_PAGE);
  const _data = usePagination(products, PER_PAGE);

  const handlePaginationChange = (e, p) => {
    setPage(p);
    _data.jump(p);
  };

  function getBrands(products) {
    const brands = [];

    products.map((i) =>
      i.categories.map((j) => {
        ![
          "man",
          "woman",
          "kid",
          "lences",
          "unisex",
          "glasses",
          "sunglasses",
          "lenssolution",
          "clipon",
          "transition",
        ].includes(j.slug) &&
          !brands.some((b) => b.slug === j.slug) &&
          brands.push(j);
      })
    );

    return brands;
  }
  function getColors(filteredProducts) {
    const colors = ["Όλα"];
    filteredProducts.map((i) => {
      !colors.some((b) => b === i.sku) && colors.push(i.sku);
    });
    return colors;
  }
  useEffect(() => {
    products && setBrands(getBrands(products));
    products && setColors(getColors(products));
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Eyewear shop - Όλα τα προϊόντα</title>
      </Head>
      <Layout />
      <Grid className={styles.container}>
        <Grid className={styles.catTitle}>
          <Typography>Όλα τα προϊόντα</Typography>
        </Grid>
        <FilterBox brands={brands} colors={colors} />

        <>
          <Pagination
            count={count}
            className="pagination"
            page={page}
            onChange={handlePaginationChange}
          />
          <ProductList items={_data.currentData()} />
          <Pagination
            count={count}
            className="pagination"
            page={page}
            onChange={handlePaginationChange}
          />
        </>
      </Grid>

      <Footer />
    </React.Fragment>
  );
}
