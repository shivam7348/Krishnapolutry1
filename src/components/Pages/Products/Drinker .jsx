import React, { useState, useRef } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Droplet, ChevronRight, ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "@/Banner/Banner";

// Import images
import BellAutomaticGunDrinker from "../mainkrishnaproducts/BellAutomaticGunDrinker.png";
import JumboAutomaticDrinkerClassic from "../mainkrishnaproducts/JumboAutomaticDrinkerClassic.png";
import BasinChickDrinker2point5ltr from "../mainkrishnaproducts/BasinChickDrinker2point5ltr.png";
import GrowerDrinker8ltr from "../mainkrishnaproducts/GrowerDrinker8ltr.png";
import CageBabyDrinker1and2ltr from "../mainkrishnaproducts/CageBabyDrinker1and2ltr.png";
import ChickDrinker3ltr from "../mainkrishnaproducts/ChickDrinker3ltr.png";
import NippleDrinker from "../mainkrishnaproducts/NippleDrinker.png";
import JumboAutomaticDrinkerStandard from "../mainkrishnaproducts/JumboAutomaticDrinkerStandard.png";

const DrinkerShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);
  const breadcrumb = [{ name: "Home", link: "/", active: true }];

  // Image data with enhanced descriptions and metadata
  const drinkerImages = [
    {
      src: BasinChickDrinker2point5ltr,
      alt: "Basin Chick Drinker 2.5.ltr",
      description: "Shallow basin design prevents drowning while ensuring constant water access for chicks",
      capacity: "2.5.Ltr",
      type: "Chick Starter",
      features: ["Anti-drowning design", "Easy-clean surface", "Low water pressure system"]
    },
    {
      src: NippleDrinker,
      alt: "Nipple Drinker System",
      description: "Hygienic water delivery that reduces contamination and water waste",
      capacity: "Customizable",
      type: "All Growth Stages",
      features: ["Drip-free technology", "Stainless steel nipples", "Adjustable flow rate"]
    },
    {
      src: ChickDrinker3ltr,
      alt: "Chick Drinker 3.Ltr",
      description: "Medium-capacity drinker with stable base to prevent tipping in active flocks",
      capacity: "3L",
      type: "Chick to Grower",
      features: ["Wide drinking rim", "Quick-release base", "BPA-free materials"]
    },
    {
      src: CageBabyDrinker1and2ltr,
      alt: "Cage Baby Drinker 1/2.Ltr",
      description: "Compact design with anti-leak technology for confined cage systems",
      capacity: "1/2.Ltr",
      type: "Cage Systems",
      features: ["Space-saving", "Leak-proof seals", "Easy mounting"]
    },
    {
      src: BellAutomaticGunDrinker,
      alt: "Bell Automatic Gun Drinker",
      description: "High-capacity automatic system for large flocks with consistent water pressure",
      capacity: "",
      type: "Grower/Layer",
      features: ["Automatic refill", "Pressure control", "Large flock capacity"]
    },
    {
      src: JumboAutomaticDrinkerClassic,
      alt: "Jumbo Automatic Drinker Classic",
      description: "Premium automatic system with precision water flow control",
      capacity: "",
      type: "Commercial Flocks",
      features: ["Durable construction", "Easy maintenance", "Weather-resistant"]
    },
    {
      src: GrowerDrinker8ltr,
      alt: "Grower Drinker 8.Ltr",
      description: "Intermediate drinker for rapidly growing birds with increased water needs",
      capacity: "8L",
      type: "Grower",
      features: ["Stable base", "Wide access", "Quick-fill design"]
    },
    {
      src: JumboAutomaticDrinkerStandard,
      alt: "Jumbo Automatic Drinker Standard",
      description: "Reliable automatic watering solution for medium-sized flocks",
      capacity: "",
      type: "General Purpose",
      features: ["Cost-effective", "Easy installation", "Low maintenance"]
    }
  ];

  const features = [
    {
      id: "features",
      icon: <Droplet className="w-5 h-5" />,
      title: "Key Features",
      content: [
        "Large water capacity (up to 15L options)",
        "Anti-leak, anti-spill patented design",
        "UV-stabilized, BPA-free plastic construction",
        "Quick-release components for thorough cleaning",
        "Precision adjustable flow rate controls"
      ],
    },
    {
      id: "technical",
      icon: <Settings className="w-5 h-5" />,
      title: "Technical Specs",
      content: [
        "Engineered water flow for optimal hydration",
        "360° access for uniform flock water availability",
        "Industrial-grade weather-resistant components",
        "Modular design simplifies maintenance",
        "Rated for 100,000+ activation cycles"
      ],
    },
    {
      id: "quality",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Quality Assurance",
      content: [
        "ISO 9001:2015 certified manufacturing",
        "Rigorous 15-point inspection process",
        "Veterinary-approved non-toxic materials",
        "Industry-leading 3-year warranty",
        "FDA and EU food safety compliant"
      ],
    },
  ];

  const stats = [
    { value: "15,000+", label: "Units Installed", icon: "🏭", description: "Trusted by poultry farmers worldwide" },
    { value: "99%", label: "Leak Prevention", icon: "🔍", description: "Industry-leading seal technology" },
    { value: "1.5-15L", label: "Capacity Range", icon: "📊", description: "Options for all flock sizes" },
    { value: "8 Years", label: "Average Lifespan", icon: "⏳", description: "Durable, long-lasting construction" },
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
      newIndex = currentImageIndex === 0 ? drinkerImages.length - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === drinkerImages.length - 1 ? 0 : currentImageIndex + 1;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(drinkerImages[newIndex]);
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
      
      <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 min-h-screen">
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
                    <Award className="text-blue-600 w-5 h-5" />
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                      Advanced Hydration Technology
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Precision Poultry Drinkers
                    <span className="block text-blue-600 mt-2 text-2xl md:text-3xl font-semibold">
                      Optimized for Health & Efficiency
                    </span>
                  </h1>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our engineered drinkers provide optimal water access while minimizing waste 
                    and contamination. Each model is designed for specific growth stages and 
                    production environments.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-800 flex items-center">
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      Industry-Leading Performance
                    </h3>
                    <p className="text-gray-700 mt-1 text-sm">
                      All drinkers come with our 3-year satisfaction guarantee
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
                            ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                            : "text-gray-500 hover:text-blue-500"
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
                              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors" />
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
                      <div className="text-2xl font-bold text-blue-600 flex items-center justify-center space-x-2">
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

                {/* Quick Navigation for Images (Mobile) */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="lg:hidden bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Product Navigator</h3>
                  <div className="flex flex-wrap gap-2">
                    {drinkerImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToImage(index)}
                        className="px-3 py-1.5 text-xs bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium"
                      >
                        {image.alt.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Image Gallery (Scrollable) */}
            <div className="space-y-8">
              {drinkerImages.map((image, index) => (
                <motion.div
                  key={index}
                  ref={el => imageRefs.current[index] = el}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Image Container */}
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
                        <ChevronRight className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  {/* Description Container */}
                  <div className="mt-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100 relative">
                    <div className="absolute -top-3 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {image.capacity}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{image.alt}</h3>
                    <div className="text-sm text-blue-600 mb-2 font-medium">{image.type}</div>
                    <p className="text-gray-700 mt-1">{image.description}</p>
                    
                   
                    
                    <button
                      onClick={() => handleImageClick(image, index)}
                      className="mt-4 flex items-center text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors group"
                    >
                      <span className="border-b border-transparent group-hover:border-blue-600 transition-all">
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

      {/* Enhanced Image Modal */}
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
                className="absolute -top-12 right-0 text-white hover:text-blue-300 transition-colors p-2"
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
                  <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">
                    {selectedImage.capacity} Capacity
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage.type}
                  </span>
                </div>
                <p className="text-blue-200 mt-3 max-w-2xl mx-auto text-lg">{selectedImage.description}</p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 max-w-md mx-auto">
                  {selectedImage.features.map((feature, i) => (
                    <div key={i} className="text-left flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-sm text-gray-300">
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