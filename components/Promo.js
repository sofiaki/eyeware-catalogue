import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./layout.module.css";
import { Typography } from "@mui/material";

export default function Promo() {
  return (
    <>
      <Grid className={`${styles.promoTitle}`}>
        <a href="/transitions">
          <img
            src="/images/transitions/logo-transitions-white-20.webp"
            width="30%"
          />
        </a>
      </Grid>
      <a href="/transitions">
        <Grid className={styles.promo}></Grid>
      </a>
      <Grid className={`${styles.promoTitle}`}>
        <a href="/transitions">
          <Typography variant="body">Ανακαλύψτε τους φακούς</Typography>
          &nbsp;
          <Typography
            variant="body"
            sx={{ textDecoration: "underline", color: "#3030cc" }}
          >
            Transitions
          </Typography>
        </a>
      </Grid>
    </>
  );
}
