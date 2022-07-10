import ReactPlayer from "react-player";
import styles1 from "./layout.module.css";
import React from "react";
import { Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Loading from "./Loading";
import styles from "./ProductList.module.css";

export default function PopUpVideo() {
  const [url, setUrl] = React.useState("");
  const [showMenu, setShowMenu] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const handleClick = () => {
    showMenu === false ? setShowMenu(true) : setShowMenu(false);
  };
  const [play, setPlay] = React.useState(true);

  React.useEffect(() => {
    console.log(sessionStorage.getItem("popup"));
    setUrl(
      window.innerWidth < 600
        ? "https://www.dropbox.com/s/kgw6g9y50bvwcj1/10s%20XA_MARGA_MARCO_9-16_V9_1.mp4"
        : "https://www.dropbox.com/s/oix1tkw6g8e6sia/10s%20XA_MARGA_MARCO_16-9_V9_1.mp4"
    );
    setPlay(true);
    setShowMenu(sessionStorage.getItem("popup") ? false : true);
    localStorage.setItem("popup", JSON.stringify("played"));
  }, []);
  return (
    <Grid
      container
      className={`${styles.pdtImgDivZoomed} ${showMenu && styles.show}`}
    >
      <Grid className={styles.zoomedBox}>
        <div className={styles1.popUpVideo}>
          <ReactPlayer
            url={url}
            volume={0}
            width="100%"
            height="fit-content"
            controls={false}
            playing={play}
            loop={false}
            onPlay={() => {
              setLoading(false);
            }}
            
            onEnded={() => setShowMenu(false)}
          />
        </div>
        {loading && (
          <Grid
            sx={{
              width: "70%",
              margin: "auto",
              height: "600px",
              position: "absolute",
              top: "20px",
              right: '10%',
              left: '10%'
            }}
          >
            <Loading imgWidth='60%'/>
          </Grid>
        )}
        <CloseIcon
          onClick={handleClick}
          className={styles.myHover}
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "40px",
          }}
        />
      </Grid>
    </Grid>
  );
}
