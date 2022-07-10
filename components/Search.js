import { Autocomplete } from "@mui/material";
import { useEffect } from "react";


function Search(){
useEffect(()=>{
    
})
    return(
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
            )
            
        }

            export default function Search() 