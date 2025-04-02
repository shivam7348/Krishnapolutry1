import React, { useState, useRef } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Box, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProductShowcase = ({
  title,
  bannerImage,
  breadcrumbItems,
  images,
  features,
  stats,
  description,
  tagline,
  headerTitle,
  headerDescription
}) => {
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);

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
        prev === 0 ? images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
    setSelectedImage(images[currentImageIndex]);
  };

  const scrollToImage = (index) => {
    imageRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  };

  return (
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
                    {tagline}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {headerTitle}
                  <span className="block text-orange-600 mt-2">
                    {headerDescription}
                  </span>
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  {description}
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
                  {images.map((image, index) => (
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
            {images.map((image, index) => (
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
                  {currentImageIndex + 1} of {images.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductShowcase;