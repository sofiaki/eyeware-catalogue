import { useState, useRef, useEffect } from "react";
import {useRouter} from "next/router";
import { Autocomplete, TextField } from "@mui/material";
import commerce from '../lib/commerce'

export default function Search() {
    const [options, setOptions] = useState([]);
    const previousController = useRef();
  
    
    const getData = async (searchTerm) => {
      if (previousController.current) {
        previousController.current.abort();
      }
      const controller = new AbortController();
      const signal = controller.signal;
      previousController.current = controller;
      
      await commerce.products.list({
        query: searchTerm
      }).then(function (myJson) {
          console.log(
            "search term: " + searchTerm + ", results: ",
            myJson.data
          );
          const updatedOptions = myJson.data && myJson.data.map((p) => {
            return { title: p.name , permalink: p.permalink};
          });
          console.log(updatedOptions)
          updatedOptions && setOptions(updatedOptions);
        });
    };
  
    const onInputChange = (event, value, reason) => {
      if (value) {
        getData(value);
      } else {
        setOptions([]);
      }
    };
    const router = useRouter();
  
    return (
      <Autocomplete
        id="combo-box-demo"
        options={options}
        onChange={(event, chosen)=> router.push(`/products/${chosen.permalink}`)}
        onInputChange={onInputChange}
        getOptionLabel={(option) => option.title}
        style={{ width: 200, height: 50}}
        renderInput={(params) => (
          <TextField {...params} label="Search..." variant="standard" />
        )}
      />
    );
  }
  