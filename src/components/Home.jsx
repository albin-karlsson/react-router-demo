import React from "react";
import { Link } from "react-router-dom";
import { Styles } from "../services/styleService.js";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <div className="grid-container">
        {products.map((p) => (
          <div
            key={p.id}
            className="product"
          >
            <Link to={`/products/${p.id}`}>Link to {p.title}</Link>
          </div>
        ))}
      </div>

      <Link
        to="/about"
        style={Styles.linkStyle}
      >
        Link to About
      </Link>
      <Link
        to="/contact"
        style={Styles.linkStyle}
      >
        Link to Contact
      </Link>
    </div>
  );
}

export default Home;
