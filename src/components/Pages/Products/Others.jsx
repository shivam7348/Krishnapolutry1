import React, { useState } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Box } from "lucide-react";
import Banner from "@/Banner/Banner";

import Vaccinator from "../mainkrishnaproducts/Vaccinator.png"
import ClockHumidityHTC from "../mainkrishnaproducts/ClockHumidityHTC.png"
import Eleven from "../mainkrishnaproducts/Eleven.png"
import DigitalThermomometer from "../mainkrishnaproducts/DigitalThermomometer.png"
import rakingmachine from "../2products/rakingmachine.JPG"



const OthersShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const breadcrumb = [{ name: "Home", link: "/", active: true }];

  // Image data with descriptions
  const otherImages = [
    {
      src: Vaccinator,
      alt: "Vaccinator",
      description: "Our advanced vaccinator equipment for poultry farming ensures precise and efficient vaccination of your livestock."
    },
    {
      src: rakingmachine,
      alt: "Raking Machine",
      description: "Our advanced vaccinator equipment for poultry farming ensures precise and efficient vaccination of your livestock."
    },
    {
      src: Eleven,
      alt: "Eleven Tooth",
      description: "High-quality eleven tooth gear designed for durability and smooth operation in agricultural machinery."
    },
    {
      src: ClockHumidityHTC,
      alt: "Digital Thermometer",
      description: "High-quality eleven tooth gear designed for durability and smooth operation in agricultural machinery."
    },
    {
      src: DigitalThermomometer,
      alt: "Room Thermometer Big",
      description: "High-quality eleven tooth gear designed for durability and smooth operation in agricultural machinery."
    },

  ];

  const features = [
    {
      id: "features",
      icon: <Box className="w-6 h-6" />,
      title: "Features",
      content: [
        "High-quality materials",
        "Versatile usage",
        "Easy to maintain",
        "Durable and long-lasting",
      ],
    },
    {
      id: "technical",
      icon: <Settings className="w-6 h-6" />,
      title: "Technical",
      content: [
        "Precision engineering",
        "Energy-efficient design",
        "Modular components",
        "Weather-resistant",
      ],
    },
    {
      id: "quality",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality",
      content: [
        "ISO certified",
        "Rigorous testing",
        "Premium materials",
        "Extended warranty",
      ],
    },
  ];

  const stats = [
    { value: "5000+", label: "Units Sold" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "1000 sq.ft", label: "Coverage Area" },
    { value: "10yr", label: "Lifespan" },
  ];

  return (
    <>
      <Banner
        title="Other Products"
        image="https://media.istockphoto.com/id/478287121/photo/chickens-on-traditional-free-range-poultry-farm.jpg?s=612x612&w=0&k=20&c=6pIj6E6VgJ9XNHv1C4Pjtd20pzZ_9w4np1k6HVtZK9I="
        breadcrumbItems={breadcrumb}
      />
      <div className="bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#fbc2eb] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Content Section - Left Side (Fixed) */}
            <div className="lg:sticky lg:top-16 lg:h-fit">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Award className="text-orange-600 w-6 h-6" />
                    <span className="text-orange-600 font-semibold">
                      Advanced Product Solutions
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    Our Premium Product Line
                    <span className="block text-orange-600">
                      Quality & Innovation Redefined
                    </span>
                  </h1>
                  <p className="text-gray-800 leading-relaxed">
                    Discover our wide range of premium products designed to meet
                    your needs. With a focus on quality and innovation, our
                    products are built to provide the best performance and
                    durability.
                  </p>
                </div>

                {/* Feature Tabs */}
                <div className="space-y-6">
                  <div className="flex space-x-4 border-b border-orange-200">
                    {features.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => setActiveTab(feature.id)}
                        className={`pb-4 flex items-center space-x-2 ${
                          activeTab === feature.id
                            ? "border-b-2 border-orange-500 text-gray-800"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {feature.icon}
                        <span>{feature.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    {features.map(
                      (feature) =>
                        activeTab === feature.id && (
                          <ul key={feature.id} className="space-y-4">
                            {feature.content.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center space-x-3"
                              >
                                <ArrowRight className="w-4 h-4 text-orange-400" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )
                    )}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md text-center"
                    >
                      <div className="text-3xl font-bold text-orange-600">
                        {stat.value}
                      </div>
                      <div className="text-sm text-orange-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Grid - Right Side (Scrollable) */}
            <div className="space-y-8">
              {otherImages.map((image, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto max-h-[500px] object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{image.alt}</h3>
                    <p className="text-gray-700">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OthersShowcase;