import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [product, setProduct] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:4001/products");
    console.log(result);
    setProduct(result.data.data);
  };
 
 const deleteProduct = async (id) =>{
  await axios.delete(`http://localhost:4001/products/${id}`);
  getData();
 }

  useEffect(() => {
    getData();
  }, []);

  // const deleteBlog = (index) => {
  //   const newDeleteBlog = [...product];
  //   newDeleteBlog.splice(index, 1);
  //   setProduct(newDeleteBlog);
  // };

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      {product.map((item, index) => {
        return (
          <div className="product-list" key={index}>
            <div className="product">
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/350/350"
                  alt="some product"
                  width="350"
                  height="350"
                />
              </div>
              <div className="product-detail">
                <h1>Product name:{item.name}</h1>
                <h2>Product price:{item.price}Baht</h2>
                <p>Product description:{item.description}</p>
              </div>

              <button className="delete-button" onClick={()=>{deleteProduct(item.id)}}>
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
