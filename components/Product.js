import styles from "./ProductList.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Product({ props }) {
  //console.log(brand[0].name)
  let brand = null;
  props.categories && props.categories.map((j) => {
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
        "transition"
      ].includes(j.slug) && (brand = j.name);
    })
    function capitalize(words) {
      var separateWord = words.toLowerCase().split(' ');
      for (var i = 0; i < separateWord.length; i++) {
         separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
         separateWord[i].substring(1);
      }
      return separateWord.join(' ');
   }
  const brandName = brand && capitalize(brand)
  const productName = brand?props.name.replace(brand, ""):capitalize(props.name);
  return (
    <>
      <Grid className={styles.product}>
        {props.inventory &&
          props.inventory.available != null &&
          props.inventory.available == 0 && (
            /*<img className={styles.soldOut} src="/images/soldOut.png" />*/
            <Grid className={styles.soldOut}>Χαμηλή διαθεσιμότητα</Grid>
          )}
        <Grid item container className={styles.productImgBox}>
          <img
            alt="complex"
            src={props.image?.url}
            className={styles.productImg}
          />
        </Grid>
        <Grid item container xs={12} lg={12} className={styles.productTitle}>
          <Grid>
            <Typography sx={{ fontSize: "22px", fontFamily: "Roboto" }}>
              {brandName}
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="body">{productName}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
