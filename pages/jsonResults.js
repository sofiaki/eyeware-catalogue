import React, { useEffect, useState } from "react";
import commerce from "../lib/commerce";
import Head from "next/head";
import Grid from "@mui/material/Grid";

export async function getStaticProps() {
 const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list({
    limit: 200,

  });
  const { data: products } = await commerce.products.list({
    limit: 200,
  });
  /*const url1 = new URL(
    "https://api.chec.io/v1/products"
);

let params1 = {
    "limit": "200",
    "category_slug": "sunglasses",
    "category_slug": "man",
};
let paramStr= 'limit=200&category_slug=glasses&category_slug=sunglasses'
Object.keys(params1)
    .forEach(key => url1.searchParams.append(key, params1[key]));
   url1.searchParams.append("category_slug","sunglasses")

    
    let param=url1.toString()
console.log(param)
console.log(url1.searchParams.getAll('category_slug'))
let headers = {
    "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
    "Accept": "application/json",
    "Content-Type": "application/json",
};

const { data: products1 } = await fetch(url1, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())

    const url2 = new URL(
      "https://api.chec.io/v1/products"
    );
    let params2 = {
      "limit": "200",
      "category_slug": "glasses"
    };
    Object.keys(params2)
        .forEach(key => url2.searchParams.append(key, params2[key]));
    
    const { data: products2 } = await fetch(url2, {
      method: "GET",
      headers: headers,
  })
      .then(response => response.json())
  
  //const products= products1.concat(products2)*/
  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}
const siteTitle = "Οπτικά Όραση";
export default function IndexPage({ categories,  products }) {
 
 const [product, setProduct] = useState([]);
 /*  useEffect(() => {
    commerce.products
      .retrieve("prod_8XxzoBykE1wPQA")
      .then((product1) => console.log(product1));
  }, []);*/
//Retrieve products with attributes
/*  const url = new URL("https://api.chec.io/v1/products");
  const [loading,setLoading]=useState(false)
  let params = {
    limit: 300,
    category_slug: "lences",
    sortBy: "created_at",
    sortDirection: "desc",
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  let headers = {
    "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  useEffect(() => {
    setLoading(true)
    const prod = fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.data);
      });
      setLoading(false)
  }, []);

  */
  /*
  const url = new URL(
    "https://api.chec.io/v1/attributes"
);

let headers = {
    "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
    "Accept": "application/json",
    "Content-Type": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
*/
  /*
    const url = new URL(
      "https://api.chec.io/v1/products/prod_ZRjywMLkn9l7Y8"
  );
  
  let headers = {
      "X-Authorization": "sk_39244c228a8c0ff02c35e643a1a4fbabf0b431f703c08",
      "Content-Type": "application/json",
      "Accept": "application/json",
  };
  
  let body = {
      "attributes": [
          {
              "id": "attr_mOVKl4D23lprRP",
              "value": "black"
          }
      ]
  }
  
  fetch(url, {
      method: "PUT",
      headers: headers,
      body: body
  })
      .then(response => response.json())
      .then(json => console.log(json));
      */
  /*(product && product.variant_groups[0]) && product.variant_groups[0].options[0].assets.map((i)=>JSON.stringify(i,null, 2))*/
  //console.log("product by color" + product);
 /* function filterActive(products){
    let f=[]
    products.map(i=>{
      if(i.sku=="Μ0Β")f.push(i)
    })
    console.log(f)
    return f
  }
  const [filtered, setFiltered]= useState([])
  useEffect(()=>{
    setFiltered(filterActive(products))
    console.log(filtered)
  },[])
  const allproducts= JSON.stringify(products, null, 2)
  const allCategories= JSON.stringify(categories, null, 2)*/
 //console.log(products1)
  return (
    <React.Fragment>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Grid p="0px" m="0px">
        {/*
          products1.map((i) => <div>{i.name}</div>)*/}
        {<pre>{JSON.stringify(products, null, 2)}</pre>}
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </Grid>
    </React.Fragment>
  );
}
