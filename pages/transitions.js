import React from "react";
import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Head from "next/head";
import ReactPlayer from "react-player";
import Footer from "../components/footer";
import { useInView } from "react-intersection-observer";
import TransLinks from "../components/TransLinks";

const Transitions = () => {
  const siteTitle = "Οπτικά Όραση";
  const [play, setPlay] = React.useState(true);

  React.useEffect(() => {
    setPlay(true), [play];
  });
  return (
    <>
      <Head>
        <title>{siteTitle} - Transitions</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <Layout />
        <div className={styles.video}>
          <ReactPlayer
            url="https://www.dropbox.com/s/zdqljzlfr0uk5bg/Transitions-Lenses-Commercial---Light-Under-Control---Meet-Yoon.mp4"
            volume={0.2}
            width="100%"
            height="100%"
            playing={play}
            loop={false}
          />
        </div>
        <Grid className={`${styles.container} ${styles.mainContent}`}>
          <div className={styles.transLogo}>
            <img
              src="/images/transitions/logo-transitions-white-20.webp"
              width="100%"
            />
          </div>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            ΤΟ ΦΩΣ ΣΤΗ ΖΩΗ ΜΑΣ
          </Typography>
          <Grid container display="flex" justifyContent="space-between">
            <Grid className={styles.section}>
              <Grid className={styles.subSection60}>
                <h3>TRANSITIONS ΦΑΚΟΙ ΟΡΑΣΕΩΣ & ΗΛΙΟΥ</h3>
                <Typography variant="body">
                  Το φως είναι απαραίτητο για την όρασή και τη γενική ευεξία
                  μας. Μελέτες έχουν δείξει ότι μέρος του φάσματος του φωτός που
                  εισέρχεται στα μάτια μας, μπορεί να είναι ένας παράγοντας
                  εμφάνισης οφθαλμικών παθήσεων όπως: ο καταρράκτης και η ωχρά
                  κηλίδα. Καινοτόμες λύσεις παρέχουν πλέον στους ανθρώπους τη
                  δυνατότητα να προστατεύον τα μάτια τους από εξωγενείς
                  παράγοντες.
                </Typography>
              </Grid>
              <Grid className={styles.subSection40}>
                <img
                  src="/images/transitions/Photochromic.gif"
                  width="90%"
                ></img>
              </Grid>
            </Grid>
            <Grid item className={styles.section}>
              <Grid className={styles.subSection40}>
                <img src="/images/transitions/LAYERS.png" width="80%"></img>
              </Grid>
              <Grid className={styles.subSection60}>
                <h3>ΤΕΧΝΟΛΟΓΙΑ TRANSITIONS G8</h3>
                <Typography variant="body">
                  Μια τέτοια επαναστατική νανοτεχνολογία είναι αυτή των
                  transitions. Οι φακοί transitions "δουλεύουν" για τα μάτια
                  σας, καθώς λειτουργούν ως ρυθμιστές του φωτός που εισέρχεται
                  σε αυτά.
                  <b> Πώς ακριβώς λειτουργούν?</b> Δισεκατομμύρια μόρια που δεν
                  είναι ορατά,όταν εκτεθούν στο υπεριώδες φως,η δομή των μορίων
                  αυτών δημιουργρί μία χημική αντίδραση και αλλάζει σχήμα,ώστε
                  να σκουραίνει ο φακός με μία ομοιόμορφη απόχρωση. Όταν πάλι
                  δεν εκτεθούν στο υπεριώδες φως ή βρεθούν σε πιο σκοτεινό
                  περιβάλλον, τότε τα μόρια παραμένουν ή επανέρχονται αντίστοιχα
                  στηη συνήθη μορφή τους και οι φακοί είναι πάλι λευκοί.
                </Typography>
              </Grid>
            </Grid>
            <Grid className={styles.section}>
              <Grid className="styles.subsection">
                <h3>ΟΦΕΛΗ ΤΩΝ TRANSITIONS ΦΑΚΩΝ</h3>
                <Typography variant="body">
                  Οι απαιτήσεις της καθημερινότητας έχουν αυξηθεί θέτοντας σε
                  όλους μας νέες προκλήσεις. Οι φακοί transitions είναι έτοιμοι
                  να σας προσφέρουν άνετη-προστατευμένη και ξεκούραστη όραση.
                  Σκεφτείτε πόσες φορές έχετε φορέσει ή βγάλει τα γυαλιά από τα
                  μάτια σας ανάλογα με τις συνθήκες φωτισμού! Οι φακοί αυτοί
                  προσαρμόζονται άμεσα στο μεταβάλλομενο φως,δημιουργώντας την
                  τέλεια απόχρωση ανάλογα με την φωτεινότητα του περιβάλλοντος.
                  Με αυτό τον τρόπο έχετε προστασία από τον ήλιο και από τις
                  επιβλαβείς ακτινοβολίες UVA/UVB. Η προστασία τους όμως δεν
                  σταματάει εκεί καθώς με τη γρήγορη τεχνολογία
                  αποχρωματισμού,προστατεύον τα μάτια σας από το επιβλαβές φως
                  συμπεριλαμβανομένου του υπεριώδους αλλά και του μπλε-μοβ
                  φωτός.
                </Typography>
              </Grid>
            </Grid>
            <TransLinks />
          </Grid>
        </Grid>
        <Grid height="100px"></Grid>
        <Footer />
      </StyledEngineProvider>
    </>
  );
};
export default Transitions;
