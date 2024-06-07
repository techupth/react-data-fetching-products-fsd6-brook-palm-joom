import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProduct] = useState([]);
  const getProducts = async () => {
    const result = await axios.get("http://localhost:4001/products");
    setProduct(result.data.data);
  };

  const removeProduct = async (id) => {
    await axios.delete(`http://localhost:4001/products/${id}`);
    getProducts();
  };

  // const removeProduct = (productIndex) => {
  //   const deleteProduct = [...products];
  //   deleteProduct.splice(productIndex, 1);
  //   setProduct(deleteProduct);
  // };

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <div className="product-preview">
              <img
                src="https://via.placeholder.com/350/350"
                alt="some product"
                width="350"
                height="350"
              />
            </div>
            <div className="product-detail">
              <h1>Product name: {product.name}</h1>
              <h2>Product price: {product.price} Baht</h2>
              <p>Product description: {product.description}</p>
            </div>

            <button
              className="delete-button"
              onClick={() => removeProduct(product.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
