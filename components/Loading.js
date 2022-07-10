import Grid from "@mui/material/Grid";
import styles from "../components/ProductList.module.css"


export default function Loading(props){
    
return(
<Grid container>
    <img className={styles.loadingImg} src="/images/loading1.png" width={props.imgWidth} ></img>
</Grid>)
}