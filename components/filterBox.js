import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Grid, Typography } from "@mui/material";
import styles from "./ProductList.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function FilterBox({
  brands,
  colors,
  polarized,
  clipOn,
  onColorChange,
  onBrandChange,
  onPolarizedChange,
  onClipOnChange,
}) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const [displayedColor, setDisplayedColor] = React.useState("Όλα");

  const handleColorChange = (event) => {
    setDisplayedColor(event.target.value);
    onColorChange(event.target.value);
  };
  const handlePolarizedChange = (event) => {
    onPolarizedChange(event.target.checked);
  };
  const handleClipOnChange = (event) => {
    onClipOnChange(event.target.checked);
  };
  const [showMenu, setShowMenu] = React.useState(false);
  const handleClick = () => {
    showMenu == false ? setShowMenu(true) : setShowMenu(false);
  };
  return (
    <>
      <Grid onClick={handleClick}  className={styles.filterIcon} >
        <FilterAltIcon/>
        <Typography>Φίλτρα</Typography>
        {
          showMenu && <CloseRoundedIcon sx={{marginLeft: '10px'}}/>
        }
      </Grid>
      
      <Grid className={`${showMenu?styles.show:styles.filtersDisplay}`}>
      <Grid className={`${styles.filters}  ${showMenu?styles.block:styles.flex}`} >
        {colors && (
          <Grid className={styles.filterBox}>
            <Typography variant="body" className={`${styles.filterLabel}`}>
              Επίλεξε χρώμα:{" "}
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                id="demo-simple-select"
                value={displayedColor}
                onChange={handleColorChange}
                className={`${styles.filterInput} ${styles.text}`}
                MenuProps={MenuProps}
              >
                {colors.map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        {brands /*&& !selectedBrand*/ && (
          <Grid className={styles.filterBox}>
            <Grid>
              <Typography variant="body" className={`${styles.filterLabel}`}>
                Επίλεξε κατασκευαστή:{" "}
              </Typography>
            </Grid>
            <Grid>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={brands}
                getOptionLabel={(option) => option.name}
                onChange={(event, newBrand) => {
                  onBrandChange(newBrand);
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" />
                )}
                sx={{ m: 1, width: "200px", border: "none" }}
                className={styles.filterInput}
              />
            </Grid>
          </Grid>
        )}
        {polarized && (
          <Grid className={styles.filterBox}>
            <FormControlLabel
              label="Πολωτικοί φακοί"
              control={<Checkbox onChange={handlePolarizedChange} />}
            />
          </Grid>
        )}
        {clipOn && (
          <Grid className={styles.filterBox}>
            <FormControlLabel
              label="Clip On"
              control={<Checkbox onChange={handleClipOnChange} />}
            />
          </Grid>
        )}
      </Grid>
          </Grid>
    </>
  );
}
