import React from "react";
import Product from "./product";

const Name = () => {
  console.log(Product);
  return (
    <div>
      <h1>{Product.name}</h1>
    </div>
  );
};

export default Name;
