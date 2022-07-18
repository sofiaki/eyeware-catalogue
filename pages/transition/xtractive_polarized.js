import React from "react";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Head from "next/head";
import Footer from "../../components/footer";
import TransLinks from "../../components/TransLinks";
import ReactPlayer from "react-player";
import Filler from "./../../components/filler"
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
            {/* <img src="/images/Transitions-logo_White.png" width="100%" />
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Xtractive®
  </Typography>*/}
            <img
              src="/images/transitions/logo-polarized-cropped.webp"
              width="100%"
            ></img>
          </div>
          <Grid className={styles.section} >
            <Grid sx={{}}>
              <Grid sx={{ height: "400px", margin: '40px 0', position: 'relative' }}>
                <div className={styles.xtractivePolarizedClear}></div>
                <div className={styles.xtractivePolarizedDark}></div>
              </Grid>
              
              <div>
                <p>
                  Τα Transitions Xtractive Polarized ήρθαν στην Ελλάδα και είναι
                  γεγονός. Οι μοναδικοί λευκοί και ταυτόχρονα πολωτικοί
                  φωτοχρωμικοί φακοί στον κόσμο.
                </p>

                <p>
                  Οι φακοί XTRActive Polarized είναι οι πρώτοι που από σχεδόν
                  λευκοί (με μια ελαφριά απόχρωση προστασίας) σε εσωτερικούς
                  χώρους, γίνονται xtra σκούροι και πολωτικοί εξωτερικά,
                  προσφέροντας στα μάτια σας όραση υψηλής ευκρίνειας σε συνθήκες
                  έντονου θάμβους και έντονων αντανακλάσεων.
                </p>
                <p>
                  Οι συγκεκριμένοι φακοί μπλοκάρουν 100% τις UVA και UVB ακτίνες
                  για να προστατεύσουν τα μάτια σας από τις βλαβερές συνέπειες
                  της υπεριώδους ακτινοβολίας που εκπέμπει ο ήλιος. Επιπρόσθετα,
                  φιλτράρουν το επιβλαβές μπλε φως (35% σε εσωτερικό χώρο - έως
                  95% σε εξωτερικό χώρο) που εκπέμπουν οι λάμπες led, οι
                  ψηφιακές συσκευές εσωτερικά και το ηλιακό φως εξωτερικά.
                  Τέλος, η πολωτική απόδοση που παρέχουν προσφέρουν στα μάτια
                  σας έξτρα προστασία σε εσωτερικό, σε εξωτερικό χώρο και στο
                  αυτοκίνητο (επιτρέποντας τη θέαση των οθονών).
                </p>
                <p>
                  Τα οφέλη από την επιλογή και τη χρήση των συγκεκριμένων φακών
                  είναι πολλαπλά, καθώς τα χρώματα παραμένουν ζωντανά, η διαυγής
                  όραση και οι λεπτομέρειες ενισχύονται. Επιπλέον, σας
                  επιτρέπουν να βλέπετε ακόμα και σε επιφάνειες με έντονες
                  αντανακλάσεις όπως: τα παράθυρα, το νερό ή το χιόνι για
                  επιπλέον οπτική άνεση σε κάθε συνθήκη φωτισμού ακόμα και στο
                  αυτοκίνητο.
                </p>
              </div>
              <Filler />
              <div className={styles.video}>
                <ReactPlayer
                  url="https://www.dropbox.com/s/k2ke11wa9ne9erj/XTRActive%20Polarized_Technology%20Video_Landscape_English%20US_Final.mp4"
                  volume={0.1}
                  width="100%"
                  controls={true}
                  playing={true}
                  loop={false}
                />
              </div>
              <Filler />
              <div>
                <Typography variant="body" fontWeight="bold">Τι προσφέρουν οι φακοί Xtractive Polarized</Typography>
                <ol type="I">
                  <li>Προστασία από το μπλέ-ιώδες φως</li>
                  <li>Βελτιώνει την αντίληψη των χρωμάτων</li>
                  <li>
                    Χρώματα με φως. (Διαφανείς φακοί σε εσωτερικούς χώρους και
                    έγχρωμοι όταν εκτίθενται στον ήλιο)
                  </li>
                  <li>
                    Βελτιώνει τη οπτική άνεση σε εσωτερικούς χώρους. (Μικρή
                    προστατευτική απόχρωση που μετριάζει το θάμβος από τον
                    σύγχρονο εσωτερικό σκληρό και έντονο φωτισμό)
                  </li>
                  <li>
                    Μειώνει το θάμβος. (Σκούροι φακοί στον ήλιο για άνετη όραση)
                  </li>
                  <li>
                    Προστατεύει από την UV ακτινοβολία. (Προστατεύει τα μάτια
                    σας από τις ακτίνες UVA και UVB)
                  </li>
                  <li>
                    Ενεργοποιείται στο αυτοκίνητο. (Οι φακοί ενεργοποιούνται με
                    το φως του ήλιου ακόμα και όταν βρίσκεστε μέσα στο
                    αυτοκίνητο)
                  </li>
                </ol>
              </div>
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
