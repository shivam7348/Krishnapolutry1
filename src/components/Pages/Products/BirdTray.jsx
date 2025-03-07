import React, { useState } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Package } from "lucide-react";

import Banner from "@/Banner/Banner";

const BirdTrayShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const breadcrumb = [{ name: "Home", link: "/", active: true }];

  // Add image data at the top of your component
  const trayImages = [
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/bird-feeder/j/z/i/1-poultry-food-tray-for-pigeon-chicken-and-pets-garden-outdoor-original-imagzyms5kmzmr43.jpeg?q=90&crop=false", // Replace with your actual image paths
      alt: "Standard Bird Tray",
    },
    // {
    //   src: tray2,
    //   alt: "Automatic Bird Tray",
    // },
    // {
    //   src: tray3,
    //   alt: "Large Capacity Tray",
    // },
    // {
    //   src: tray4,
    //   alt: "Portable Bird Tray",
    // },
  ];

  const features = [
    {
      id: "features",
      icon: <Package className="w-6 h-6" />,
      title: "Features",
      content: [
        "Large capacity for multiple birds",
        "Anti-spill design",
        "Durable and easy to clean",
        "Lightweight and portable",
      ],
    },
    {
      id: "technical",
      icon: <Settings className="w-6 h-6" />,
      title: "Technical",
      content: [
        "Adjustable height settings",
        "360° accessibility for birds",
        "Weather-resistant materials",
        "Easy assembly and disassembly",
      ],
    },
    {
      id: "quality",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality",
      content: [
        "ISO 9001:2015 certified",
        "Rigorous quality testing",
        "Premium grade materials",
        "2-year warranty coverage",
      ],
    },
  ];

  const stats = [
    { value: "3000+", label: "Units Sold" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "10kg", label: "Capacity" },
    { value: "5yr", label: "Lifespan" },
  ];

  return (
    <>
      <Banner
        title="Bird Tray"
        image="https://example.com/bird-tray-banner.jpg" // Replace with your actual banner image
        breadcrumbItems={breadcrumb}
      />
      <div className="bg-gradient-to-r from-[#9c95a1] via-[#e6a5a5] to-[#d9d8d7] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Content Section - Left Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Award className="text-red-600 w-6 h-6" />
                  <span className="text-red-600 font-semibold">
                    Advanced Bird Tray Solutions
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Our Premium Bird Trays
                  <span className="block text-red-600">
                    Innovative Design & Performance
                  </span>
                </h1>
                <p className="text-gray-800 leading-relaxed">
                  Experience superior bird feeding efficiency with our state-of-the-art trays. 
                  Engineered for optimal feed conversion, durability, and ease of use, 
                  our trays represent the perfect blend of innovation and reliability.
                </p>
              </div>

              {/* Feature Tabs */}
              <div className="space-y-6">
                <div className="flex space-x-4 border-b border-red-200">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveTab(feature.id)}
                      className={`pb-4 flex items-center space-x-2 ${
                        activeTab === feature.id
                          ? "border-b-2 text-gray-800"
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
                              <ArrowRight className="w-4 h-4 text-red-400" />
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
                    <div className="text-3xl font-bold text-yellow-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-red-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid - Right Side */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sticky top-8">
                {trayImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg aspect-square"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirdTrayShowcase;