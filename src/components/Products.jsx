import { PRODUCTS } from "../constants";
import React, { useEffect } from 'react'
import "../App.css"
import ProductCard from "./ProductCard";
import axios from "axios";
import { useState } from "react";

const Products = (props) => {

  const [productList,setProductsList] = useState([]);
  useEffect(()=>{
    getProducts() 
  },[]);

  const getProducts = async () =>{
    const res = await axios.get("http://localhost:3000/products");
    setProductsList(res.data)
    console.log(res.data)
  }
  return (
    <div className="products-conatainer">
        {productList.map((product) => (
          <ProductCard key={product.id} item={product}  />
        ))}
      <div className="clear-fix"></div>
    </div>
     
    
  );
};

export default Products 
