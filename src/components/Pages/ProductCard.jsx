import React, { useState } from "react";

// fedder 
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
// spinkler 

import SprinklerSmall from "../Pages/mainkrishnaproducts/SprinklerSmall.png"
import FoggerSingle from "../Pages/mainkrishnaproducts/FoggerSingle.png"
import SprinklerBig from "../Pages/mainkrishnaproducts/SprinklerBig.png"
import Fogger4way from "../Pages/mainkrishnaproducts/Fogger4way.png"






import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card,  CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

// Sample product data
const productData = {
  equipment: [
    {
      name: "Standard Feeder 10 kg",
      image: StandardFeeder10kg,
      description: "Advanced feeder for parent stock management",
      link: "parent-stock-feeder",
    },
   
    {
      name: "Gas Brooder",
      image: GasBrooder,
      description: "Temperature-controlled brooding solution",
      link: "gas-brooder",
    },
    
    {
      name: "belldrinkercls",
      image: BellAutomaticGunDrinker,
      description: "Safe and secure chick transportation",
      link: "chick-crate",
    },
    {
      name: "Grower Drinker 8L",
      image: GrowerDrinker8ltr,
      description: "Large capacity drinker for growing birds",
      link: "grower-drinker",
    },
  ],
  feeders: [
    {
      name: "Chick Feeder 3kg",
      image: StandardFeeder10kg,
      description: "Efficient feeding solution for chicks",
      link: "chick-feeder",
    },
    {
      name: "Chick Feeding 3kg",
      image: ChickFeeder3kg,
      description: "Easy-access drinking system for chicks",
      link: "chick-drinker",
    },
    
    {
      name: "GrowerFedder8kg",
      image: GrowerFeeder8kg,
      description: "Sturdy basin-style drinker for chicks",
      link: "basin-drinker",
    },
    {
      name: "Parenet Feeder Male",
      image: ParenetFeederMale,
      description: "Sturdy basin-style drinker for chicks",
      link: "basin-drinker",

    },
    {
      name: "Parenet Feeder Female",
      image: ParentFeederFemale,
      description: "Sturdy basin-style drinker for chicks",
      link: "basin-drinker",

    }
   
  ],
  accessories: [
    {
      name: "Vaccinator",
      image: Vaccinator,
      description: "Precision vaccination equipment for poultry",
      link: "poultry-vaccinator",
    },
    {
      name: "Sunheater",
      image: SunHeaterwithTimer,
      description: "Energy-efficient heating solution",
      link: "sunheater",
    },
    {
      name: "Sprinkler Big",
      image: SprinklerBig,
      description: "Energy-efficient heating solution",
      link: "sunheater",
    },
    
    {
      name: "Debeaking Machine Automatic",
      image: DebeakingMachineAutomatic,
      description: "Energy-efficient heating solution",
      link: "sunheater",

    },
    {
      name: "Debeaker Machine Manual",
      image: DebeakingMachineManual,
      description: "Energy-efficient heating solution",
      link: "sunheater",

    },
   
  ],
};

// Enhanced ProductCard Component
const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group w-full  sm:p-4">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col border border-gray-200 hover:border-red-100 hover:shadow-red-100/20">
        {/* Image container with loading state */}
        <div className="relative bg-gray-50 w-full flex-1 flex items-center justify-center p-4">
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            </div>
          </div>
          <div className="bg-white p-1 rounded-lg shadow-inner w-full h-full flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-auto max-h-[200px] sm:max-h-[250px] object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          </div>
        </div>
        <CardHeader className="p-2 border-t border-gray-100">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
        </CardHeader>
       
      </Card>
    </div>
  );
};

// Enhanced Counter Component
const CounterSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12 max-w-5xl mx-auto">
      {[
        { count: "15+", label: "Years Experience" },
        { count: "1000+", label: "Happy Customers" },
        { count: "50+", label: "Products" },
        { count: "15+", label: "Countries Served" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center transition-all hover:shadow-md hover:border-red-100"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
            {item.count}
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

// Enhanced Image Carousel Component





const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [CageBabyFeeder1andhalgkg,    TurboFeeder5kg, ParentFeederFemale,ParenetFeederMale,StandardFeeder10kg,GrowerFeeder8kg,
    ChickFeeder3kg,JumboAutomaticDrinkerClassic,BasinChickDrinker2point5ltr,GrowerDrinker8ltr,
    CageBabyDrinker1and2ltr,ChickDrinker3ltr,NippleDrinker,JumboAutomaticDrinkerStandard,BellAutomaticGunDrinker,
    ChickGuard30ft15ft,DebeakingMachineAutomatic,ElectricBrooder,FlameGun4,SunHeaterwithTimer,DebeakingMachineManual,GasBrooder,Vaccinator,ClockHumidityHTC,Eleven,DigitalThermomometer
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
      {/* Image Wrapper with Loading Background */}
      <div className="relative bg-gray-50 w-full h-[300px] md:h-[400px] flex items-center justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="bg-white p-8 rounded-lg shadow-inner w-full h-full flex items-center justify-center">
              <img
                src={img}
                alt={`Product showcase ${index + 1}`}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white text-gray-800 hover:text-red-600 transition-colors"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white text-gray-800 hover:text-red-600 transition-colors"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-red-600 w-6' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Component
const ResponsiveProductShowcase = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white px-4 py-12 sm:py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            <span className="text-red-600">Welcome To Krishna Poultry</span>{" "}
            <span className="text-gray-800 block md:inline mt-2 md:mt-0">
              Equipments Manufacturer & Traders
            </span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Premium poultry equipment designed to optimize your farming operations with reliability and efficiency.
        </p>

        {/* Carousel */}
        <div className="mb-16">
          <ImageCarousel />
        </div>

        {/* Counter Section */}
        <CounterSection />
      </div>

      {/* Product Tabs */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 inline-block relative pb-2">
            Our Product Range
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"></span>
          </h2>
        </div>

        <Tabs defaultValue="equipment" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 p-1 rounded-lg">
              <TabsTrigger
                value="equipment"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Poultry Equipment
              </TabsTrigger>
              <TabsTrigger
                value="feeders"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Feeders & Drinkers
              </TabsTrigger>
              <TabsTrigger
                value="accessories"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Accessories
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="equipment" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData.equipment.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feeders" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData.feeders.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accessories" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData.accessories.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResponsiveProductShowcase;