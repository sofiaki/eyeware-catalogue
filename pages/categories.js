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
  const url = new URL("https://api.chec.io/v1/categories");

  let param = {
    type: "slug",
    limit: "200",
  };
  Object.keys(param).forEach((key) => url.searchParams.append(key, param[key]));

  let headers = {
    "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
    Accept: "application/json",
    "Content-Type": "application/json",
  };
    const categories = await fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json()).then((data)=>data.data)
 
  return {
    props: {
      categories,
    },
  };
}

export default function CategoriesPage({ categories }) {
  console.log(categories)
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