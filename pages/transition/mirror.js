import React from "react";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Head from "next/head";
import Footer from "../../components/footer";
import { useInView } from "react-intersection-observer";
import Filler from "../../components/filler";
import Link from "@mui/material/Link";
import TransLinks from "../../components/TransLinks";


const SignatureG8 = () => {
  const siteTitle = "Eyewear shop";

  return (
    <>
      <Head>
        <title>{siteTitle} - Transitions</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <Layout />
        <Grid className={`${styles.container} ${styles.mainContent}`}>
          <div className={styles.transLogo}>
            <img src="/images/transitions/logo-transitions-white-20.png" width="100%" />
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Style Mirrors
            </Typography>
          </div>
          <Grid className={styles.section}>
            <Grid className={styles.subSection}>
              <div>
                Τα Τransitions style mirrors δίνουν μία νέα διάσταση στους
                φακούς ηλίου, καθώς εμπεριέχουν την τεχνολογία Xtractive.
                Απευθύνεται σε εκείνους/ες που θέλουν να ξεχωρίζουν με το στυλ
                τους, αλλά παράλληλα να είναι προστατευμένοι όλη τη διάρκεια της
                ημέρας. <b>Πώς ακριβώς λειτουργούν?</b> Όταν οι φακοί flash to
                mirrors βρίσκονται σε εσωτερικό χώρο έχουν μία σχεδόν ιριδίζουσα
                λάμψη και όταν εκτεθούν στο ηλιακό φως μετατρέπονται σε φακούς
                ηλίου με έναν εξαιρετικής ποιότητας καθρέπτη.
              </div>
              <div className={styles.section}>
                <ol type="I">
                  <li>
                    Μείωση του ηλιακού θάμβους και με μέγιστη σκουρότητα 95%
                    (κατηγορίας D)
                  </li>
                  <li>Μείωση του μπλε φωτός κατά 20%</li>
                  <li>
                    Λόγω της τεχνολογίας Xtractive επιτυγχάνουν μέγιστη
                    σκουρότητα έως και 70% ακόμα και μέσα στο αυτοκίνητο.
                  </li>
                  <li>Προστασία 100% από UVA/UVB</li>
                  <li>
                    Άμεση ανταπόκριση στο φυσικό φως, με τους φακούς να αποκτούν
                    τη δυναμική λάμψη του εκάστοτε καθρέπτη
                  </li>
                </ol>
              </div>
            </Grid>
            <Grid className={styles.subSection}>
              <img
                className={styles.transTextImg}
                src="../../images/transitions/mirror1.png"
                width="100% "
                height="60%"
              />
            </Grid>
          </Grid>
          <Grid className={styles.section}>
            <Grid className={styles.subSection}>
              <img
                className={styles.transTextImg}
                src="../../images/transitions/mirror2.png"
                width="100%"
                height="60%"
              />
            </Grid>
            <Grid className={styles.subSection}>
              <Grid>
                <Typography variant="body">
                  <b>Διατίθενται σε 4 αποχρώσεις: </b>
                </Typography>
                <Grid className={styles.colorSamplesXtractive}>
                  <img
                    src="../../images/transitions/mirror-shadow-silver.png"
                    width="40%"
                  ></img>
                  <Grid>Shadow Silver</Grid>
                </Grid>

                <Grid className={styles.colorSamplesXtractive}>
                  <img
                    src="../../images/transitions/mirror-gold.png"
                    width="40%"
                  ></img>
                  <Grid>Gold</Grid>
                </Grid>

                <Grid className={styles.colorSamplesXtractive}>
                  <img
                    src="../../images/transitions/mirror-blue.png"
                    width="40%"
                  ></img>
                  <Grid>Royal Blue</Grid>
                </Grid>
                <Grid className={styles.colorSamplesXtractive}>
                  <img
                    src="../../images/transitions/mirror-pink.png"
                    width="40%"
                  ></img>
                  <Grid>Gold Pink</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <TransLinks />
        </Grid>
        <Grid height="100px"></Grid>
        <Footer />
      </StyledEngineProvider>
    </>
  );
};
export default SignatureG8;
