import React from 'react';

const VinayakPoultry = () => {
  return (
    <div className="font-sans max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row bg-gray-50   ">
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col   justify-center border-l-4 border-red-700">
          <div className="text-red-700 font-semibold mb-2">FOUNDED IN 2013</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800  mb-4">Krishna Poultry Equipments & Trader</h1>
          <p className="text-gray-600 mb-6">
           Krishna Poultry has grown to become one of India’s most trusted manufacturers, exporters, and suppliers of premium poultry products and equipment. Renowned for our durable, high-quality solutions, we are committed to enhancing poultry farming with cutting-edge technology and innovation. Our state-of-the-art manufacturing facility ensures precision and excellence in every product we deliver. At Krishna Poultry, continuous improvement is our priority, allowing us to provide the best solutions for poultry owners while staying ahead in the industry.
          </p>
          <div>
         
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="https://www.shutterstock.com/image-photo/agriculture-sustainability-food-chicken-on-600nw-2227464335.jpg" 
            alt="Poultry farming equipment with chickens" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 px-6 md:px-12">
        {/* Feature 1 */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <div className="text-6xl text-gray-100 font-bold">01</div>
            <div className="text-red-700 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                <circle cx="9" cy="13" r="1"/>
                <polyline points="12 10 16 14"/>
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3">What we provide</h2>
          <p className="text-gray-600">
          Our state-of-the-art manufacturing facility ensures precision, reliability, and excellence in every product we deliver. With a wide range of attractive and distinctive features.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <div className="text-6xl text-gray-100 font-bold">02</div>
            <div className="text-red-700 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="9" r="5"/>
                <path d="M14.6 15a9 9 0 0 1 10.4 0"/>
                <path d="M19 14l3 3 3-3"/>
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3">Affordable Products</h2>
          <p className="text-gray-600">
          We guarantee our customers receive dependable poultry products that meet the highest standards in the market. Our customized solutions are designed to cater to specific customer needs, all at competitive prices.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <div className="text-6xl text-gray-100 font-bold">03</div>
            <div className="text-red-700 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="20" r="2"/>
                <path d="M10 20h6"/>
                <circle cx="18" cy="20" r="2"/>
                <path d="M5.67 6H23l-3.68 11.04A2 2 0 0 1 17.38 19H9.75a2 2 0 0 1-1.93-1.5L5.23 4.74A2 2 0 0 0 3.3 3H1"/>
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3">Our Products Features</h2>
          <p className="text-gray-600">
          Our products stand out with the highest quality, world-class standards, and precision, offering exceptional value for money. Designed to save time, money, and labor, they contribute to long-term profitability and efficiency.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <div className="text-6xl text-gray-100 font-bold">04</div>
            <div className="text-red-700 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3">Our Promise</h2>
          <p className="text-gray-600">
            Honesty, integrity, and transparency are crucial parts of a successful and stable business.
            Hence, we promise that "We will do business in a manner that would be fair, honest, open, and ethical".
          </p>
        </div>
      </div>

      {/* Footer Separator */}
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default VinayakPoultry;