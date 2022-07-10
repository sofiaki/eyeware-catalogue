import styles from "./autoSlider.module.css"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import React from 'react'
const delay = 5000;

export default function ProductImageSlider({images}) {
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
      setIndexPr(index === 0? images.length-1 :  index-1)
      setIndexNx(index === images.length-1? 0 : index+1)
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
          <img src={image.url}/>
          </div>
        ))}
        
      </div>
      <ArrowCircleLeftIcon
          sx={{border: '1px solid gray', borderRadius: '25px', fontSize: '48px', color: 'rgba(80, 79, 79, 0.767)', position: "absolute", top: '50%', left: '10px', zIndex: '2'}}
            onClick={() => {
              setIndex(indexPr);
            }}
          />
        <ArrowCircleRightIcon
            sx={{border: '1px solid gray', borderRadius: '25px', fontSize: '48px', color: 'rgba(80, 79, 79, 0.767)', position: "absolute", top: '50%', right: '10px', zIndex: '2'}}
            onClick={() => {
              setIndex(indexNx);
            }}
          />
      <div>
      
          
      </div>
      
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