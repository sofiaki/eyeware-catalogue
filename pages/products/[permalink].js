// pages/products/[permalink].js
import commerce from "../../lib/commerce";
import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Footer from "../../components/footer";
import { Typography } from "@mui/material";
import styles from "../../components/ProductList.module.css";
import RelatedProducts from "../../components/RelatedProducts";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "@iconify/react";
import arrowsExpand from "@iconify/icons-foundation/arrows-expand";

/*export async function getStaticProps({ params }) {
  const { permalink } = params;
  
   const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };

  
}
export async function getStaticPaths() {
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
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}*/

export async function getServerSideProps({ params }) {
  const { permalink } = params;
  
   const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };

  
}
export default function ProductPage({ product }) {
  if(product){const {
    inventory,
    assets,
    meta,
    related_products: relatedProducts,
  } = product && product;

  const type = product && product.categories.some((i) =>
    ["lences", "lenssolution"].includes(i.slug)
  );
  const images = assets.filter(({ is_image }) => is_image);
  const inventoryCheck = product.inventory.available;
  const [showMenu, setShowMenu] = React.useState(false);
  const handleClick = () => {
    showMenu == false ? setShowMenu(true) : setShowMenu(false);
  };
  let brand = "";
  product && product.categories.map((j) => {
    ![
      "man",
      "woman",
      "kid",
      "lences",
      "unisex",
      "glasses",
      "sunglasses",
      "polarised",
      "clipon",
      "transition",
    ].includes(j.slug) && (brand = j.name);
  });
  function capitalize(words) {
    var separateWord = words.toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(" ");
  }
  const brandName = capitalize(brand);
  const productName = brand && product.name.replace(brand, "");
  return (
    <>
      <Head>
        <title>{`${brandName} ${productName}`} - Οπτικά Όραση</title>
        <meta name="description" content={`${brand} ${productName}`} />
        <link rel="icon" href="/favicon3.png" />
        <meta
          name="description"
          content={`${brandName} ${productName}`}
        />
        <meta
          name="keywords"
          content="οπτικά, γυαλιά ηλίου, γυαλιά οράσεως, κυπραιου, πατρα, φακοί επαφής, φωτοχρωμικοί φακοί, πολωτικοί φακοί"
        ></meta>
        <meta property="og:image" content={`/images/logo-header6.png`} />
        <meta name="og:title" content="Οπτικά όραση" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout />
      <Grid
        container
        className={`${styles.pdtImgDivZoomed} ${showMenu && styles.show}`}
      >
        <Grid className={styles.zoomedBox}>
          <Carousel
            autoPlay={false}
            className={styles.carousel}
            navButtonsWrapperProps={{
              // Move the buttons to the bottom. Unsetting top here to override default style.
              style: {
                height: "90vh",
              },
            }}
            navButtonsProps={{
              style: {
                backgroundColor: "gray",
              },
            }}
            swipe={true}
            navButtonsAlwaysVisible={true}
          >
            {images.map((item, i) => (
              <Item key={i} item={item} inventoryCheck={inventoryCheck} />
            ))}
          </Carousel>
        </Grid>
        <CloseIcon
          onClick={handleClick}
          className={styles.myHover}
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "40px",
          }}
        />
      </Grid>

      <Grid container className={styles.productPage}>
        
          <Grid
            item
            container
            className={styles.pdtImgDiv}
           
          >
            <Grid
              sx={{
                height: "350px",
                width: "90%",
                display: "block",
                position: "relative",
                margin: "auto",
              }}
            >
              {inventoryCheck == 0 && (
                <Grid className={styles.soldOutPermalink}>
                  Χαμηλή διαθεσιμότητα
                </Grid>
              )}
              <Carousel
                autoPlay={false}
                sx={{
                  width: "100%",
                  margin: "auto",
                }}
                navButtonsWrapperProps={{
                  // Move the buttons to the bottom. Unsetting top here to override default style.
                  style: {
                    height: "300px",
                  },
                }}
                navButtonsProps={{
                  style: {
                    backgroundColor: "gray",
                  },
                }}
                swipe={true}
              >
                {images.map((item, i) => (
                  <Item key={i} item={item} inventoryCheck={inventoryCheck} />
                ))}
              </Carousel>
              {/*<ZoomInIcon
                onClick={handleClick}
                className={styles.myHover}
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "rgb(41, 41, 41)",
                  zIndex: "1",
                }}
              />*/}
              <Grid
                onClick={handleClick}
                className={`${styles.myHover} ${styles.zoomIcon}`}
              >
                <Icon icon={arrowsExpand} color="rgb(160,160,160)" />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
           
            className={styles.pdtDscr}
          >
            <Grid>
              <Grid>
                <Typography sx={{ fontSize: "32px", fontFamily: "Roboto" }}>
                  {brandName}
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  sx={{ fontSize: "26px", fontFamily: "Roboto" }}
                  variant="body"
                >
                  {productName}
                </Typography>
              </Grid>
            </Grid>
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </Grid>
        
        <div className={styles.productList}>
          <RelatedProducts products={relatedProducts} type={type} />
        </div>
      </Grid>
      <Footer />
    </>
  );
}

function Item(props) {
  return (
    <Paper sx={{boxShadow: 'none'}}>
      <img className={styles.pdtPgImg} src={props.item.url} />
    </Paper>
  );}
}
