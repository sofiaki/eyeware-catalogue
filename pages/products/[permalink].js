// pages/products/[permalink].js
import commerce from "../../lib/commerce";
import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Footer from "../../components/footer";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "../../components/ProductList.module.css";
import RelatedProducts from "../../components/RelatedProducts";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "@iconify/react";
import arrowsExpand from "@iconify/icons-foundation/arrows-expand";

export async function getStaticProps({ params }) {
  const { permalink } = params;
  /*
   const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
*/
  const url = new URL("https://api.chec.io/v1/products/" + permalink);

  let param = {
    type: "permalink",
  };
  Object.keys(param).forEach((key) => url.searchParams.append(key, param[key]));

  let headers = {
    "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const product = await fetch(url, {
    method: "GET",
    headers: headers,
  }).then((res) => res.json());
  return {
    props: {
      product,
    },
  };
}
export async function getStaticPaths() {
  const url1 = new URL("https://api.chec.io/v1/products");

  let params1 = {
    limit: "200",
    category_slug: "sunglasses",
  };
  Object.keys(params1).forEach((key) =>
    url1.searchParams.append(key, params1[key])
  );

  let headers = {
    "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const { data: products1 } = await fetch(url1, {
    method: "GET",
    headers: headers,
  }).then((response) => response.json());

  const url2 = new URL("https://api.chec.io/v1/products");
  let params2 = {
    limit: "200",
    category_slug: "glasses",
  };
  Object.keys(params2).forEach((key) =>
    url2.searchParams.append(key, params2[key])
  );

  const { data: products2 } = await fetch(url2, {
    method: "GET",
    headers: headers,
  }).then((response) => response.json());

  const url3 = new URL("https://api.chec.io/v1/products");
  let params3 = {
    limit: "200",
    category_slug: "lences",
  };
  Object.keys(params3).forEach((key) =>
    url3.searchParams.append(key, params3[key])
  );

  const { data: products3 } = await fetch(url3, {
    method: "GET",
    headers: headers,
  }).then((response) => response.json());

  const url4 = new URL("https://api.chec.io/v1/products");

  let params4 = {
    limit: "200",
    category_slug: "lenssolution",
  };
  Object.keys(params4).forEach((key) =>
    url4.searchParams.append(key, params4[key])
  );

  const { data: products4 } = await fetch(url4, {
    method: "GET",
    headers: headers,
  }).then((response) => response.json());

  const products = products1.concat(products2, products3);
  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  const {
    inventory,
    assets,
    meta,
    related_products: relatedProducts,
  } = product;

  const type = product.categories.some((i) =>
    ["lences", "lenssolution"].includes(i.slug)
  );
  const images = assets.filter(({ is_image }) => is_image);
  const inventoryCheck = product.inventory.available;
  const [showMenu, setShowMenu] = React.useState(false);
  const handleClick = () => {
    showMenu === false ? setShowMenu(true) : setShowMenu(false);
  };
  let brand = "";
  product.categories.map((j) => {
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
        <title>{product.name} - Οπτικά Όραση</title>
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
        <>
          <Grid
            item
            container
            className={styles.pdtImgDiv}
            xs={12}
            sm={12}
            md={6}
            lg={5}
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
              {inventoryCheck === 0 && (
                <Grid className={styles.soldOutPermalink}>
                  Χαμηλή διαθεσιμότητα
                </Grid>
              )}
              <Carousel
                autoPlay={false}
                sx={{
                  width: "100%",
                  margin: "auto",
                  maxWidth: "400px",
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
            xs={12}
            sm={12}
            md={6}
            lg={7}
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
        </>
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
    <Paper>
      <img className={styles.pdtPgImg} src={props.item.url} />
    </Paper>
  );
}
