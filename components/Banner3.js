import styles from "./autoSlider.module.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const images = [
  {
    img: "/images/banner/poseidon wide.jpg",
    imgMobile: "/images/banner/poseidon.jpg",
    name: "Poseidon II",
    brand: "/images/banner/zeus-dione.png",
    link: "products/MqnqCm",
  },
  {
    img: "/images/banner/wmorris.png",
    imgMobile: "/images/banner/william morris mobile.jpg",
    name: " ",
    brand: "/images/banner/wmorris.png",
    link: "categories/williammorris",
  },
  {
    img: "/images/banner/WOMEN-1920x480.jpg",
    imgMobile: "/images/banner/WOMEN-1920x480 mobile.png",
    name: "Alma",
    brand: "/images/banner/blackTransparent.png",
    link: "/products/FyUKmM",
  },
  {
    img: "/images/banner/banner-dark LOGO.png",
    imgMobile: "/images/banner/banner-dark mobile.png",
    name: "Xtractive Polarized",
    brand: "/images/transitions/logo-transitions-white-20.webp",
    link: "/transition/xtractive_polarized",
  },
  {
    img: "/images/banner/MELISSA C4 (B) WIDE.png",
    imgMobile: "/images/banner/MELISSA C4 (B) mobile.jpg",
    name: "Melissa",
    brand: "/images/banner/blackTransparent.png",
    link: "/products/4WOd9x",
  },
];
const delay = 5000;
import React from "react";

export default function Banner3() {
  const [index, setIndex] = React.useState(0);
  const [indexPr, setIndexPr] = React.useState(0);
  const [indexNx, setIndexNx] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const [mobile, setMobile] = React.useState(false)
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    window.innerWidth < 680 ? setMobile(true) : setMobile(false)
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    setIndexPr(index === 0 ? images.length - 1 : index - 1);
    setIndexNx(index === images.length - 1 ? 0 : index + 1);
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <a href={image.link}>
              <div className={styles.slideDiv}>
                {/* <div className={styles.slideDivImg}>
                  <img src={image.img} />
                </div> */}
                <img
                  src={mobile ? image.imgMobile : image.img}
                />
                {/* <div className={styles.slidesBrand2}>
                  <div className={styles.brandName}>
                    <p>{image.name}</p>
                  </div>
                  <div className={styles.brandImg}>
                    <img src={image.brand} />
                  </div>
                  <img src={image.brand} />
                </div> */}
              </div>
            </a>
          </div>
        ))}
      </div>
      <ArrowCircleLeftIcon
        sx={{
          border: "1px solid gray",
          borderRadius: "25px",
          fontSize: "48px",
          color: "rgba(80, 79, 79, 0.767)",
          position: "absolute",
          top: "50%",
          left: "10px",
          zIndex: "2",
          "&:hover": { fontSize: "50px", color: "rgba(120, 120, 120, 0.767)" },
        }}
        onClick={() => {
          setIndex(indexPr);
        }}
      />
      <ArrowCircleRightIcon
        sx={{
          border: "1px solid gray",
          borderRadius: "25px",
          fontSize: "48px",
          color: "rgba(80, 79, 79, 0.767)",
          position: "absolute",
          top: "50%",
          right: "10px",
          zIndex: "2",
          "&:hover": { fontSize: "50px", color: "rgba(120, 120, 120, 0.767)" },
        }}
        onClick={() => {
          setIndex(indexNx);
        }}
      />
      <div></div>
    </div>
  );
}
