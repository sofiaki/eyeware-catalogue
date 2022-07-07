import ReactPlayer from "react-player";
import styles from "./layout.module.css";
import React from "react";
import Grid from "@mui/material/Grid" 
import { Typography } from "@mui/material";

export default function Video2() {
  const [play, setPlay] = React.useState(true);

  React.useEffect(() => {
    setPlay(true)
  });
  return (
    <Grid className={styles.videoSection}>
        <Grid className={styles.videoBrand}>
            <img src="/images/banner/zeus-dione.png" width="100%"></img>
            <Grid>
                <Typography variant="body">Eris</Typography>
            </Grid>
        </Grid>
      <div className={styles.video}>
        <ReactPlayer
          url="https://www.dropbox.com/s/y138955qrk0o53f/znd16%20%283%29.mp4?dl=0"
          volume={0}
          width="100%"
          height="fit-content"
          controls={false}
          playing={true}
          loop={true}
        />
      </div>
    </Grid>
  );
}
