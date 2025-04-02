import React, { useState, useRef } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Box, ChevronRight, ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "@/Banner/Banner";

import Vaccinator from "../mainkrishnaproducts/Vaccinator.png";
import ClockHumidityHTC from "../mainkrishnaproducts/ClockHumidityHTC.png";
import Eleven from "../mainkrishnaproducts/Eleven.png";
import DigitalThermomometer from "../mainkrishnaproducts/DigitalThermomometer.png";
import rakingmachine from "../2products/rakingmachine.JPG";

const OthersShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);
  const breadcrumb = [{ name: "Home", link: "/", active: true }];

  const otherImages = [
    {
      src: Vaccinator,
      alt: "Poultry Vaccinator",
      description: "Precision vaccination equipment with adjustable dosage control",
      type: "Vaccination",
      features: ["Sterile operation", "Adjustable dosage", "Easy to clean"]
    },
    {
      src: rakingmachine,
      alt: "Poultry Raking Machine",
      description: "Automatic bedding management system for large coops",
      type: "Machines",
      features: ["Stainless steel construction", "Adjustable depth", "Low maintenance"]
    },
    
    {
      src: ClockHumidityHTC,
      alt: "Digital Indoor Thermometer",
      description: "Multi-function environmental monitor with data logging",
      type: "Monitoring",
      features: ["Temperature tracking", "Humidity sensor", "LCD display"]
    },
    {
      src: DigitalThermomometer,
      alt: "Room Thermometer Big",
      description: "Large display temperature monitor for facility-wide tracking",
      type: "Monitoring",
      features: ["±0.1°C accuracy", "Wall mountable", "Alarm system"]
    },
  ];

  const features = [
    {
      id: "features",
      icon: <Box className="w-5 h-5" />,
      title: "Key Features",
      content: [
        "Industrial-grade materials",
        "Precision engineering",
        "Easy maintenance design",
        "Extended operational lifespan",
      ],
    },
    {
      id: "technical",
      icon: <Settings className="w-5 h-5" />,
      title: "Technical Specs",
      content: [
        "CE certified components",
        "Energy-efficient operation",
        "Modular design",
        "Weather-resistant construction",
      ],
    },
    {
      id: "quality",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Quality Assurance",
      content: [
        "ISO 9001 certified",
        "100% performance testing",
        "3-year warranty",
        "Technical support",
      ],
    },
  ];

  const stats = [
    { value: "5,000+", label: "Units Installed", icon: "🏭", description: "Trusted by poultry professionals" },
    { value: "98%", label: "Satisfaction", icon: "⭐", description: "Customer satisfaction rate" },
    { value: "10yr", label: "Lifespan", icon: "⏳", description: "Average product lifespan" },
    { value: "24/7", label: "Support", icon: "🛠️", description: "Technical support availability" },
  ];

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImages = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex === 0 ? otherImages.length - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === otherImages.length - 1 ? 0 : currentImageIndex + 1;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(otherImages[newIndex]);
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
        title="Specialized Poultry Equipment"
        image="https://media.istockphoto.com/id/478287121/photo/chickens-on-traditional-free-range-poultry-farm.jpg"
        breadcrumbItems={breadcrumb}
      />

      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 min-h-screen">
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
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-2">
                    <Award className="text-orange-600 w-5 h-5" />
                    <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                      Professional Equipment Solutions
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Premium Poultry Tools
                    <span className="block text-orange-600 mt-2 text-2xl md:text-3xl font-semibold">
                      Precision & Reliability
                    </span>
                  </h1>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our specialized equipment enhances poultry management efficiency while
                    maintaining the highest standards of animal welfare and operational safety.
                  </p>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-100">
                    <h3 className="font-semibold text-orange-800 flex items-center">
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      Industry-Leading Quality
                    </h3>
                    <p className="text-gray-700 mt-1 text-sm">
                      All equipment comes with comprehensive 3-year warranty
                    </p>
                  </div>
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

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <AnimatePresence mode="wait">
                      <motion.ul
                        key={activeTab}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        {features.find(f => f.id === activeTab).content.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start space-x-3 group"
                          >
                            <div className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center">
                              <ArrowRight className="w-4 h-4 text-orange-400 group-hover:text-orange-600 transition-colors" />
                            </div>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                          </motion.li>
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
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <div className="text-2xl font-bold text-orange-600 flex items-center justify-center space-x-2">
                        <span>{stat.icon}</span>
                        <span>{stat.value}</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {stat.description}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Mobile Navigation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="lg:hidden bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Product Navigator</h3>
                  <div className="flex flex-wrap gap-2">
                    {otherImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToImage(index)}
                        className="px-3 py-1.5 text-xs bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors font-medium"
                      >
                        {image.alt.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="space-y-8">
              {otherImages.map((image, index) => (
                <motion.div
                  key={index}
                  ref={el => imageRefs.current[index] = el}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-zoom-in border border-gray-200"
                    onClick={() => handleImageClick(image, index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto max-h-[500px] object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                      <div className="bg-white/90 p-3 rounded-full shadow-md">
                        <ChevronRight className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100 relative">
                    <div className="absolute -top-3 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {image.type}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{image.alt}</h3>
                    <p className="text-gray-700 mt-2">{image.description}</p>
                    
                   
                    
                    <button
                      onClick={() => handleImageClick(image, index)}
                      className="mt-4 flex items-center text-orange-600 font-medium text-sm hover:text-orange-800 transition-colors group"
                    >
                      <span className="border-b border-transparent group-hover:border-orange-600 transition-all">
                        View full details
                      </span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-orange-300 transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full text-white backdrop-blur-sm transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full text-white backdrop-blur-sm transition-all hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl font-bold">{selectedImage.alt}</h3>
                <div className="flex justify-center items-center space-x-4 mt-3">
                  <span className="bg-orange-600/30 text-orange-200 px-3 py-1 rounded-full text-sm">
                    {selectedImage.type}
                  </span>
                </div>
                <p className="text-orange-200 mt-3 max-w-2xl mx-auto text-lg">{selectedImage.description}</p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 max-w-md mx-auto">
                  {selectedImage.features.map((feature, i) => (
                    <div key={i} className="text-left flex items-start">
                      <ArrowRight className="w-4 h-4 text-orange-300 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-sm text-gray-300">
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