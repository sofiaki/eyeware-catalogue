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
            src="/images/transitions/transitions-logo-1.png"
            width="30%"
          />
        </a>
      </Grid>
      <a href="/transitions">
        <Grid className={styles.promo}></Grid>
      </a>
      <Grid className={`${styles.promoTitle}`}>
        <a href="/transitions">
          <Typography variant="body">Explore </Typography>
          &nbsp;
          <Typography
            variant="body"
            sx={{ textDecoration: "underline" }}
          >
            Transitions
          </Typography>
        </a>
      </Grid>
    </>
  );
}
