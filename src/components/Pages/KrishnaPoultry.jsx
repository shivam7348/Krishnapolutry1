import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const KrishnaPoultry = () => {
  // Create refs for animation targets
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphsRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Main timeline for animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Initial animation when component mounts
    tl.from(headingRef.current, { 
      y: -50, 
      opacity: 0, 
      duration: 0.8 
    })
    .from(subheadingRef.current, { 
      y: -30, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.4")
    .from(paragraphsRef.current.children, { 
      y: 30, 
      opacity: 0, 
      stagger: 0.3, 
      duration: 0.8 
    }, "-=0.4")
    .from(imageRef.current, { 
      x: 50, 
      opacity: 0, 
      duration: 1 
    }, "-=1")
    .from(buttonRef.current, { 
      y: 20, 
      opacity: 0, 
      duration: 0.5 
    }, "-=0.5");

    // Create scroll-based animations
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true
      },
      y: 30,
      duration: 1
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="p-8 min-h-screen flex flex-col justify-center rounded-lg shadow-lg"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Content Container - Flexbox for side-by-side layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content Column */}
          <div className="lg:w-1/2 space-y-8">
            {/* Header Section */}
            <div className="text-center lg:text-left">
              <h2 
                ref={subheadingRef} 
                className="text-xl md:text-2xl font-bold text-blue-600 tracking-wider"
              >
                ESTABLISHED IN 1997
              </h2>
              <h1 
                ref={headingRef} 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight"
              >
                KRISHNA POULTRY EQUIPMENT
              </h1>
            </div>
            
            {/* Description Section */}
            <div ref={paragraphsRef} className="space-y-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                At <strong className="text-blue-700">Krishna Poultry</strong>, we have been pioneers in the poultry industry since 1997. As one of India's most trusted manufacturers, suppliers, and exporters of poultry equipment, we are dedicated to delivering durable, high-quality, and innovative solutions for poultry farming. Our state-of-the-art manufacturing setup ensures that every product meets the highest standards of excellence.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                Innovation is at the heart of our operations. We continuously strive to develop advanced, technology-driven products that empower poultry farmers to achieve greater efficiency and productivity. Whether you are a small-scale farmer or a large commercial enterprise, Krishna Poultry is your reliable partner for all your poultry equipment needs.
              </p>
            </div>
            
            {/* Call-to-Action Section */}
            <div className="mt-8">
              <button 
                ref={buttonRef} 
                className="bg-blue-600 text-black px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md font-bold"
              >
                Explore Our Products
              </button>
            </div>
          </div>
          
          {/* Right Image Column */}
          <div ref={imageRef} className="lg:w-1/2 flex justify-center">
            <div className="w-full h-96 md:h-[500px] relative rounded-xl overflow-hidden shadow-xl border-4 border-blue-100">
              <img 
                src="/api/placeholder/600/500" 
                alt="Modern poultry equipment" 
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 opacity-30 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-500 opacity-30 rounded-full"></div>
              
              {/* Add overlay with logo/brand element */}
              <div className="absolute bottom-4 right-4  bg-opacity-80 p-3 rounded-lg shadow-md">
                <div className="text-blue-700 font-bold text-lg">KPE</div>
                <div className="text-gray-600 text-sm">Since 1997</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Added Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Innovation', 'Quality', 'Reliability'].map((feature, index) => (
            <div 
              key={feature}
              className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-3">{feature}</h3>
              <p className="text-gray-700">
                Our commitment to {feature.toLowerCase()} sets us apart in the poultry equipment industry.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KrishnaPoultry;