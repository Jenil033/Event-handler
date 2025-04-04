
import React, { useState, useEffect } from "react";

const App = () => {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchProducts = async () => {
    setLoading(true); 
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false); 
  };

 
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-decoration-line: underline;">Fake Product Store</h1>
        <button
          onClick={fetchProducts}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          {loading ? "Loading..." : "Refresh Products"}
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow rounded">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
