// components/CategoryList.js
import Link from "next/link";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import styles from "./layout.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function CategoryMenu(props) {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleClick = () => {
    showMenu === false ? setShowMenu(true) : setShowMenu(false);
  };
  /**This code is affected by mui close handling */
  const handleClose = () =>{
    setShowMenu(false);
    console.log(showMenu)
        }
  useEffect(()=>{

    if(showMenu)
    window.addEventListener('click', handleClose)

    return()=>{
        window.removeEventListener('click', handleClose)
 
    }
  }),[]


  return (
    <div>
      <Grid
        onClick={handleClick}
        className={`${styles.menuItem} ${styles.myHover}`}
      >
        <DehazeIcon className={styles.menuIcon}></DehazeIcon>
        <Typography variant="body" className={styles.menuTitle}>
          {props.menuTitle}
        </Typography>
      </Grid>
      {/*<Paper>
        <Grid className={`${styles.dropDown} ${showMenu && styles.showMenu}`}>
          {props.menuItems.map((i) => (
            <Link key={i.name} href={i.url} onClick={handleClick}>
              <Typography
                className={`${styles.menuItem} ${styles.myHover}`}
                variant="body"
              >
                {i.name}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Paper>*/}
      <Paper>
        <Grid
          container
          className={`${styles.dropDown} ${showMenu && styles.showMenu}`}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Glasses</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={`${styles.myHover}`}>
                <Link href="/categories/glasses/woman" /*onClick={handleClick}*/>
                  <TableCell
                    sx={{ borderBottom: "none" }}
                    className={`${styles.myHover}`}
                    variant="body"
                  >
                    Woman
                  </TableCell>
                </Link>
              </TableRow>
              <TableRow className={`${styles.myHover}`}>
                <Link href="/categories/glasses/man" /*onClick={handleClick}*/>
                  <TableCell
                    sx={{ borderBottom: "none" }}
                    className={`${styles.myHover}`}
                    variant="body"
                  >
                    Man
                  </TableCell>
                </Link>
              </TableRow>
              <TableRow className={`${styles.myHover}`}>
                <Link href="/categories/glasses/unisex" /*onClick={handleClick}*/>
                  <TableCell
                    sx={{ borderBottom: "none" }}
                    className={`${styles.myHover}`}
                    variant="body"
                  >
                    Unisex
                  </TableCell>
                </Link>
              </TableRow>
              <TableRow className={`${styles.myHover}`}>
                <Link href="/categories/glasses/kid" /*onClick={handleClick}*/>
                  <TableCell
                    sx={{ borderBottom: "none" }}
                    className={`${styles.myHover}`}
                    variant="body"
                  >
                    Kid
                  </TableCell>
                </Link>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sunglasses</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={`${styles.myHover}`}>
                <Link href="/categories/sunglasses/woman" /*onClick={handleClick}*/>
                  <TableCell
                    sx={{ borderBottom: "none" }}
                    className={`${styles.myHover}`}
                    variant="body"
                  >
                    Woman
                  </TableCell>
                </Link>
              </TableRow>
              <TableRow className={`${styles.myHover}`}>
                <Link href="/categories/sunglasses/man" /*onClick={handleClick}*/>
                  <TableCell
                    sx={{ borderBottom: "none" }}
                    className={`${styles.myHover}`}
                    variant="body"
                  >
                    Man
                  </TableCell>
                </Link>
              </TableRow>
              <TableRow className={`${styles.myHover}`}>
                <Link
                  href="/categories/sunglasses/unisex"
                  /*onClick={handleClick}*/
                >
                  <TableCell
                    sx={{ borderBottom: "none" }}
                    className={`${styles.myHover}`}
                    variant="body"
                  >
                    Unisex
                  </TableCell>
                </Link>
              </TableRow>
              <TableRow className={`${styles.myHover}`}>
                <Link href="/categories/sunglasses/kid" /*onClick={handleClick}*/>
                  <TableCell
                    sx={{ borderBottom: "none" }}
                    className={`${styles.myHover}`}
                    variant="body"
                  >
                    Kid
                  </TableCell>
                </Link>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableHead>
              <Link href="/categories/lenses/lenses" /*onClick={handleClick}*/>
                <TableRow className={`${styles.myHover}`}>
                  <TableCell>Contact Lenses</TableCell>
                </TableRow>
              </Link>
              <Link
                href="/categories/lenses/lenssolution"
                /*onClick={handleClick}*/
              >
                <TableRow className={`${styles.myHover}`}>
                  <TableCell>Contact Lenses Liquid</TableCell>
                </TableRow>
              </Link>
            </TableHead>
          </Table>
        </Grid>
      </Paper>
    </div>
  );
}
