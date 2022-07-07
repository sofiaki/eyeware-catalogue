import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../components/layout.module.css"
import { useInView } from "react-intersection-observer";

function TransLinks() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const transImgs = inView
    ? `${styles.transImgs} ${styles.toRight}`
    : `${styles.transImgs}`;

  const links = [
    {
      link: "/transition/signatureg8",
      img: "/images/xSignature-GEN8.jpg.pagespeed.ic.zs5iidKpFY.webp",
      text: "Transitions Signature®",
    },
    {
      link: "/transition/xtractive",
      img: "/images/xTransitions_XTRActive.jpg.pagespeed.ic.f4vGycgiCY.webp",
      text: "Transitions Xtractive®",
    },
    {
      link: "/transition/mirror",
      img: "/images/xTransitions-Style-Mirror-1.jpg.pagespeed.ic.ppxVxSZrc4.webp",
      text: "Transitions Mirror®",
    },
    {
      link: "/transition/xtractive_polarized",
      img: "/images/transitions/polarized-dark.jpg",
      text: "Xtractive Polarized",
    },
  ];
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      mt="80px"
      className={transImgs}
      display="flex"
      justifyContent="space-evenly"
      ref={ref}
    >
      {links.map((i) => (
        <Link key={i.text} href={i.link} sx={{ color: "white" }}>
          <div className={`${styles.transBox} ${styles.myHover}`}>
            
              <img
                className={styles.transImg}
                src={i.img}
                alt={i.text}
              ></img>
            <div className={styles.transDescr}>
              <Typography variant="body">{i.text}</Typography>
            </div>
          </div>
        </Link>
      ))}
    </Grid>
  );
}
export default TransLinks;