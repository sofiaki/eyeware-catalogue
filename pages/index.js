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
import commerce from "../lib/commerce";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list({
    limit: 100
  });
  const { data: products } = await commerce.products.list(
    {
      limit: 6,
      sortBy: 'created_at',
      sortDirection: 'desc'
    }
  );
  return {
    props: {
      categories,
      products,
    },
  };
}
const siteTitle="Eyewear shop"
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