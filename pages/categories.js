// pages/categories.js
import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import React from "react"
import Head from "next/head"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import StyledEngineProvider  from "@mui/material/StyledEngineProvider";
import styles from "../components/ProductList.module.css";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list({
    limit: 100
  });

  return {
    props: {
      categories,
    },
  };
}

export default function CategoriesPage({ categories }) {
  return (
    <React.Fragment>
      <Head>
        <title>Οπτικά Όραση - Κατηγορίες</title>
      </Head>
      <StyledEngineProvider injectFirst>
      <Layout />
      <Grid container className={styles.container}>
        <CategoryList categories={categories} />
      </Grid>
      <Footer />
      </StyledEngineProvider>
    </React.Fragment>
  );
}