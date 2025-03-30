import React, { useState, useRef } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Droplet, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "@/Banner/Banner";

// Import images
import babychickendrinker25ltr from "../2products/babychickendrinker25ltr.jpg";
import nippledrinker from "../mainkrishnaproducts/nippledrinker.jpg";
import ChickDrinker3ltr from "../mainkrishnaproducts/ChickDrinker3ltr.jpg";
import cagebabydrinker1by2Ltr from "../mainkrishnaproducts/cagebabydrinker1by2Ltr.jpg";

const DrinkerShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);
  const breadcrumb = [{ name: "Home", link: "/", active: true }];

  // Image data with descriptions
  const drinkerImages = [
    {
      src: babychickendrinker25ltr,
      alt: "Baby Chicken Drinker 2.5L",
      description: "Perfect for chicks with controlled water flow to prevent drowning"
    },
    {
      src: nippledrinker,
      alt: "Nipple Drinker System",
      description: "Hygienic water delivery system that reduces contamination"
    },
    {
      src: ChickDrinker3ltr,
      alt: "Chick Drinker 3L",
      description: "Medium-capacity drinker for growing flocks with easy refill"
    },
    {
      src: cagebabydrinker1by2Ltr,
      alt: "Cage Baby Drinker 1.5L",
      description: "Compact design for cage systems with anti-leak technology"
    }
  ];

  const features = [
    {
      id: "features",
      icon: <Droplet className="w-5 h-5" />,
      title: "Features",
      content: [
        "Large water capacity (up to 10L options)",
        "Anti-leak, anti-spill design",
        "UV-stabilized, BPA-free plastic",
        "Easy-clean removable parts",
        "Adjustable flow rate controls"
      ],
    },
    {
      id: "technical",
      icon: <Settings className="w-5 h-5" />,
      title: "Technical",
      content: [
        "Precision-engineered water flow",
        "360° access for uniform flock hydration",
        "Weather-resistant gaskets and seals",
        "Modular design for easy maintenance",
        "Tested for 100,000+ activation cycles"
      ],
    },
    {
      id: "quality",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Quality",
      content: [
        "ISO 9001:2015 certified production",
        "Each unit undergoes 15-point inspection",
        "Veterinary-approved materials",
        "3-year comprehensive warranty",
        "FDA-compliant materials"
      ],
    },
  ];

  const stats = [
    { value: "15,000+", label: "Units Installed", icon: "💧" },
    { value: "99%", label: "Leak Prevention", icon: "🔍" },
    { value: "1.5-10L", label: "Capacity Range", icon: "📊" },
    { value: "8 Years", label: "Average Lifespan", icon: "⏳" },
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
        prev === 0 ? drinkerImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === drinkerImages.length - 1 ? 0 : prev + 1
      );
    }
    setSelectedImage(drinkerImages[currentImageIndex]);
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
        title="Premium Poultry Drinkers"
        image="https://skapoultryequipment.com/wp-content/uploads/2021/06/chicken-drinkers-drinkers-for-chickens-automatic-water-drinkers-for-chickens-broiler-drinkers-3.jpg"
        breadcrumbItems={breadcrumb}
      />
      
      <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 min-h-screen">
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
                    <Award className="text-blue-600 w-5 h-5" />
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                      Hydration Solutions
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Advanced Poultry Drinkers
                    <span className="block text-blue-600 mt-2">
                      Optimized for Health & Efficiency
                    </span>
                  </h1>
                  <p className="text-gray-700 leading-relaxed">
                    Our precision-engineered drinkers ensure optimal water availability while 
                    minimizing waste and contamination. Designed through years of poultry 
                    farming experience, each model addresses specific hydration needs across 
                    different growth stages and flock sizes.
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
                            ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                            : "text-gray-500 hover:text-blue-500"
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
                            <ArrowRight className="flex-shrink-0 w-4 h-4 text-blue-400 mt-0.5" />
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
                      <div className="text-2xl font-bold text-blue-600 flex items-center justify-center space-x-2">
                        <span>{stat.icon}</span>
                        <span>{stat.value}</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Quick Navigation for Images (Mobile) */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="lg:hidden bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Navigation</h3>
                  <div className="flex flex-wrap gap-2">
                    {drinkerImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToImage(index)}
                        className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
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
              {drinkerImages.map((image, index) => (
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
                    className="w-full h-auto max-h-[500px] object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold">{image.alt}</h3>
                    <p className="text-blue-100 mt-1">{image.description}</p>
                    <div className="mt-3 flex items-center text-blue-200 text-sm">
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
                className="absolute -top-10 right-0 text-white hover:text-blue-300 transition-colors"
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
                <p className="text-blue-200 mt-1">{selectedImage.description}</p>
                <div className="mt-3 text-sm text-gray-300">
                  {currentImageIndex + 1} of {drinkerImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DrinkerShowcase;