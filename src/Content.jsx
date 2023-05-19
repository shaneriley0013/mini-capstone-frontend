import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";



export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  const handleShowProduct = (product) => {
      console.log("handleShowProduct", product);
      setIsProductsShowVisible(true);
      setCurrentProduct(product);
    };
    
    const handleClose = () => {
      console.log("handleClose");
      setIsProductsShowVisible(false);
    };

  
  
  
  
  useEffect(handleIndexProducts, []);

  
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Login />
      <Logout />
      <Signup />
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </div>
  );
}