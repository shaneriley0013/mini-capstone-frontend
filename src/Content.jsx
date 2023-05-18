import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
// import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";



export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  
  return (
    <div>
      <Login />
      <Logout />
      <Signup />
      <ProductsIndex products={products} />
    </div>
  );
}