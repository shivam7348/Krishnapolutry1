import React from 'react';
// feederImg
import cagebabyfeeder1by2kg from "../Pages/mainkrishnaproducts/cagebabyfeeder1by2kg.jpg"
import  parentfeedermale from "../Pages/mainkrishnaproducts/parentfeedermale.jpg"
import  standardfeeder10kg from "../Pages/mainkrishnaproducts/standardfeeder10kg.jpg"
import  parentfeederfemale from "../Pages/mainkrishnaproducts/parentfeederfemale.jpg"
// drinker Img
import babychickendrinker25ltr from "../Pages/2products/babychickendrinker25ltr.jpg"
import nippledrinker from "../Pages/mainkrishnaproducts/nippledrinker.jpg"
import jumboautomaticdrinker from "../Pages/2products/jumboautomaticdrinker.jpg"
import cagebabydrinker1by2Ltr from "../Pages/mainkrishnaproducts/cagebabydrinker1by2Ltr.jpg"
// broader img 

import broader from "../Pages/mainkrishnaproducts/broader.jpg"
// others 

import vaccinator from "../Pages/mainkrishnaproducts/vaccinator.jpg"
import foogersingle from "../Pages/2products/foogersingle.jpg"
import fog from "../Pages/2products/fog.jpg"
import sprinkler from "../Pages/2products/sprinkler.jpg"


import { motion } from 'framer-motion';
import { Import } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Product Card Component
const ProductCard = ({ image, index }) => (
  <motion.div 
    variants={itemVariants}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
  >
    <div className="relative h-72 overflow-hidden">
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white font-medium">{image.description}</span>
      </div>
    </div>
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{image.title}</h3>
     
    </div>
  </motion.div>
);

// Section Header Component
const SectionHeader = ({ title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-12"
  >
    <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
      {title}
      <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-500"></span>
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
      {description}
    </p>
  </motion.div>
);

// Product Component Template
const ProductSection = ({ title, description, images }) => {
  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {images.map((image, index) => (
            <ProductCard key={index} image={image} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Feeder Component
export const Feeder = () => {
  const data = {
    title: " Poultry Feeders Equipments",
    description: "Engineered for efficiency and durability, our poultry feeders minimize waste while ensuring optimal feed accessibility. Designed with precision to meet the needs of modern poultry operations at any scale.",
    images: [
      {
        src: cagebabyfeeder1by2kg,
        alt: "Automatic poultry feeder",
        title: "Cage Baby Feeder 1/2 kg",
        description: "Smart feeding technology for precision nutrition"
      },
      {
        src: parentfeedermale,
        alt: "Hanging poultry feeder",
        title: "Parent Feeder Male ",
        description: "Optimized for high-density poultry housing"
      },
      {
        src: standardfeeder10kg,
        alt: "Trough poultry feeder",
        title: "Standard Feeder 10kg",
        description: "Industrial-grade construction for longevity"
      },
      {
        src: parentfeederfemale,
        alt: "Chick feeder",
        title: "Parent Feeder Female ",
        description: "Specialized design for optimal chick development"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Drinker Component
export const Drinker = () => {
  const data = {
    title: "Advanced Poultry Drinkers",
    description: "Our innovative drinking systems promote poultry health through clean, accessible water delivery. Engineered to reduce contamination and water waste while ensuring constant hydration.",
    images: [
      {
        src: babychickendrinker25ltr,
        alt: "Automatic poultry drinker",
        title: "Baby Chicken Drinker 2.5ltr",
        description: "Continuous water circulation technology"
      },
      {
        src: nippledrinker,
        alt: "Nipple drinker",
        title: "Nipple Drinker",
        description: "Patented anti-leak design"
      },
      {
        src: cagebabydrinker1by2Ltr,
        alt: "Bell drinker",
        title: "Cage  Baby Drinker 1/2ltr",
        description: "Self-cleaning water distribution"
      },
      {
        src: jumboautomaticdrinker,
        alt: "Chick drinker",
        title: "Chick Drinker 3ltr",
        description: "Gentle water delivery for young birds"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Brooder & Debeaker Component
export const BrooderDebeaker = () => {
  const data = {
    title: "Brooder & Beak Management Solutions",
    description: "Comprehensive solutions for poultry health management. Our precision-engineered brooders create optimal thermal environments, while our debeaking systems ensure humane, stress-free operations.",
    images: [
      {
        src: broader,
        alt: " Gas Brooder",
        title: "Gas Brooder",
        description: "Energy-efficient radiant heat technology"
      },
      {
        src: foogersingle,
        alt: "Electric Brooder",
        title: "GasPro Brooder System",
        description: "High-capacity heating for large operations"
      },
      {
        src: fog,
        alt: "Electric debeaker",
        title: "PrecisionCut Debeaker",
        description: "Temperature-controlled beak treatment"
      },
      {
        src: "https://images.unsplash.com/photo-1556910637-9a8c0a6e1b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        alt: "Manual debeaker",
        title: "QuickTrim Manual System",
        description: "Ergonomic design for operator comfort"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Bird Tray Component
export const BirdTray = () => {
  const data = {
    title: "Specialized Bird Handling Solutions",
    description: "Engineered for efficiency in egg collection and bird management. Our trays feature durable, easy-to-clean materials designed to withstand rigorous farm use while protecting your birds.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1556910637-9a8c0a6e1b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        alt: "Egg collection tray",
        title: "EggSafe Collection System",
        description: "Anti-roll design with cushioning"
      },
      {
        src: "https://images.unsplash.com/photo-1556910637-9a8c0a6e1b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        alt: "Transport tray",
        title: "Ventura Transport Tray",
        description: "Ventilated design for bird comfort"
      },
      {
        src: "https://images.unsplash.com/photo-1556910637-9a8c0a6e1b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        alt: "Sorting tray",
        title: "SmartSort Tray System",
        description: "Modular design for efficient processing"
      },
      {
        src: "https://images.unsplash.com/photo-1556910637-9a8c0a6e1b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        alt: "Multi-purpose tray",
        title: "MultiFlex Utility Tray",
        description: "Adaptable design for multiple applications"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Others Component
export const Others = () => {
  const data = {
    title: "Complete Poultry Equipment Solutions",
    description: "Our comprehensive range of poultry equipment is designed to optimize every aspect of your operation, from housing to environmental control and maintenance.",
    images: [
      {
        src: vaccinator,
        alt: "vaccinator",
        title: "Vaccinator",
        description: "Ergonomic design for egg production"
      },
     
      {
        src: sprinkler,
        alt: "sprinkler",
        title: "Sprinkler",
        description: "Hygiene maintenance systems"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Main Component with all products
const Products = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Feeder />
      <Drinker />
      <BrooderDebeaker />
      <BirdTray />
      <Others />
    </div>
  );
};

export default Products;