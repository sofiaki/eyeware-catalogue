import Link from "next/link";
import Product from "./Product";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import styles from "./ProductList.module.css"

export default function SampleProductList({ products }) {
  if (!products) return null;

  const sample= products
  

  return (
    <Grid className={styles.sampleArea}>
      <Typography variant="h5">Νέα Προϊόντα</Typography>
      <Grid item  xs={12} md={12} lg={12} className={styles.sampleProductList}>
          
      {sample.map((product) => (
          <Grid  key={product.permalink}  className={styles.sampleProductBox}>       
            <Link key={product.permalink} href={`/products/${product.permalink}`}>
              <a>
                <Product props={product} />
              </a>
            </Link>
            </Grid>
        ))}
      </Grid>
    </Grid>
  );
}