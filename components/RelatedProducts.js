import Product from "./Product";
import styles from "./ProductList.module.css"
import Link from "next/link";
import Grid from "@mui/material/Grid"

function RelatedProducts({ products, type }) {
  if (!products || products.length === 0) return null;
  const availableColors='Διαθέσιμα χρώματα'
  const relatedProducts='Σχετικά προϊόντα'
  return (
    <div>
      <h3 className="w-1/3 md:w-full leading-tight md:leading-normal font-serif text-xl md:text-3xl">
        {type?relatedProducts:availableColors}
      </h3>

      <div className={styles.productList}>
        {products.map((product) => (
           <Grid  key={product.permalink}  className={styles.sampleProductBox}>
          <Link key={product.permalink} href={`/products/${product.permalink}`}>
            <a>
          <Product
            key={product.id}
            props={product}
          />
          </a>
          </Link>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;