import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    const result = await axios.get("http://localhost:4001/products");
    console.log(result);
    setProductList(result.data.data);
  };

  const deleteProductList = async (index) => {
    await axios.delete(`http://localhost:4001/products/${index}`);
  };

  const deleteProduct = (index) => {
    const data = [...productList];
    data.splice(index, 1);
    setProductList(data);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      <div className="product-list">
        {productList.map((item, index) => {
          return (
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
                <h1>Product name: {item.name}</h1>
                <h2>Product price: {item.price} Baht</h2>
                <p>Product description: {item.description}</p>
              </div>

              <button
                className="delete-button"
                onClick={() => {
                  deleteProductList(item.id);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
