import React, { useState, useRef } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Package, ChevronRight, ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "../../../Banner/Banner";

// Import images
import CageBabyFeeder1andhalgkg from "../mainkrishnaproducts/CageBabyFeeder1andhalgkg.png";
import TurboFeeder5kg from "../mainkrishnaproducts/TurboFeeder5kg.png";
import ParentFeederFemale from "../mainkrishnaproducts/ParentFeederFemale.png";
import ParenetFeederMale from "../mainkrishnaproducts/ParenetFeederMale.png";
import StandardFeeder10kg from "../mainkrishnaproducts/StandardFeeder10kg.png";
import GrowerFeeder8kg from "../mainkrishnaproducts/GrowerFeeder8kg.png";
import ChickFeeder3kg from "../mainkrishnaproducts/ChickFeeder3kg.png";

const FeederShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);
  const breadcrumb = [{ name: "Home", link: "/", active: true }];

  // Image data with descriptions
  const feederImages = [
    {
      src: CageBabyFeeder1andhalgkg,
      alt: "Cage Baby Feeder 1.5kg",
      description: "Compact feeder designed for chicks with precise portion control",
      capacity: "1.5kg",
      type: "Chick Starter"
    },
    {
      src: ParenetFeederMale,
      alt: "Parent Feeder Male",
      description: "Durable feeder designed for breeding roosters with high-capacity storage",
      
      type: "Breeder"
    },
    {
      src: ParentFeederFemale,
      alt: "Parent Feeder Female",
      description: "Specialized feeder for hens with ergonomic feeding access",
      capacity: "6kg",
      type: "Breeder"
    },
    {
      src: StandardFeeder10kg,
      alt: "Standard Feeder 10kg",
      description: "Versatile all-purpose feeder with large capacity for growing flocks",
      capacity: "10kg",
      type: "Grower"
    },
    {
      src: ChickFeeder3kg,
      alt: "Chick Feeder 3kg",
      description: "Gentle feed flow system perfect for young chicks",
      capacity: "3kg",
      type: "Chick"
    },
    {
      src: GrowerFeeder8kg,
      alt: "Grower Feeder 8kg",
      description: "Intermediate feeder for rapidly growing birds",
      capacity: "8kg",
      type: "Grower"
    },
    {
      src: TurboFeeder5kg,
      alt: "Turbo Feeder 5kg",
      description: "High-efficiency design with rapid feed distribution",
      capacity: "5kg",
      type: "All-purpose"
    }
  ];

  const features = [
    {
      id: "features",
      icon: <Package className="w-5 h-5" />,
      title: "Key Features",
      content: [
        "Large capacity feed storage (up to 15kg)",
        "Anti-waste design with precision flow control",
        "UV-stabilized, food-grade plastic construction",
        "Easy disassembly for thorough cleaning",
        "Adjustable height options available"
      ],
    },
    {
      id: "technical",
      icon: <Settings className="w-5 h-5" />,
      title: "Technical Specs",
      content: [
        "Precision-engineered feed flow mechanisms",
        "360° access for uniform flock feeding",
        "Weather-resistant gaskets and seals",
        "Modular design for easy maintenance",
        "Tested for 50,000+ open/close cycles"
      ],
    },
    {
      id: "quality",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Quality Assurance",
      content: [
        "ISO 9001:2015 certified manufacturing",
        "Each unit undergoes 12-point inspection",
        "Premium materials with antimicrobial additives",
        "3-year warranty against defects",
        "Veterinary-approved designs"
      ],
    },
  ];

  const stats = [
    { value: "10,000+", label: "Units Installed", icon: "🏭" },
    { value: "99.2%", label: "Feed Retention", icon: "📊" },
    { value: "5-15kg", label: "Capacity Range", icon: "⚖️" },
    { value: "7 Years", label: "Average Lifespan", icon: "⏳" },
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
        prev === 0 ? feederImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev =>
        prev === feederImages.length - 1 ? 0 : prev + 1
      );
    }
    setSelectedImage(feederImages[currentImageIndex]);
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
        title="Premium Poultry Feeders"
        image="https://skapoultryequipment.com/wp-content/uploads/2021/06/chicken-drinkers-drinkers-for-chickens-automatic-water-drinkers-for-chickens-broiler-drinkers-3.jpg"
        breadcrumbItems={breadcrumb}
      />

      <div className="bg-gradient-to-br from-gray-50 via-rose-50 to-amber-50 min-h-screen">
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
                    <Award className="text-red-600 w-5 h-5" />
                    <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                      Industry-Leading Feeders
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Advanced Poultry Feeding Systems
                    <span className="block text-red-600 mt-2 text-2xl md:text-3xl font-semibold">
                      Optimized for Efficiency & Longevity
                    </span>
                  </h1>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our precision-engineered feeders minimize waste while ensuring equal access to feed. 
                    Developed through years of poultry farming experience, each model addresses specific 
                    needs across different growth stages and flock sizes.
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-50 to-amber-50 p-4 rounded-lg border border-red-100">
                    <h3 className="font-semibold text-red-800 flex items-center">
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      Trusted by poultry farmers worldwide
                    </h3>
                    <p className="text-gray-700 mt-1 text-sm">
                      All feeders come with our 3-year satisfaction guarantee
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
                        className={`pb-3 px-1 flex items-center space-x-2 transition-all ${activeTab === feature.id
                          ? "border-b-2 border-red-500 text-red-600 font-medium"
                          : "text-gray-500 hover:text-red-500"
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
                              <ArrowRight className="w-4 h-4 text-red-400 group-hover:text-red-600 transition-colors" />
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
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-all"
                    >
                      <div className="text-2xl font-bold text-red-600 flex items-center justify-center space-x-2">
                        <span>{stat.icon}</span>
                        <span>{stat.value}</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">
                        {stat.label}
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
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Navigation</h3>
                  <div className="flex flex-wrap gap-2">
                    {feederImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToImage(index)}
                        className="px-3 py-1.5 text-xs bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium"
                      >
                        {image.alt.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Image Gallery (Scrollable) */}
            <div className="space-y-10">
              {feederImages.map((image, index) => (
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
                        <ChevronRight className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                  </div>

                  {/* Description Container */}
                  <div className="mt-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100 relative">
                    <div className="absolute -top-3 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {image.capacity}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{image.alt}</h3>
                    <div className="text-sm text-gray-500 mb-2">{image.type}</div>
                    <p className="text-gray-700 mt-1">{image.description}</p>
                    <button
                      onClick={() => handleImageClick(image, index)}
                      className="mt-4 flex items-center text-red-600 font-medium text-sm hover:text-red-800 transition-colors group"
                    >
                      <span className="border-b border-transparent group-hover:border-red-600 transition-all">
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
                className="absolute -top-12 right-0 text-white hover:text-red-300 transition-colors p-2"
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
                <div className="flex justify-center items-center space-x-4 mt-2">
                  <span className="bg-red-600/30 text-red-200 px-3 py-1 rounded-full text-sm">
                    {selectedImage.capacity} Capacity
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage.type}
                  </span>
                </div>
                <p className="text-red-200 mt-3 max-w-2xl mx-auto">{selectedImage.description}</p>
                <div className="mt-4 text-sm text-gray-300">
                  {currentImageIndex + 1} of {feederImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeederShowcase;