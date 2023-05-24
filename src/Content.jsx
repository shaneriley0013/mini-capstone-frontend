import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { ProductsShowSeparate } from "./ProductsShowSeparate";
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

  const handleUpdateProduct = (id, params, successCallback) => {
      console.log("handleUpdateProduct", params);
      axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
        setProducts(
          products.map((product) => {
            if (product.id === response.data.id) {
              return response.data;
            } else {
              return product;
            }
          })
        );
        successCallback();
        handleClose();
      });
    };


  const handleDestroyProduct = (product) => {
    console.log("handleDestroyProduct", product);
    axios.delete(`http://localhost:3000/products/${product.id}.json`).then((response) => {
      setProducts(products.filter((p) => p.id !== product.id));
      handleClose();
    });
  };

  
  
  
  
  useEffect(handleIndexProducts, []);

  
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct} />} />
        <Route path="/" element={<ProductsIndex products={products} onShowProduct={handleShowProduct} />} />
        <Route path="/products/:id" element={<ProductsShowSeparate />} />
      </Routes>
      <Logout />
      
      
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct} />
      </Modal>
    </div>
  );
}
