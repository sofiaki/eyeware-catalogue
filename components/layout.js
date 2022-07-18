import styles from "./layout.module.css";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import Header from "./header";

const siteTitle = "Eyewear shop";
const mainHeader = `${styles.header}`;

export default function Layout({ children }) {
  const [scrollUp, setScrollUp] = React.useState(false);
  const [scrollDown, setScrollDown] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [prevDirection, setPrevDirection] = React.useState(-1);

  const toggleScroll = () => {
    if (direction != prevDirection) {
      if (
        scroll > window.scrollY &&
        window.scrollY < 150 &&
        window.scrollY > 100
      ) {
        setScrollUp(true);
        setScrollDown(false);
        setDirection(2);
      } else if (scroll < window.scrollY && window.scrollY > 100) {
        setScrollUp(false);
        setScrollDown(true);
        setDirection(1);
      } else if (scroll === 0) {
        setScrollUp(false);
        setScrollDown(false);
      }
      setScroll(window.scrollY);
      setPrevDirection(direction);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    return (
      () => {
        window.removeEventListener("scroll", toggleScroll);
        setScrollUp(false);
        setScrollDown(false);
        setScroll(0);
      },
      [scroll]
    );
  }, [scroll]);

  const headerClass = () => {
    if (scrollUp && !scrollDown) {
      return `${styles.headerMenu} ${styles.fixedHeaderMenu} ${styles.hideFixed}`;
    }
    if (scrollDown && !scrollUp) {
      return `${styles.headerMenu} ${styles.fixedHeaderMenu} ${styles.showFixed}`;
    }
    if (!scrollUp && !scrollDown) {
      return styles.headerMenu;
    }
  };
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon3.png" />
        <meta name="description" content="eyeware" />
        <meta name="keywords" content="eyeware"></meta>
        <meta property="og:image" content={`/images/logo-header6.png`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Grid id="container" container justifyContent="flex-start">
        <Header headerClass={headerClass()} />
      </Grid>
      <main>{children}</main>
    </>
  );
}
