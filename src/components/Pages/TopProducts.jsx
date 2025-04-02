

import ParenetFeederMale from "../Pages/mainkrishnaproducts/ParenetFeederMale.png"
import StandardFeeder10kg from "../Pages/mainkrishnaproducts/StandardFeeder10kg.png"
import GrowerFeeder8kg from "../Pages/mainkrishnaproducts/GrowerFeeder8kg.png"
import ChickFeeder3kg from "../Pages/mainkrishnaproducts/ChickFeeder3kg.png"


import rakingmachine from "../Pages/2products/rakingmachine.JPG"


import React, { useState } from 'react';

const TopProducts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const products = [
    {
      id: 1,
      name: " RAKING MACHINE",
      category: "MACHINES",
      image: rakingmachine
    },
    {
      id: 2,
      name: "DEBEAKER MACHINE MANUAL",
      category: "MACHINES",
      image: ParenetFeederMale
    },
    {
      id: 3,
      name: "GROWER FEEDER (8 kg)",
      category: "FEEDER",
      image: GrowerFeeder8kg
    },
    {
      id: 4,
      name: "PARENT FEEDER FEMALE",
      category: "FEEDER",
      image: ChickFeeder3kg
    },
    
   
    
    {
      id: 8,
      name: "CAGE BABY FEEDER (1/2KG)",
      category: "FEEDER",
      image: StandardFeeder10kg
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Krishna Poultry
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Equipment & Trader</h2>
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
                <div 
                  className="w-48 h-48 cursor-pointer"
                  onClick={() => openModal(product.image)}
                >
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-screen p-4">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged product" 
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopProducts;