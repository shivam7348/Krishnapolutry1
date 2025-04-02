import React, { useState } from 'react';

// feederImg
import CageBabyFeeder1andhalgkg from "../Pages/mainkrishnaproducts/CageBabyFeeder1andhalgkg.png"
import TurboFeeder5kg from "../Pages/mainkrishnaproducts/TurboFeeder5kg.png"
import ParentFeederFemale from "../Pages/mainkrishnaproducts/ParentFeederFemale.png"
import ParenetFeederMale from "../Pages/mainkrishnaproducts/ParenetFeederMale.png"
import StandardFeeder10kg from "../Pages/mainkrishnaproducts/StandardFeeder10kg.png"
import GrowerFeeder8kg from "../Pages/mainkrishnaproducts/GrowerFeeder8kg.png"
import ChickFeeder3kg from "../Pages/mainkrishnaproducts/ChickFeeder3kg.png"

// drinker Img
import BellAutomaticGunDrinker from "../Pages/mainkrishnaproducts/BellAutomaticGunDrinker.png"
import JumboAutomaticDrinkerClassic from "../Pages/mainkrishnaproducts/JumboAutomaticDrinkerClassic.png"
import BasinChickDrinker2point5ltr from "../Pages/mainkrishnaproducts/BasinChickDrinker2point5ltr.png"
import GrowerDrinker8ltr from "../Pages/mainkrishnaproducts/GrowerDrinker8ltr.png"
import CageBabyDrinker1and2ltr from "../Pages/mainkrishnaproducts/CageBabyDrinker1and2ltr.png"
import ChickDrinker3ltr from "../Pages/mainkrishnaproducts/ChickDrinker3ltr.png"
import NippleDrinker from "../Pages/mainkrishnaproducts/NippleDrinker.png"
import JumboAutomaticDrinkerStandard from "../Pages/mainkrishnaproducts/JumboAutomaticDrinkerStandard.png"

// broader img 
import ChickGuard30ft15ft from "../Pages/mainkrishnaproducts/ChickGuard30ft15ft.png"
import DebeakingMachineAutomatic from "../Pages/mainkrishnaproducts/DebeakingMachineAutomatic.png"
import ElectricBrooder from "../Pages/mainkrishnaproducts/ElectricBrooder.png"
import FlameGun4 from "../Pages/mainkrishnaproducts/FlameGun4.png"
import SunHeaterwithTimer from "../Pages/mainkrishnaproducts/SunHeaterwithTimer.png"
import DebeakingMachineManual from "../Pages/mainkrishnaproducts/DebeakingMachineManual.png"
import GasBrooder from "../Pages/mainkrishnaproducts/GasBrooder.png"

// others 
import Vaccinator from "../Pages/mainkrishnaproducts/Vaccinator.png"
import ClockHumidityHTC from "../Pages/mainkrishnaproducts/ClockHumidityHTC.png"
import Eleven from "../Pages/mainkrishnaproducts/Eleven.png"
import DigitalThermomometer from "../Pages/mainkrishnaproducts/DigitalThermomometer.png"

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

// Improved Product Card Component
const ProductCard = ({ image, index }) => (
  <motion.div 
    variants={itemVariants}
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
  >
    <div className="relative pt-[100%] overflow-hidden bg-gray-100"> {/* Maintain aspect ratio */}
      <img 
        src={image.src} 
        alt={image.alt} 
        className="absolute top-0 left-0 w-full h-full object-contain p-4" /* Changed to object-contain */
        loading="lazy" /* Lazy loading for better performance */
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{image.title}</h3>
      <p className="text-gray-600 text-sm mt-auto">{image.description}</p>
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
    className="mb-10 text-center md:text-left"
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-3">
      {title}
      <span className="block w-16 h-1 bg-blue-500 mx-auto md:mx-0 mt-2"></span>
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto md:mx-0">
      {description}
    </p>
  </motion.div>
);

// Improved ProductSection component
const ProductSection = ({ title, description, images }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  
  const currentImages = images.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={title} description={description} />
        
        <div className="relative">
          {images.length > itemsPerPage && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Next products"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </>
          )}
          
          <motion.div
            key={currentPage} // Use currentPage as key to reset animation
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentImages.map((image, index) => (
              <ProductCard key={`${image.title}-${index}`} image={image} index={index} />
            ))}
          </motion.div>
          
          {images.length > itemsPerPage && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPage ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
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
    title: "Poultry Feeders",
    description: "High-quality feeders designed for optimal poultry nutrition and minimal waste.",
    images: [
      {
        src: CageBabyFeeder1andhalgkg,
        alt: "Cage Baby Feeder",
        title: "Cage Baby Feeder 1/2 kg",
        description: "Perfect for small chicks with precise portion control"
      },
      {
        src: TurboFeeder5kg,
        alt: "Turbo Feeder",
        title: "Turbo Feeder 5 kg",
        description: "High-capacity feeder for growing poultry"
      },
      {
        src: ParentFeederFemale,
        alt: "Parent Feeder Female",
        title: "Parent Feeder Female",
        description: "Specialized design for breeding hens"
      },
      {
        src: ParenetFeederMale,
        alt: "Parent Feeder Male",
        title: "Parent Feeder Male",
        description: "Durable construction for breeding roosters"
      },
      {
        src: StandardFeeder10kg,
        alt: "Standard Feeder",
        title: "Standard Feeder 10 kg",
        description: "Versatile feeder for all poultry types"
      },
      {
        src: GrowerFeeder8kg,
        alt: "Grower Feeder",
        title: "Grower Feeder 8 kg",
        description: "Ideal for adolescent poultry"
      },
      {
        src: ChickFeeder3kg,
        alt: "Chick Feeder",
        title: "Chick Feeder 3 kg",
        description: "Starter feeder for newborn chicks"
      },
    ]
  };

  return <ProductSection {...data} />;
};

// Drinker Component
export const Drinker = () => {
  const data = {
    title: "Poultry Drinkers",
    description: "Innovative water systems designed for hygiene and easy access.",
    images: [
      {
        src: BellAutomaticGunDrinker,
        alt: "Bell Automatic Drinker",
        title: "Bell Automatic Drinker",
        description: "Reliable water supply with clean design"
      },
      {
        src: JumboAutomaticDrinkerClassic,
        alt: "Jumbo Automatic Drinker",
        title: "Jumbo Automatic Drinker",
        description: "Large capacity for flocks"
      },
      {
        src: BasinChickDrinker2point5ltr,
        alt: "Basin Chick Drinker",
        title: "Basin Chick Drinker 2.5L",
        description: "Safe design for young chicks"
      },
      {
        src: GrowerDrinker8ltr,
        alt: "Grower Drinker",
        title: "Grower Drinker 8L",
        description: "Perfect for growing poultry"
      },
      {
        src: CageBabyDrinker1and2ltr,
        alt: "Cage Baby Drinker",
        title: "Cage Baby Drinker 1/2L",
        description: "Compact design for small spaces"
      },
      {
        src: ChickDrinker3ltr,
        alt: "Chick Drinker",
        title: "Chick Drinker 3L",
        description: "Starter drinker for chicks"
      },
      {
        src: NippleDrinker,
        alt: "Nipple Drinker",
        title: "Nipple Drinker",
        description: "Hygienic water delivery system"
      },
      {
        src: JumboAutomaticDrinkerStandard,
        alt: "Jumbo Standard Drinker",
        title: "Jumbo Standard Drinker",
        description: "Standard version for all poultry"
      },
    ]
  };

  return <ProductSection {...data} />;
};

// Brooder & Debeaker Component
export const BrooderDebeaker = () => {
  const data = {
    title: "Brooders & Debeakers",
    description: "Essential equipment for poultry health and management.",
    images: [
      {
        src: GasBrooder,
        alt: "Gas Brooder",
        title: "Gas Brooder",
        description: "Efficient heating for young poultry"
      },
      {
        src: ChickGuard30ft15ft,
        alt: "Chick Guard",
        title: "Chick Guard 30ft/15ft",
        description: "Protective barrier for chicks"
      },
      {
        src: DebeakingMachineAutomatic,
        alt: "Automatic Debeaker",
        title: "Automatic Debeaker",
        description: "Precision debeaking with safety"
      },
      {
        src: DebeakingMachineManual,
        alt: "Manual Debeaker",
        title: "Manual Debeaker",
        description: "Reliable manual option"
      },
      {
        src: SunHeaterwithTimer,
        alt: "Sun Heater",
        title: "Sun Heater with Timer",
        description: "Programmable heating solution"
      },
      {
        src: FlameGun4,
        alt: "Flame Gun",
        title: "Flame Gun 4-way",
        description: "Versatile farm tool"
      },
      {
        src: ElectricBrooder,
        alt: "Electric Brooder",
        title: "Electric Brooder",
        description: "Clean electric heating"
      },
    ]
  };

  return <ProductSection {...data} />;
};

// Others Component
export const Others = () => {
  const data = {
    title: "Poultry Accessories",
    description: "Additional equipment for complete poultry farm management.",
    images: [
      {
        src: Vaccinator,
        alt: "Vaccinator",
        title: "Vaccinator",
        description: "Precision vaccination tool"
      },
      {
        src: ClockHumidityHTC,
        alt: "Hygrometer",
        title: "Digital Hygrometer",
        description: "Monitor farm conditions"
      },
      {
        src: Eleven,
        alt: "Gear",
        title: "Eleven Tooth Gear",
        description: "Machine replacement part"
      },
      {
        src: DigitalThermomometer,
        alt: "Thermometer",
        title: "Digital Thermometer",
        description: "Accurate temperature reading"
      },
    ],
  };

  return <ProductSection {...data} />;
};

// Main Component
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