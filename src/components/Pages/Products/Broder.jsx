import React, { useState, useRef } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Box, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "@/Banner/Banner";

// Import images
import vaccinator from "../mainkrishnaproducts/vaccinator.jpg";
import foogersingle from "../2products/foogersingle.jpg";
import sprinkler from "../2products/sprinkler.jpg";
import broader from "../mainkrishnaproducts/broader.jpg";
import chicktransporationbox from "../mainkrishnaproducts/chicktransporationbox.jpg";

const OthersShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);
  const breadcrumb = [{ name: "Home", link: "/", active: true }];

  // Image data
  const otherImages = [
    {
      src: vaccinator,
      alt: "Poultry Vaccinator",
      description: "High-precision vaccinator for efficient poultry immunization"
    },
    {
      src: foogersingle,
      alt: "Fooger System",
      description: "Single unit fooger for controlled misting in poultry farms"
    },
    {
      src: sprinkler,
      alt: "Sprinkler System",
      description: "Automated sprinklers for optimal farm temperature control"
    },
    {
      src: broader,
      alt: "Poultry Broader",
      description: "Professional-grade broader for chick rearing"
    },
    {
      src: chicktransporationbox,
      alt: "Chick Transportation Box",
      description: "Secure and ventilated boxes for safe chick transport"
    }
  ];

  const features = [
    {
      id: "features",
      icon: <Box className="w-5 h-5" />,
      title: "Features",
      content: [
        "High-quality, food-grade materials",
        "Versatile usage across poultry operations",
        "Easy to clean and maintain",
        "Durable construction for long-term use",
        "Ergonomic designs for user comfort"
      ],
    },
    {
      id: "technical",
      icon: <Settings className="w-5 h-5" />,
      title: "Technical",
      content: [
        "Precision engineering for optimal performance",
        "Energy-efficient operation",
        "Modular components for easy replacement",
        "Weather-resistant materials",
        "Tested in real farm conditions"
      ],
    },
    {
      id: "quality",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Quality",
      content: [
        "ISO 9001 certified manufacturing",
        "Rigorous quality testing at all stages",
        "Premium materials sourced responsibly",
        "3-year comprehensive warranty",
        "Compliance with agricultural standards"
      ],
    },
  ];

  const stats = [
    { value: "10,000+", label: "Units Sold", icon: "🏭" },
    { value: "98.7%", label: "Customer Satisfaction", icon: "😊" },
    { value: "5 Years", label: "Average Lifespan", icon: "⏳" },
    { value: "24/7", label: "Support Available", icon: "📞" },
  ];

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImages = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev === 0 ? otherImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === otherImages.length - 1 ? 0 : prev + 1
      );
    }
    setSelectedImage(otherImages[currentImageIndex]);
  };

  const scrollToImage = (index) => {
    imageRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  };

  return (
    <>
      <Banner
        title="Premium Poultry Equipment"
        image="https://media.istockphoto.com/id/478287121/photo/chickens-on-traditional-free-range-poultry-farm.jpg?s=612x612&w=0&k=20&c=6pIj6E6VgJ9XNHv1C4Pjtd20pzZ_9w4np1k6HVtZK9I="
        breadcrumbItems={breadcrumb}
      />
      
      <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Product Info (Sticky) */}
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-4 lg:pb-12">
              <div className="space-y-8">
                {/* Header Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2">
                    <Award className="text-orange-600 w-5 h-5" />
                    <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                      Industry-Leading Solutions
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Professional Poultry Equipment
                    <span className="block text-orange-600 mt-2">
                      Engineered for Performance & Durability
                    </span>
                  </h1>
                  <p className="text-gray-700 leading-relaxed">
                    Our comprehensive range of poultry equipment is designed by farmers, for farmers. 
                    Each product undergoes rigorous testing to ensure it meets the demands of modern 
                    poultry operations while maintaining the highest standards of animal welfare.
                  </p>
                </motion.div>

                {/* Feature Tabs */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex space-x-4 border-b border-gray-200">
                    {features.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => setActiveTab(feature.id)}
                        className={`pb-3 px-1 flex items-center space-x-2 transition-all ${
                          activeTab === feature.id
                            ? "border-b-2 border-orange-500 text-orange-600 font-medium"
                            : "text-gray-500 hover:text-orange-500"
                        }`}
                      >
                        {feature.icon}
                        <span className="text-sm md:text-base">{feature.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <AnimatePresence mode="wait">
                      <motion.ul
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        {features.find(f => f.id === activeTab).content.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <ArrowRight className="flex-shrink-0 w-4 h-4 text-orange-400 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                    >
                      <div className="text-2xl font-bold text-orange-600 flex items-center justify-center space-x-2">
                        <span>{stat.icon}</span>
                        <span>{stat.value}</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Quick Navigation for Images */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="lg:hidden bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Navigation</h3>
                  <div className="flex flex-wrap gap-2">
                    {otherImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToImage(index)}
                        className="px-3 py-1 text-xs bg-orange-50 text-orange-700 rounded-full hover:bg-orange-100 transition-colors"
                      >
                        {image.alt.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Image Gallery (Scrollable) */}
            <div className="space-y-6">
              {otherImages.map((image, index) => (
                <motion.div
                  key={index}
                  ref={el => imageRefs.current[index] = el}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                  onClick={() => handleImageClick(image, index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto max-h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold">{image.alt}</h3>
                    <p className="text-orange-100 mt-1">{image.description}</p>
                    <div className="mt-3 flex items-center text-orange-200 text-sm">
                      <span>Click to enlarge</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-orange-300 transition-colors"
              >
                Close
              </button>
              
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white backdrop-blur-sm transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white backdrop-blur-sm transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                <p className="text-orange-200 mt-1">{selectedImage.description}</p>
                <div className="mt-3 text-sm text-gray-300">
                  {currentImageIndex + 1} of {otherImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OthersShowcase;