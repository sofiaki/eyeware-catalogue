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
            {/*<img src="/images/Transitions-logo_White.png" width="100%" />
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              SignatureG8
            </Typography>*/}
            <img src="/images/transitions/gen8_logo.webp" width="100%"></img>
          </div>
          <Grid className={styles.section}>
            <Grid className={styles.subSection}>
              <div>
                Η καινοτόμα αυτή τεχνολογία έχει ως αποτέλεσμα όταν οι φακοί
                βρεθούν στο υπεριώδες και το ορατό φως, να ενεργοποιούνται
                αμέσως προσφέροντας άνεση και ποιότητα στην όραση σε οποιαδήποτε
                συνθήκη φωτισμού. Ο πιο γρήγορος αποχρωματισμός που έχει
                επιτευχθεί μέχρι σήμερα είναι στα 4min μετατρέποντας σταδιακά
                τους φακούς στην αρχική διαυγή κατάστασή τους.
              </div>
              <div className={styles.section}>
                <u>
                  {" "}
                  Οι φακοί
                  <b> SignatureG8</b> μπορούν να χρησιμοποιηθούν με ή χωρίς
                  οφθαλμική διόρθωση.
                </u>
              </div>
              <div>
                <ol type="I">
                  <li>Προστασία από το μπλέ-ιώδες φως</li>
                  <li> Βελτίωση στην αντίληψη των χρωμάτων</li>
                  <li>
                    Διαφανείς φακοί σε εσωτερικό χώρο,σκούροι όταν εκτεθούν στον
                    ήλιο
                  </li>
                  <li>Μείωση του οπτικού θάμβους </li>
                  <li> Προστασία από τις UVA/UNB ακτινοβολίες</li>
                  <li>
                    Είναι κατάλληλοι για κάθε ηλικία, συμπεριλαμβανομένων και
                    των παιδιών
                  </li>
                </ol>
              </div>
            </Grid>
            <Grid className={styles.subSection}>
              <img
                className={styles.transTextImg}
                src="../../images/transitions/gen81.png"
                width="100% "
              />
            </Grid>
          </Grid>
          <Grid className={styles.section}>
            <Grid className={styles.subSection}>
              <img
                className={styles.transTextImg}
                src="../../images/transitions/gen2.png"
                width="100%"
              />
            </Grid>
            <Grid className={styles.subSection}>
              <Grid>
                <Typography variant="body">
                  <b>Διατίθενται σε 3 αποχρώσεις: </b>
                </Typography>
                <Grid className={styles.colorSamplesG8}>
                  <img
                    src="../../images/transitions/glass-gray.svg"
                    width="100%"
                  ></img>
                  <Grid>Grey</Grid>
                </Grid>

                <Grid className={styles.colorSamplesG8}>
                  <img
                    src="../../images/transitions/glass-brown.svg"
                    width="100%"
                  ></img>
                  <Grid>Brown</Grid>
                </Grid>

                <Grid className={styles.colorSamplesG8}>
                  <img
                    src="../../images/transitions/glass-transparent-graphite-green.svg"
                    width="100%"
                  ></img>
                  <Grid>Graphite green</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{marginTop: '60px'}}>
            <Grid className={styles.stylesColor}>
            <img
              src="/images/transitions/logo-style-colors1.svg"
            ></img>
            </Grid>
            <h4>
              Η σειρά SignatureG8 τώρα διατίθεται σε 4 νέα ζωντανά χρώματα
            </h4>
          </Grid>
          <Grid className={styles.subSection} display="flex">
          <Grid
          >
            <Grid sx={{textAlign: 'center', margin: '15px'}}>
              <img
                src="../../images/transitions/glass-emerald.svg"
                width="100%"
              ></img>
              <Grid>Emerald</Grid>
            </Grid>
            <Grid sx={{textAlign: 'center', margin: '15px'}}>
              <img
                src="../../images/transitions/glass-sapphire.svg"
                width="100%"
              ></img>
              <Grid>Sapphire</Grid>
            </Grid>
            </Grid>
            <Grid
          >
            <Grid sx={{textAlign: 'center', margin: '15px'}}>
              <img
                src="../../images/transitions/glass-amethyst.svg"
                width="100%"
              ></img>
              <Grid>Amethyst</Grid>
            </Grid>

            

            <Grid sx={{textAlign: 'center', margin: '15px'}}>
              <img
                src="../../images/transitions/glass-mirror-amber.svg"
                width="100%"
              ></img>
              <Grid>Amber</Grid>
            </Grid>
            
          </Grid>
          </Grid>
          <Grid sx={{ marginTop: "40px" }}>
            <img src="/images/transitions/style-colors.png" width="100%"></img>
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
