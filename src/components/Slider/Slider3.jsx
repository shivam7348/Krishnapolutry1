import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Feeder images
import cagebabyfeeder1by2kg from "../Pages/mainkrishnaproducts/cagebabyfeeder1by2kg.jpg";
import parentfeedermale from "../Pages/mainkrishnaproducts/parentfeedermale.jpg";
import parentfeederfemale from "../Pages/mainkrishnaproducts/parentfeederfemale.jpg";
import chickFeedingTray from "../Pages/2products/chickFeedingTray.jpg";

// Drinker images
import babychickendrinker25ltr from "../Pages/2products/babychickendrinker25ltr.jpg";
import nippledrinker from "../Pages/mainkrishnaproducts/nippledrinker.jpg";
import jumboautomaticdrinker from "../Pages/2products/jumboautomaticdrinker.jpg";
import cagebabydrinker1by2Ltr from "../Pages/mainkrishnaproducts/cagebabydrinker1by2Ltr.jpg";

// Other equipment images
import vaccinator from "../Pages/mainkrishnaproducts/vaccinator.jpg";
import foogersingle from "../Pages/2products/foogersingle.jpg";
import debeakermachinemanual from "../Pages/mainkrishnaproducts/debeakermachinemanual.jpg";
import debeakingmachineautimatic from "../Pages/mainkrishnaproducts/debeakingmachineautimatic.jpg";

// Background slider images
import slider1 from "../Slider/sloider1.png";
import slider2 from "../Slider/slider2.png";
import slider3 from "../Slider/slider4.png";

const ProductAutoSlider = () => {
  // Slide data with improved product information
  const slides = [
    {
      id: 1,
      title: "Krishna Poultry Equipments",
      subtitle: "Premium Poultry Solutions",
      products: [
        { 
          url: cagebabyfeeder1by2kg, 
          name: "Cage Baby Feeder (0.5kg)",
          description: "Sturdy plastic feeder for cage systems"
        },
        { 
          url: parentfeedermale, 
          name: "Parent Feeder (Male)",
          description: "Durable feeder for breeding males"
        },
        { 
          url: parentfeederfemale, 
          name: "Parent Feeder (Female)",
          description: "Specialized feeder for laying hens"
        },
        { 
          url: chickFeedingTray, 
          name: "Chick Feeding Tray",
          description: "Perfect starter for newborn chicks"
        }
      ],
      bgImage: slider1,
    },
    {
      id: 2,
      title: "Feeders & Drinkers",
      subtitle: "Premium Quality Poultry Feeding Solutions",
      products: [
        { 
          url: babychickendrinker25ltr, 
          name: "Basin Chick Drinker (2.5Ltr)",
          description: "Ideal starter for young poultry"
        },
        { 
          url: nippledrinker, 
          name: "Nipple Drinker",
          description: "Hygienic water delivery system"
        },
        { 
          url: cagebabydrinker1by2Ltr, 
          name: "Cage Baby Drinker (1/2L)",
          description: "Compact design for cage systems"
        },
        { 
          url: jumboautomaticdrinker, 
          name: "Jumbo Automatic Drinker",
          description: "Large capacity automatic system"
        }
      ],
      bgImage: slider2,
    },
    {
      id: 3,
      title: "Equipment & Tools",
      subtitle: "Specialized Poultry Management Tools",
      products: [
        { 
          url: vaccinator, 
          name: "Vaccinator",
          description: "Precision vaccination equipment"
        },
        { 
          url: foogersingle, 
          name: "Fogger Single",
          description: "Sanitation and disinfection tool"
        },
        { 
          url: debeakermachinemanual, 
          name: "Manual Debeaker",
          description: "Precision debeaking tool"
        },
        { 
          url: debeakingmachineautimatic, 
          name: "Automatic Debeaker",
          description: "Efficient automated solution"
        }
      ],
      bgImage: slider3,
    }
  ];

  // State and ref declarations
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesRef = useRef([]);
  const slideContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTl = useRef(null);
  const touchRef = useRef({ startX: 0, endX: 0 });

  // Initialize GSAP animations
  useEffect(() => {
    gsap.set(slidesRef.current, {
      opacity: 0,
      xPercent: 100,
      zIndex: 0
    });
    
    gsap.set(slidesRef.current[0], {
      opacity: 1,
      xPercent: 0,
      zIndex: 1
    });
    
    updateProgressBar();
    
    return () => {
      if (progressTl.current) progressTl.current.kill();
    };
  }, []);
  
  // Update progress bar animation
  const updateProgressBar = () => {
    if (progressTl.current) progressTl.current.kill();
    
    if (!isPaused) {
      progressTl.current = gsap.timeline({
        onComplete: () => !isPaused && nextSlide()
      });
      progressTl.current.fromTo(
        progressBarRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 5, ease: "none" }
      );
    }
  };
  
  useEffect(() => {
    updateProgressBar();
  }, [currentIndex, isPaused]);
  
  // Handle slide transitions
  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    const direction = index > currentIndex ? 1 : -1;
    const currentSlide = slidesRef.current[currentIndex];
    const nextSlide = slidesRef.current[index];
    
    // Animate out current slide
    gsap.to(currentSlide, {
      opacity: 0,
      xPercent: -20 * direction,
      scale: 0.95,
      duration: 0.7,
      ease: "power2.inOut",
      zIndex: 0
    });
    
    // Animate in next slide
    gsap.fromTo(
      nextSlide,
      { opacity: 0, xPercent: 100 * direction, scale: 1, zIndex: 1 },
      {
        opacity: 1,
        xPercent: 0,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          setIsAnimating(false);
          setCurrentIndex(index);
        }
      }
    );
    
    // Animate product items
    const productItems = nextSlide.querySelectorAll('.product-item');
    gsap.fromTo(
      productItems,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        delay: 0.3,
        ease: "back.out(1.4)" 
      }
    );
    
    // Animate text elements
    const title = nextSlide.querySelector('.slide-title');
    const subtitle = nextSlide.querySelector('.slide-subtitle');
    
    gsap.fromTo(
      title,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );
    
    if (subtitle) {
      gsap.fromTo(
        subtitle,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power3.out" }
      );
    }
  };
  
  const nextSlide = () => {
    goToSlide((currentIndex + 1) % slides.length);
  };
  
  const prevSlide = () => {
    goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };
  
  // Touch handlers
  const handleTouchStart = (e) => {
    touchRef.current.startX = e.touches[0].clientX;
    setIsPaused(true);
  };
  
  const handleTouchMove = (e) => {
    touchRef.current.endX = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const { startX, endX } = touchRef.current;
    const threshold = 50;
    
    if (startX - endX > threshold) {
      nextSlide();
    } else if (endX - startX > threshold) {
      prevSlide();
    }
    
    setTimeout(() => setIsPaused(false), 1000);
  };
  
  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  return (
    <div 
      className="w-full relative overflow-hidden rounded-xl shadow-2xl"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Product Showcase Slider"
    >
      {/* Main Slider Container */}
      <div 
        ref={slideContainerRef}
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.id}
              ref={(el) => (slidesRef.current[slideIndex] = el)}
              className="absolute inset-0 w-full h-full"
              aria-hidden={slideIndex !== currentIndex}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={slide.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover object-center"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/70"></div>
              </div>
              
              <div className="relative w-full h-full flex flex-col z-10">
                {/* Slide Header */}
                <div className="text-center pt-8 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-12 px-4">
                  <h2 className="slide-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 tracking-tight leading-tight">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="slide-subtitle text-xs sm:text-sm md:text-base text-white/90 max-w-2xl mx-auto font-medium tracking-wide">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
                
                {/* Products Grid - Responsive layout */}
                <div className="flex-1 flex items-center justify-center px-2 sm:px-4 pb-12 sm:pb-16">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-5xl px-2 sm:px-4">
                    {slide.products.map((product, index) => (
                      <div 
                        key={index} 
                        className="product-item flex flex-col items-center group"
                      >
                        {/* Product Card */}
                        <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-2 sm:p-3 md:p-4 w-full h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 overflow-hidden">
                          {/* Image Container */}
                          <div className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 flex-1 flex items-center justify-center mb-2 sm:mb-3">
                            <img
                              src={product.url}
                              alt={product.name}
                              className="h-auto max-h-[80px] sm:max-h-[100px] md:max-h-[130px] w-full object-contain transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          
                          {/* Product Info */}
                          <div className="text-center">
                            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-600 leading-tight sm:leading-normal">
                              {product.name}
                            </h3>
                            <p className="hidden sm:block text-xs text-gray-500 mt-1">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1 sm:p-2 md:p-3 rounded-full shadow-lg z-10 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/30"
            disabled={isAnimating}
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1 sm:p-2 md:p-3 rounded-full shadow-lg z-10 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/30"
            disabled={isAnimating}
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-white scale-150" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div
              ref={progressBarRef}
              className="h-full bg-white origin-left transform scale-x-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAutoSlider;