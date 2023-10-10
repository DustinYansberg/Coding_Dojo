import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductList = ({ products, removeFromDom }) => {
  // console.log(products);
  return (
    <div>
      {products.map((oneProduct, index) => (
        <p key={index}>
          <Link to={`/products/${oneProduct._id}`}>{oneProduct.title}</Link>
          <DeleteButton
            successCallback={() => removeFromDom(oneProduct._id)}
          ></DeleteButton>
          <Link to={`/products/${oneProduct._id}/edit`}>Edit</Link>
        </p>
      ))}
    </div>
  );
};

export default ProductList;
