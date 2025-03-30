import React, { useState } from 'react';
// feederImg
import cagebabyfeeder1by2kg from "../Pages/mainkrishnaproducts/cagebabyfeeder1by2kg.jpg"
import parentfeedermale from "../Pages/mainkrishnaproducts/parentfeedermale.jpg"
import standardfeeder10kg from "../Pages/mainkrishnaproducts/standardfeeder10kg.jpg"
import parentfeederfemale from "../Pages/mainkrishnaproducts/parentfeederfemale.jpg"
import chickFeedingTray from "../Pages/2products/chickFeedingTray.jpg"
import GrowerFedder8kg from "../Pages/mainkrishnaproducts/GrowerFedder8kg.jpg"

// drinker Img
import babychickendrinker25ltr from "../Pages/2products/babychickendrinker25ltr.jpg"
import nippledrinker from "../Pages/mainkrishnaproducts/nippledrinker.jpg"
import jumboautomaticdrinker from "../Pages/2products/jumboautomaticdrinker.jpg"
import cagebabydrinker1by2Ltr from "../Pages/mainkrishnaproducts/cagebabydrinker1by2Ltr.jpg"
import ChickDrinker3ltr from "../Pages/mainkrishnaproducts/ChickDrinker3ltr.jpg"
import belldrinkercls from "../Pages/mainkrishnaproducts/belldrinkercls.jpg"


// broader img 
import broader from "../Pages/mainkrishnaproducts/broader.jpg"
// others 
import vaccinator from "../Pages/mainkrishnaproducts/vaccinator.jpg"
import foogersingle from "../Pages/2products/foogersingle.jpg"
import sprinkler from "../Pages/2products/sprinkler.jpg"
import debeakermachinemanual from "../Pages/mainkrishnaproducts/debeakermachinemanual.jpg"
import debeakingmachineautimatic from "../Pages/mainkrishnaproducts/debeakingmachineautimatic.jpg"
import sunheaterwithTimer from "../Pages/2products/sunheaterwithTimer.jpg"
import flamegun4way from "../Pages/2products/flamegun4way.jpg"
import chicktransporationbox from "../Pages/mainkrishnaproducts/chicktransporationbox.jpg"
import eggtray from "../Pages/mainkrishnaproducts/eggtray.jpg"
import BirdTransporation from "../Pages/mainkrishnaproducts/BirdTransporation.jpg"




import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

// Product Component Template with Pagination
// Updated ProductSection component with fixed animation on pagination
const ProductSection = ({ title, description, images }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // Add this line
  const itemsPerPage = 4;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  
  const currentImages = images.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => {
      const newPage = (prev + 1) % totalPages;
      setAnimationKey(prevKey => prevKey + 1); // Reset animation key
      return newPage;
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      const newPage = (prev - 1 + totalPages) % totalPages;
      setAnimationKey(prevKey => prevKey + 1); // Reset animation key
      return newPage;
    });
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    setAnimationKey(prevKey => prevKey + 1); // Reset animation key
  };

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        
        <div className="relative">
          {images.length > itemsPerPage && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Next products"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </>
          )}
          
          {/* Add key prop to force re-render and re-animate */}
          <motion.div
            key={animationKey} // This ensures animations replay on page change
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {currentImages.map((image, index) => (
              <ProductCard key={`${image.title}-${index}-${currentPage}`} image={image} index={index} />
            ))}
          </motion.div>
          
          {images.length > itemsPerPage && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPage ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
// Feeder Component
export const Feeder = () => {
  const data = {
    title: "Poultry Feeders Equipments",
    description: "Engineered for efficiency and durability, our poultry feeders minimize waste while ensuring optimal feed accessibility. Designed with precision to meet the needs of modern poultry operations at any scale.",
    images: [
      {
        src: cagebabyfeeder1by2kg,
        alt: "Cage Baby Feeder",
        title: "Cage Baby Feeder 1/2 kg",
        description: "Smart feeding technology for precision nutrition"
      },
      {
        src: parentfeedermale,
        alt: "Parent Feeder Male",
        title: "Parent Feeder Male",
        description: "Optimized for high-density poultry housing"
      },
      {
        src: standardfeeder10kg,
        alt: "Standard Feeder",
        title: "Standard Feeder 10kg",
        description: "Industrial-grade construction for longevity"
      },
      {
        src: parentfeederfemale,
        alt: "Parent Feeder Female",
        title: "Parent Feeder Female",
        description: "Specialized design for optimal chick development"
      },
      {
        src: chickFeedingTray,
        alt: "Parent Feeder Female",
        title: "Chick Feeding Tray",
        description: "Specialized design for optimal chick development"
      },
      {
        src: GrowerFedder8kg,
        alt: "Parent Feeder Female",
        title: "Parent Feeder Female",
        description: "Specialized design for optimal chick development"
      },
      {
        src: parentfeederfemale,
        alt: "Parent Feeder Female",
        title: "Parent Feeder Female",
        description: "Specialized design for optimal chick development"
      },
      {
        src: parentfeederfemale,
        alt: "Parent Feeder Female",
        title: "Parent Feeder Female",
        description: "Specialized design for optimal chick development"
      },
    
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
        alt: "Baby Chicken Drinker",
        title: "Baby Chicken Drinker 2.5ltr",
        description: "Continuous water circulation technology"
      },
      {
        src: nippledrinker,
        alt: "Nipple Drinker",
        title: "Nipple Drinker",
        description: "Patented anti-leak design"
      },
      {
        src: cagebabydrinker1by2Ltr,
        alt: "Cage Baby Drinker",
        title: "Cage Baby Drinker 1/2ltr",
        description: "Self-cleaning water distribution"
      },
      {
        src: jumboautomaticdrinker,
        alt: "Jumbo Automatic Drinker",
        title: "Jumbo Automatic Drinker",
        description: "Gentle water delivery for young birds"
      },
      {
        src: babychickendrinker25ltr,
        alt: "Baby Chicken Drinker Pro",
        title: "Baby Chicken Drinker Pro",
        description: "Upgraded version with larger capacity"
      },
      {
        src: ChickDrinker3ltr,
        alt: "Baby Chicken Drinker Pro",
        title: " Chicken Drinker 3ltr",
        description: "Upgraded version with larger capacity"

      },
     
      {
        src: belldrinkercls,
        alt: "Baby Chicken Drinker Pro",
        title: " Chicken Drinker 3ltr",
        description: "Upgraded version with larger capacity"

      }
      
    ]
  };

  return <ProductSection {...data} />;
};

// Brooder & Debeaker Component
export const BrooderDebeaker = () => {
  const data = {
    title: "Brooder & Debeaker",
    description: "Comprehensive solutions for poultry health management. Our precision-engineered brooders create optimal thermal environments, while our debeaking systems ensure humane, stress-free operations.",
    images: [
      {
        src: broader,
        alt: "Gas Brooder",
        title: "Gas Brooder",
        description: "Energy-efficient radiant heat technology"
      },
      {
        src: foogersingle,
        alt: "Fogger Single",
        title: "Fogger Single",
        description: "High-capacity heating for large operations"
      },
      {
        src: debeakingmachineautimatic,
        alt: "Automatic Debeaking Machine",
        title: "Debeaking Machine Automatic",
        description: "Temperature-controlled beak treatment"
      },
      {
        src: debeakermachinemanual,
        alt: "Manual Debeaking Machine",
        title: "Debeaker Machine Manual",
        description: "Ergonomic design for operator comfort"
      },
      {
        src: broader,
        alt: "Gas Brooder Pro",
        title: "Gas Brooder Pro",
        description: "Professional grade with temperature control"
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
        alt: "Vaccinator",
        title: "Vaccinator",
        description: "Precision vaccination equipment"
      },
      {
        src: sprinkler,
        alt: "Sprinkler",
        title: "Sprinkler",
        description: "Hygiene maintenance systems"
      },
      {
        src: sunheaterwithTimer,
        alt: "Sun Heater with Timer",
        title: "Sun Heater With Timer",
        description: "Automated temperature control"
      },
      {
        src: chicktransporationbox,
        alt: "Chick Transportation Box",
        title: "Chick Transportation Box",
        description: "Safe transport for young birds"
      },
      {
        src: flamegun4way,
        alt: "Vaccinator Pro",
        title: "Flame Gun 4 Way",
        description: "Advanced vaccination system"
      },
      {
        src: sprinkler,
        alt: "Sprinkler System",
        title: "Sprinkler System",
        description: "Complete farm hygiene solution"
      },
      {
        src: eggtray,
        alt: "Sprinkler System",
        title: "Egg Tray",
        description: "Complete farm hygiene solution"

      },
      {
        src: BirdTransporation,
        alt: "Sprinkler System",
        title: "Bird Transporation",
        description: "Complete farm hygiene solution"


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
      <Others />
    </div>
  );
};

export default Products;