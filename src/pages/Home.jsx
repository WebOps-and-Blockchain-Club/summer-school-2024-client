import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate,Navigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const redirect=()=>
    navigate("/product")

  const token = localStorage.getItem("token");
  // token&&(
  //   <Navigate to="/login" replace={true} />
  // )

  useEffect(() => {
    async function fetchProducts() {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200)
        {
          console.log(res.data);
          setProducts(res.data.products);
        }
    }

    fetchProducts();
  }, []);

  //checking user info
  // useEffect(() => {
  //   async function userInfo() {
  //     const rep = await axios.get(
  //       `${process.env.REACT_APP_BACKEND_BASE_URL}/user`,);
  //     console.log(rep.data);    
  //   }

  //   userInfo();
  // }, []);
  console.log(token);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

        {products.map((product, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-600 mb-2">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Condition:</strong> {product.condition}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Cost Price:</strong> ${product.costPrice}
            </p>
            <p className="text-gray-800 font-bold mb-2">
              <strong>Selling Price:</strong> ${product.sellingPrice}
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"onClick={()=>{
              console.log(product);
              localStorage.setItem("product", product.productId);
              redirect()
              }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
