// src/App.jsx
import growerdrinker8ltr from "./fwdkrishnatradersproducts/growerdrinker8ltr.jpg"
import chickdrinker3ltr from "./fwdkrishnatradersproducts/chickdrinker3ltr.jpg"

import React from 'react';

const TopProducts = () => {
  const products = [
    {
      id: 1,
      name: "GROWER DRINKER (8 LTR)",
      category: "DRINKERS",
      image: growerdrinker8ltr
    },
    {
      id: 2,
      name: "CHICK DRINKER (3 LTR)",
      category: "DRINKERS",
      image: chickdrinker3ltr
    },
    {
      id: 3,
      name: "TURBO FEEDER",
      category: "FEEDER",
      image: "https://vmpetsmart.com/wp-content/uploads/2022/07/10045276_l-1000x1000-1.webp"
    },
    {
      id: 4,
      name: "ROUND FEEDER (10KG)",
      category: "FEEDER",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/416190480/VU/JT/UI/35198948/broiler-feeder-250x250.png"
    },
    {
        id: 5,
        name: "Medium Feeder (4.5 LTR)",
        category: "DRINKERS",
        image: "https://m.media-amazon.com/images/I/31UF5pcHa7L._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 6,
        name: "Chick Feeder (2.5 kg)",
        category: "Feeder",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/5/416190480/VU/JT/UI/35198948/broiler-feeder-500x500.png"
      },
      {
        id: 7,
        name: "Cage Feeder (0.5 kg)",
        category: "FEEDER",
        image: "https://5.imimg.com/data5/DW/UN/NC/SELLER-67339811/0-5-kg-baby-chick-feeder-500x500.jpg"
      },
      {
        id: 8,
        name: "ROUND FEEDER (10KG)",
        category: "FEEDER",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/5/416190480/VU/JT/UI/35198948/broiler-feeder-250x250.png"
      }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Krishna Poultry 
        </h1>
        <h2 text-4xl sm:text-5xl font-bold text-gray-800 mb-4>Equipment & Trader</h2>
        <h3 className="text-lg sm:text-xl text-gray-600 font-medium">
          Manufacturers, Traders & Equipment Suppliers
        </h3>
        <div className="mt-6">
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide high-quality poultry equipment and solutions to meet all your farming needs. Explore our wide range of products designed for efficiency and durability.
          </p>
        </div>
      </div>
  
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="p-6 flex flex-col items-center">
              <div className="w-48 h-48">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  {product.category}
                </p>
                <h3 className="text-gray-800 font-semibold mt-1">{product.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default TopProducts;