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
  const siteTitle = "Οπτικά Όραση";

  return (
    <>
      <Head>
        <title>{siteTitle} - Transitions</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <Layout />
        <Grid className={`${styles.container} ${styles.mainContent}`}>
          <div className={styles.transLogo}>
           {/* <img src="/images/Transitions-logo_White.png" width="100%" />
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Xtractive®
  </Typography>*/}
            <img src="/images/transitions/logo-xtractive.webp" width="100%"></img>
          </div>
          <Grid className={styles.section}>
            <Grid className={styles.subSection}>
              <div>
                <p>
                  {" "}
                  Οι φακοί transitions Xtractive σχεδιάστηκαν για να παρέχουν
                  ακόμα μεγαλύτερη σκουρότητα στους φωτοχρωμικούς φακούς, ακόμα
                  και όταν αυτοί δεν εκτίθενται άμεσα στη UV ακτινοβολία ή πίσω
                  από το παρμπρίζ ενός αυτοκινήτου. Ιδανική λύση για οδηγούς που
                  περνάνε πολλές ώρες μέσα στο αυτοκίνητο,παρέχοντάς τους
                  προστασία 100% από τις UVA/UVB ακτινοβολίες και δίνοντας άνετη
                  και ξεκούραστη οπτική απόδοση χωρίς θάμβος και αντανακλάσεις.
                </p>
                <p>
                  Επιπλέον, διατηρούν έναν προστατευτικό χρωματισμό σε
                  εσωτερικούς χώρους -έναντι των Signature G8- προστατεύοντας
                  παράλληλα τους διοπτροφόρους από το επιβλαβές μπλε-ιώδες φως
                  που προέρχεται από πλήθος εσωτερικών ή εξωτερικών παραγόντων
                  όπως: ο ήλιος, tablets, υπολογιστές, smartphones.
                </p>
              </div>
              <div className={styles.section}>
                <u>
                  Οι φακοί
                  <b> Xtractive®</b> μπορούν να χρησιμοποιηθούν με ή χωρίς
                  οφθαλμική διόρθωση.
                </u>
              </div>
              <div>
                <ol type="I">
                  <li>Προστασία από το μπλέ-ιώδες φως</li>
                  <li>
                    Μειώνει το θάμβος και πρστατεύουν από τις UVA/UVB
                    ακτινοβολίες
                  </li>
                  <li>Βέλτιστη ποσότητα φωτισμού φτάνει στα μάτια σας</li>
                  <li>Άνετη και ποιοτική όραση</li>
                  <li>Διαφανείς φακοί σε εσωτερικό χώρο,σκούροι όταν εκτεθούν
                    στον ήλιο
                  </li>
                  <li>Επιλογή ανάμεσα σε 3 διαφορετικά χρώματα</li>
                </ol>
              </div>
            </Grid>
            <Grid className={styles.subSection}>
              <img
                className={styles.transTextImg}
                src="../../images/transitions/graphite-green-glasses.gif"
                width="100%"
              />
            </Grid>
          </Grid>
          <Grid className={styles.section}>
            <Grid className={styles.subSection}>
              <img
                className={styles.transTextImg}
                src="../../images/transitions/xtractive2.jpg"
                width="100%"
              />
            </Grid>
            <Grid className={styles.subSection}>
              <Grid>
                <Typography variant="body">
                  <b>Διατίθενται σε 3 αποχρώσεις: </b>
                </Typography>
                <Grid className={styles.colorSamplesXtractive}>
                  <img
                    src="../../images/transitions/xtractive-gray.webp"
                    width="100%"
                  ></img>
                  <Grid>Grey</Grid>
                </Grid>

                <Grid className={styles.colorSamplesXtractive}>
                  <img
                    src="../../images/transitions/xtractive-brown.webp"
                    width="100%"
                  ></img>
                  <Grid>Brown</Grid>
                </Grid>

                <Grid className={styles.colorSamplesXtractive}>
                  <img
                    src="../../images/transitions/xtractive-green.webp"
                    width="100%"
                  ></img>
                  <Grid>Graphite green</Grid>
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
