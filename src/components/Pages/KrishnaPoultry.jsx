import React from 'react';

// Product Component Template
const ProductSection = ({ title, description, images }) => {
  return (
    <div className="py-12 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
                <p className="text-gray-600 mt-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Feeder Component
export const Feeder = () => {
  const data = {
    title: "Poultry Feeders",
    description: "Our high-quality poultry feeders are designed to minimize waste and ensure easy access to feed for your birds. Made from durable materials, they come in various sizes to accommodate different flock sizes.",
    images: [
      {
        src: "https://example.com/feeder1.jpg",
        alt: "Automatic poultry feeder",
        title: "Automatic Feeder",
        description: "Automated feeding system for large flocks"
      },
      {
        src: "https://example.com/feeder2.jpg",
        alt: "Hanging poultry feeder",
        title: "Hanging Feeder",
        description: "Space-saving design for optimal feeding"
      },
      {
        src: "https://example.com/feeder3.jpg",
        alt: "Trough poultry feeder",
        title: "Trough Feeder",
        description: "Durable construction for long-term use"
      },
      {
        src: "https://example.com/feeder4.jpg",
        alt: "Chick feeder",
        title: "Chick Feeder",
        description: "Specially designed for young chicks"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Drinker Component
export const Drinker = () => {
  const data = {
    title: "Poultry Drinkers",
    description: "Our drinkers ensure clean and accessible water for your poultry at all times. Designed to prevent contamination and reduce water spillage, promoting healthier birds.",
    images: [
      {
        src: "https://example.com/drinker1.jpg",
        alt: "Automatic poultry drinker",
        title: "Automatic Drinker",
        description: "Continuous water supply system"
      },
      {
        src: "https://example.com/drinker2.jpg",
        alt: "Nipple drinker",
        title: "Nipple Drinker",
        description: "Hygienic water delivery system"
      },
      {
        src: "https://example.com/drinker3.jpg",
        alt: "Bell drinker",
        title: "Bell Drinker",
        description: "Ideal for medium-sized flocks"
      },
      {
        src: "https://example.com/drinker4.jpg",
        alt: "Chick drinker",
        title: "Chick Drinker",
        description: "Perfect for young chicks"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Brooder & Debeaker Component
export const BrooderDebeaker = () => {
  const data = {
    title: "Brooders & Debeakers",
    description: "Essential equipment for poultry health management. Our brooders provide optimal temperature for chicks, while our debeakers ensure humane beak trimming.",
    images: [
      {
        src: "https://example.com/brooder1.jpg",
        alt: "Infrared brooder",
        title: "Infrared Brooder",
        description: "Energy efficient heating for chicks"
      },
      {
        src: "https://example.com/brooder2.jpg",
        alt: "Gas brooder",
        title: "Gas Brooder",
        description: "Powerful heating for large areas"
      },
      {
        src: "https://example.com/debeaker1.jpg",
        alt: "Electric debeaker",
        title: "Electric Debeaker",
        description: "Precision beak trimming"
      },
      {
        src: "https://example.com/debeaker2.jpg",
        alt: "Manual debeaker",
        title: "Manual Debeaker",
        description: "Reliable and easy to use"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Bird Tray Component
export const BirdTray = () => {
  const data = {
    title: "Bird Trays",
    description: "Our bird trays are designed for efficient egg collection and bird handling. Made from durable materials for long-lasting performance.",
    images: [
      {
        src: "https://example.com/tray1.jpg",
        alt: "Egg collection tray",
        title: "Egg Collection Tray",
        description: "Gentle on eggs, easy to clean"
      },
      {
        src: "https://example.com/tray2.jpg",
        alt: "Transport tray",
        title: "Transport Tray",
        description: "Secure bird transport solution"
      },
      {
        src: "https://example.com/tray3.jpg",
        alt: "Sorting tray",
        title: "Sorting Tray",
        description: "Efficient bird sorting system"
      },
      {
        src: "https://example.com/tray4.jpg",
        alt: "Multi-purpose tray",
        title: "Multi-purpose Tray",
        description: "Versatile design for various uses"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Others Component
export const Others = () => {
  const data = {
    title: "Other Poultry Equipment",
    description: "Complete your poultry farm setup with our range of additional equipment designed to make poultry farming more efficient and productive.",
    images: [
      {
        src: "https://example.com/other1.jpg",
        alt: "Nest boxes",
        title: "Nest Boxes",
        description: "Comfortable laying environment"
      },
      {
        src: "https://example.com/other2.jpg",
        alt: "Ventilation system",
        title: "Ventilation Systems",
        description: "Optimal air circulation"
      },
      {
        src: "https://example.com/other3.jpg",
        alt: "Cages",
        title: "Poultry Cages",
        description: "Durable housing solutions"
      },
      {
        src: "https://example.com/other4.jpg",
        alt: "Cleaning equipment",
        title: "Cleaning Equipment",
        description: "Maintain hygiene standards"
      }
    ]
  };

  return <ProductSection {...data} />;
};

// Main Component with all products
const Products = () => {
  return (
    <div className="font-sans">
      <Feeder />
      <Drinker />
      <BrooderDebeaker />
      <BirdTray />
      <Others />
    </div>
  );
};

export default Products;