// pages/categories/[slug].js
import commerce from "../../lib/commerce";
import ProductList from "../../components/ProductList";
import React from "react";
import { Grid, Typography } from "@mui/material";
import Layout from "../../components/layout";
import Footer from "../../components/footer";
import styles from "../../components/ProductList.module.css";
import FilterBox from "../../components/filterBox";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import Link from "next/link";
import usePagination from "../../components/Pagination";

export async function getStaticProps({ params }) {
  const { slug } = params;
  /*
  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });
*/
  const url = new URL("https://api.chec.io/v1/categories/" + slug);

  let param = {
    type: "slug",
  };
  Object.keys(param).forEach((key) => url.searchParams.append(key, param[key]));

  let headers = {
    "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const category = await fetch(url, {
    method: "GET",
    headers: headers,
  }).then((res) => res.json());
  const { data: myproducts } = await commerce.products.list({
    limit: 200,
  });
  const products = myproducts
    ? myproducts.filter((i) => i.categories.some((j) => j.slug === slug))
    : null;
  return {
    props: {
      category,
      products,
    },
  };
}
// pages/categories/[slug].js
export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list({
    limit: 100,
  });

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export default function CategoryPage({ category, products }) {
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

  const [brands, setBrands] = useState([]);
  const [kind, setKind] = React.useState(null);
  const [brand, setBrand] = React.useState(null);

  const [filteredProducts, setFilteredProducts] = useState(products);

  let [page, setPage] = useState(1);
  const PER_PAGE = 24;
  const count = Math.ceil(filteredProducts.length / PER_PAGE);
  const _data = usePagination(filteredProducts, PER_PAGE);

  const handlePaginationChange = (e, p) => {
    setPage(p);
    _data.jump(p);
  };

  function filter() {
    if (!brand && (!kind || kind === "all")) {
      return category.slug;
    }
    if (!brand && kind) {
      return [category.slug, kind];
    }
    if (brand && (!kind || kind === "all")) {
      return [category.slug, brand.slug];
    }
    if (brand && kind) {
      return [category.slug, kind, brand.slug];
    }
  }
  const filtered = filter();

  /* Get the brands of this category's products */
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
          "polarised",
          "clipon",
          "transition",
        ].includes(j.slug) &&
          !brands.some((b) => b.slug === j.slug) &&
          brands.push(j);
      })
    );

    return brands;
  }

  React.useEffect(() => {
    setPage(1);
  }, [kind, brand]);

  React.useEffect(() => {
    setBrands(getBrands(products));
    setBrand(null);
    setKind(null);
    return () => {
      setBrands({});
    };
  }, [category /*kind*/]);
  const sunglasses = category && category.slug === "sunglasses";
  const glasses = category && category.slug === "glasses";

  return (
    <>
      <Layout />
      <Grid className={styles.slugcontainer}>
        <Typography variant="h5" className={`${styles.catTitle}`}>
          {category.name}
        </Typography>
        {sunglasses && (
          <Grid className={`${styles.paginator}`}>
            <Link href="/categories/sunglasses/woman">
              <Grid
                sx={{ borderBottom: "none", fontWeight: "bold" }}
                className={`${styles.myHover}`}
                variant="body"
              >
                Γυναικεία Γυαλιά Ηλίου
              </Grid>
            </Link>
            <Link href="/categories/sunglasses/man">
              <Grid
                sx={{ borderBottom: "none", fontWeight: "bold" }}
                className={`${styles.myHover}`}
                variant="body"
              >
                Αντρικά Γυαλιά Ηλίου
              </Grid>
            </Link>
            <Link href="/categories/sunglasses/kid">
              <Grid
                sx={{ borderBottom: "none", fontWeight: "bold" }}
                className={`${styles.myHover}`}
                variant="body"
              >
                Παιδικά Γυαλιά Ηλίου
              </Grid>
            </Link>
          </Grid>
        )}
        {glasses && (
          <Grid className={`${styles.paginator}`}>
            <Link href="/categories/glasses/woman">
              <Grid
                sx={{ borderBottom: "none", fontWeight: "bold" }}
                className={`${styles.myHover}`}
                variant="body"
              >
                Γυναικεία Γυαλιά Οράσεως
              </Grid>
            </Link>
            <Link href="/categories/glasses/man">
              <Grid
                sx={{ borderBottom: "none", fontWeight: "bold" }}
                className={`${styles.myHover}`}
                variant="body"
              >
                Αντρικά Γυαλιά Οράσεως
              </Grid>
            </Link>
            <Link href="/categories/glasses/kid">
              <Grid
                sx={{ borderBottom: "none", fontWeight: "bold" }}
                className={`${styles.myHover}`}
                variant="body"
              >
                Παιδικά Γυαλιά Οράσεως
              </Grid>
            </Link>
          </Grid>
        )}
        {
          <FilterBox
            category={category}
            brands={brands}
            onBrandChange={setBrand}
            onKindChange={setKind}
          />
        }
        {
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
        }
      </Grid>
      <Footer />
    </>
  );
}
