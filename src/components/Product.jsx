import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
  // Läs siffran (routeparametern) i addressfältet
  const { productId } = useParams();
  // Skapa en statevariabel och dess uppdateringsmetod, sätt variabeln till ett tomt objekt initialt
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [productId]);

  if (Object.keys(product).length !== 0 && !product.hasOwnProperty("message")) {
    return (
      <div>
        <h1>Displaying a single product</h1>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <em>$ {product.price}</em>
      </div>
    );
  } else {
    return <div>Product not found</div>;
  }
}

export default Product;
