// pages/categories/glasses/man.js
import commerce from "../../../lib/commerce";
import ProductList from "../../../components/ProductList";
import React from "react";
import { Grid, Typography } from "@mui/material";
import Layout from "../../../components/layout";
import Footer from "../../../components/footer";
import Head from "next/head";
import Loading from "../../../components/Loading";
import styles from "../../../components/ProductList.module.css";
import FilterBox from "../../../components/filterBox";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import usePagination from "../../../components/Pagination";

export async function getStaticProps() {
  const url = new URL("https://api.chec.io/v1/products");

  let params = {
    limit: "200",
    category_slug: "lences",
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

  const { data: products } = await fetch(url, {
    method: "GET",
    headers: headers,
  }).then((response) => response.json());

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

  const siteTitle = "Υγρά Φακών Επαφής";
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState(null);
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState("Όλα");
  const [polarized, setPolarized] = useState(false);
  const [polarizedProducts, setPolarizedProducts] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  let [page, setPage] = useState(1);
  const PER_PAGE = 24;
  const count = Math.ceil(filteredProducts.length / PER_PAGE);
  const _data = usePagination(filteredProducts, PER_PAGE);

  const handlePaginationChange = (e, p) => {
    setPage(p);
    data.jump(p);
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

  useEffect(() => {
    setLoading(true);
    setBrands(getBrands(filteredProducts));

    //setBrand(null);
    setLoading(false);
    return () => {
      setBrands({});
    };
  }, [filteredProducts]);

  //Filter category products by brand
  const filteredByBrand = function filterBrand(brand) {
    if (brand != null) {
      const filteredB = filteredProducts.filter((i) =>
        i.categories.some((j) => brand.slug.includes(j.slug))
      );
      return filteredB;
    } else return products;
  };
  //Intersection of filtered products by color and by brand
  function filterAll(byBrand) {
    let filterByAll = [];
    if (polarized === false) {
      if (color != "Όλα" && !brand) {
        byColor.map((i) => filterByAll.push(i));
      } else if (color === "Όλα" && brand) {
        byBrand.map((i) => filterByAll.push(i));
      } else if (color != "Όλα" && brand) {
        filterByAll = byColor.filter((i) => byBrand.includes(i));
      } else {
        filterByAll = products;
      }
    } else {
      filterByAll = filteredProducts.filter((i) =>
        i.categories.some((j) => j.slug === "polarised")
      );
      if (color != "Όλα" && !brand) {
        byColor.map((i) => filterByAll.push(i));
      } else if (color === "Όλα" && brand) {
        byBrand.map((i) => filterByAll.push(i));
      } else if (color != "Όλα" && brand) {
        filterByAll = byColor.filter((i) => byBrand.includes(i));
      }
    }

    return filterByAll;
  }
  useEffect(() => {
    setFilteredProducts(filterAll(filteredByBrand(brand)));
  }, [color, brand, polarizedProducts]);

  return (
    <>
      <Head>
        <title>{`${siteTitle} - Eyewear shop`}</title>
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
            onBrandChange={setBrand}
            onColorChange={setColor}
            onPolarizedChange={setPolarizedProducts}
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
