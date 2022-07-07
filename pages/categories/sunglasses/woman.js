// pages/categories/sunglasses/woman.js
import commerce from "../../../lib/commerce";
import ProductList from "../../../components/ProductList";
import React from "react";
import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import Layout from "../../../components/layout";
import Footer from "../../../components/footer";
import Head from "next/head";
import Loading from "../../../components/Loading";
import styles from "../../../components/ProductList.module.css";
import FilterBox from "../../../components/filterBox";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import usePagination from "../../../components/Pagination";

export async function getStaticProps() {
  const url = new URL("https://api.chec.io/v1/products");

  let params = {
    limit: "200",
    category_slug: "woman",
    sortBy: "created_at",
    sortDirection: "desc",
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  let headers = {
    "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const { data: products1 } = await fetch(url, {
    method: "GET",
    headers: headers,
  }).then((response) => response.json());

  const products = products1
    ? products1.filter((i) =>
        i.categories.some((j) =>
          i.categories.some((j) => j.slug == "sunglasses")
        )
      )
    : null;
  return {
    props: {
      products,
    },
  };
}
export default function CategoryPage({ products }) {
  if (!products)
    return (
      <>
        <Layout />
        <Grid className={`${styles.catTitle} `}>
          Δεν υπάρχουν προιόντα στην κατηγορία
        </Grid>
        <Footer />
      </>
    );

  const siteTitle = "Γυναικεία Γυαλιά Ηλίου";
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState("Όλα");
  const [polarized, setPolarized] = useState(false);
  const [clipOn, setClipOn] = useState(false);
  const [clipOnProducts, setClipOnProducts] = useState(false);
  const [polarizedProducts, setPolarizedProducts] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  let [page, setPage] = useState(1);
  const PER_PAGE = 24;
  const count = Math.ceil(filteredProducts.length / PER_PAGE);
  const _data = usePagination(filteredProducts, PER_PAGE);

  const handlePaginationChange = (e, p) => {
    setPage(p);
    _data.jump(p);
  };

  /* Get the brands of this category's products */
  function getBrands(filteredProducts) {
    const brands = [];
    filteredProducts.map((i) =>
      i.categories.map((j) => {
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
        ].includes(j.slug) &&
          !brands.some((b) => b.slug == j.slug) &&
          brands.push(j);
      })
    );

    return brands;
  }

  function getColors(filteredProducts) {
    const colors = ["Όλα"];
    filteredProducts.map((i) => {
      !colors.some((b) => b == i.sku) && colors.push(i.sku);
    });
    return colors;
  }
  function getPolarized(filteredProducts) {
    return filteredProducts.some(
      (i) => i.categories.filter((i) => i.slug == "polarised").length > 0
    );
  }
  function getClipOn(filteredProducts) {
    return filteredProducts.some(
      (i) => i.categories.filter((i) => i.slug == "clipon").length > 0
    );
  }

  useEffect(() => {
    setLoading(true);
    setBrands(getBrands(filteredProducts));
    setColors(getColors(filteredProducts));
    setPolarized(getPolarized(filteredProducts));
    setClipOn(getClipOn(filteredProducts));

    //setBrand(null);
    setLoading(false);
    return () => {
      setBrands({});
      setColors([]);
    };
  }, [filteredProducts]);

  function masterFilter(color1, brand, polarized, clipOn, products) {
    let filtered = [];
    filtered =
      color1 != "Όλα" ? products.filter((i) => i.sku == color) : products;
    filtered = brand
      ? filtered.filter((i) =>
          i.categories.some((j) => brand.slug.includes(j.slug))
        )
      : filtered;
    filtered = polarizedProducts
      ? filtered.filter((i) => i.categories.some((j) => j.slug == "polarised"))
      : filtered;
    filtered =
      clipOnProducts == true
        ? filtered.filter((i) => i.categories.some((j) => j.slug == "clipon"))
        : filtered;
    return filtered;
  }
  useEffect(() => {
    setFilteredProducts(
      masterFilter(color, brand, polarized, clipOn, products)
    );
  }, [color, brand, polarizedProducts, clipOnProducts]);

  return (
    <>
      <Head>
        <title>{`${siteTitle} - Οπτικά Όραση`}</title>
      </Head>
      <Layout />
      <Grid className={styles.slugcontainer}>
        <Typography variant="h5" className={`${styles.catTitle}`}>
          {siteTitle}
        </Typography>

        {!loading && (
          <FilterBox
            brands={brands}
            colors={colors}
            polarized={polarized}
            clipOn={clipOn}
            onBrandChange={setBrand}
            onColorChange={setColor}
            onPolarizedChange={setPolarizedProducts}
            onClipOnChange={setClipOnProducts}
          />
        )}
        {loading ? (
          <Loading />
        ) : (
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
        )}
      </Grid>
      <Footer />
    </>
  );
}
