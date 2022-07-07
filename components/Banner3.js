import styles from "./autoSlider.module.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const images = [
  {
    img: "/images/banner/poseidon.jpg",
    name: "Poseidon II",
    brand: "/images/banner/zeus-dione.png",
    link: "products/MqnqCm",
  },
  {
    img: "/images/banner/WILLIAM MORRIS 50164 C3.jpg",
    name: " ",
    brand: "/images/banner/wmorris.png",
    link: "products/OjZ9pO",
  },
  {
    img: "/images/banner/MELISSA C4 (B).jpg",
    name: "Melissa",
    brand: "/images/banner/blackTransparent.png",
    link: "/products/4WOd9x",
  },
  {
    img: "/images/transitions/banner-dark.jpg",
    name: "Xtractive Polarized",
    brand: "/images/transitions/logo-transitions-white-20.webp",
    link: "/transition/xtractive_polarized",
  },
  {
    img: "/images/banner/ONYX.jpg",
    name: "Onyx",
    brand: "/images/banner/blackTransparent.png",
    link: "/products/owHS91",
  },
];
const delay = 5000;
import React from "react";

export default function Banner3() {
  const [index, setIndex] = React.useState(0);
  const [indexPr, setIndexPr] = React.useState(0);
  const [indexNx, setIndexNx] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    setIndexPr(index == 0 ? images.length - 1 : index - 1);
    setIndexNx(index == images.length - 1 ? 0 : index + 1);
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
                <div className={styles.slideDivImg}>
                  <img src={image.img} />
                </div>
                <div className={styles.slidesBrand}>
                  <div className={styles.brandName}>
                    <p>{image.name}</p>
                  </div>
                  <div className={styles.brandImg}>
                    <img src={image.brand} />
                  </div>
                </div>
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
        }}
        onClick={() => {
          setIndex(indexNx);
        }}
      />
      <div></div>

      {/*<div className={styles.slideshowDots}>
        {images.map((_, idx) => (
        
          <div
            key={idx}
            className={`${styles.slideshowDot} ${index === idx ? styles.active : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
          </div>*/}
    </div>
  );
}
