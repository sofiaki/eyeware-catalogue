import React from "react";
import SampleProductList from "../components/SampleProductList";
import Layout  from "../components/layout";
import Head from "next/head";
import Banner3 from "../components/Banner3"
import Footer from "../components/footer";
import Grid from "@mui/material/Grid"
import StyledEngineProvider  from "@mui/material/StyledEngineProvider";
import CategoryList from "../components/CategoryList"
import styles from "../components/layout.module.css"
import Promo from "../components/Promo"
import Video from "../components/Video";
import Filler from "../components/filler";
import Video2 from "../components/Video2";
import PopUpVideo from "../components/PopUpVideo";

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

      const url2 = new URL("https://api.chec.io/v1/products");
      let param2 = {
        limit: "6",
      };
      Object.keys(param2).forEach((key) => url2.searchParams.append(key, param[key]));
    
      const products = await fetch(url2, {
        method: "GET",
        headers: headers,
      })
        .then((res) => res.json()).then((data)=>data.data)
   
      products.sort((a,b)=> (a.updated < b.updated)?1:-1)

  return {
    props: {
      categories,
      products,
    },
  };
}
const siteTitle="Οπτικά Όραση"
export default function IndexPage({categories, products }) {
  const sampleCategories= categories.filter(category=>['glasses', 'sunglasses', 'lences'].includes(category.slug))

    return (
      <React.Fragment>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <StyledEngineProvider injectFirst>
          <PopUpVideo />
          <Grid p="0px" m="0px" width="100%">
            <Layout />
            <Banner3/>
            <Grid className={styles.mainContent}>
              
              <Filler />
              <Video2 />
              <Grid height={30}></Grid>
              <CategoryList categories={sampleCategories}/>
              <Filler />
              <Promo />
              <Filler />
              <Video />
              <Filler />
              <SampleProductList products={products} />
            </Grid>
            <Filler />
            <Footer />
          </Grid>
        </StyledEngineProvider>
      </React.Fragment>
    );
  }