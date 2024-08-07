import { PRODUCTS } from "../constants";
import React from 'react'
import "../App.css"
import ProductCard from "./ProductCard";

const Products = (props) => {
  return (
    <div className="products-conatainer">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} item={product}  />
        ))}
      <div className="clear-fix"></div>
    </div>
     
    
  );
};

export default Products 
