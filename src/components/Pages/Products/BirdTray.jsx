import React, { useState } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Package } from "lucide-react";
import Banner from "@/Banner/Banner";
import chickcrate from "../mainkrishnaproducts/chickcrate.png";
import EggTray from "../mainkrishnaproducts/EggTray.png";
import ChickTransporationbox from "../mainkrishnaproducts/ChickTransporationbox.png";

const BirdTrayShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const breadcrumb = [{ name: "Home", link: "/", active: true }];

  // Image data with descriptions
  const trayImages = [
    {
      src: chickcrate,
      alt: "Chick Crate",
      description: "Durable chick crates designed for safe transportation of young poultry with proper ventilation."
    },
    {
      src: EggTray,
      alt: "Egg Tray",
      description: "Specialized egg trays that protect eggs during storage and transportation, reducing breakage."
    },
    {
      src: ChickTransporationbox,
      alt: "Chick Transportation Box",
      description: "Secure and ventilated boxes designed specifically for chick transportation needs."
    },
   
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
        image="https://www.shutterstock.com/image-photo/group-little-birds-feeding-on-600nw-2514374507.jpg"
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
                      Advanced Bird Tray Solutions
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    Our Premium Bird Trays
                    <span className="block text-orange-600">
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
              {trayImages.map((image, index) => (
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

export default BirdTrayShowcase;