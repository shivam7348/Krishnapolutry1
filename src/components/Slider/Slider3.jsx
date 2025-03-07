import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Product images
import BasinChickDrinker from "../Pages/fwdkrishnatradersproductsmain/BasinChickDrinker2.5.jpg";
import flamegun from "../Pages/fwdkrishnatradersproductsmain/flamegun4way.jpg";
import jumboautomaticdrinkerclassic from "../Pages/fwdkrishnatradersproductsmain/jumboautomaticdrinkerclassic.jpg";
import SprinklerSmall from "../Pages/fwdkrishnatradersproductsmain/SprinklerSmall.jpg";
import chickfeeder3kg from "../Pages/fwdkrishnatradersproducts/chickfeeder3kg.jpg";
import chickcrate from "../Pages/fwdkrishnatradersproducts/chickcrate.jpg";
import nippledrinker from "../Pages/fwdkrishnatradersproducts/nippledrinker.jpg";
import vaccinator from "../Pages/fwdkrishnatradersproducts/vaccinator.jpg";

// Background images
import slider1 from "../Slider/sloider1.png";
import slider2 from "../Slider/slider2.png";
import slider3 from "../Slider/slider4.png";

const ProductAutoSlider = () => {
  // Product data with images, titles, and descriptions
  const slides = [
    {
      id: 1,
      title: "POULTRY EQUIPMENT",
      subtitle: "REPUTABLE MANUFACTURERS, EXPORTERS, DEALERS & SUPPLIERS OF POULTRY EQUIPMENT",
      products: [
        { url: BasinChickDrinker, name: "GROWER DRINKER (8 LTR)" },
        { url: flamegun, name: "CHICK DRINKER (3 LTR)" },
        { url: jumboautomaticdrinkerclassic, name: "TURBO FEEDER" },
        { url: SprinklerSmall, name: "ROUND FEEDER (10KG)" }
      ],
      bgImage: slider1
    },
    {
      id: 2,
      title: "FEEDERS & DRINKERS",
      subtitle: "QUALITY POULTRY FEEDING & DRINKING SOLUTIONS",
      products: [
        { url: chickfeeder3kg, name: "CHICK FEEDER (3KG)" },
        { url: nippledrinker, name: "NIPPLE DRINKER" },
        { url: jumboautomaticdrinkerclassic, name: "AUTOMATIC DRINKER" },
        { url: chickcrate, name: "CHICK CRATE" }
      ],
      bgImage: slider2
    },
    {
      id: 3,
      title: "EQUIPMENT & TOOLS",
      subtitle: "SPECIALIZED TOOLS FOR POULTRY MANAGEMENT",
      products: [
        { url: vaccinator, name: "VACCINATOR" },
        { url: flamegun, name: "FLAME GUN" },
        { url: chickcrate, name: "TRANSPORT CRATE" },
        { url: SprinklerSmall, name: "SPRINKLER" }
      ],
      bgImage: slider3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesRef = useRef([]);
  const slideContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTl = useRef(null);
  
  // Touch navigation
  const touchRef = useRef({ startX: 0, endX: 0 });
  
  // Initialize GSAP animations
  useEffect(() => {
    // Set initial state
    gsap.set(slidesRef.current, {
      opacity: 0,
      xPercent: 100
    });
    gsap.set(slidesRef.current[0], {
      opacity: 1,
      xPercent: 0
    });
    
    // Initialize progress bar animation
    updateProgressBar();
    
    return () => {
      if (progressTl.current) progressTl.current.kill();
    };
  }, []);
  
  // Function to update progress bar
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
  
  // Effect for auto-sliding
  useEffect(() => {
    updateProgressBar();
  }, [currentIndex, isPaused]);
  
  // Handle slide change
  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    const direction = index > currentIndex ? 1 : -1;
    const currentSlide = slidesRef.current[currentIndex];
    const nextSlide = slidesRef.current[index];
    
    // Animate out current slide
    gsap.to(currentSlide, {
      opacity: 0,
      xPercent: -100 * direction,
      duration: 0.8,
      ease: "power2.inOut"
    });
    
    // Animate in next slide
    gsap.fromTo(
      nextSlide,
      { opacity: 0, xPercent: 100 * direction },
      {
        opacity: 1,
        xPercent: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setIsAnimating(false);
          setCurrentIndex(index);
        }
      }
    );
    
    // Animate product items for the next slide
    const productItems = nextSlide.querySelectorAll('.product-item');
    gsap.fromTo(
      productItems,
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        delay: 0.3,
        ease: "back.out(1.2)" 
      }
    );
    
    // Animate the title and subtitle
    const title = nextSlide.querySelector('.slide-title');
    const subtitle = nextSlide.querySelector('.slide-subtitle');
    
    gsap.fromTo(
      title,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "back.out(1.5)" }
    );
    
    gsap.fromTo(
      subtitle,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.2)" }
    );
  };
  
  const nextSlide = () => {
    goToSlide((currentIndex + 1) % slides.length);
  };
  
  const prevSlide = () => {
    goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };
  
  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    touchRef.current.startX = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e) => {
    touchRef.current.endX = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const { startX, endX } = touchRef.current;
    const threshold = 75; // Minimum distance for a swipe
    
    if (startX - endX > threshold) {
      // Swipe left - go to next slide
      nextSlide();
    } else if (endX - startX > threshold) {
      // Swipe right - go to previous slide
      prevSlide();
    }
  };
  
  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  return (
    <div 
      className="w-full relative"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Product Showcase Slider"
    >
      {/* Main Slider */}
      <div 
        ref={slideContainerRef}
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-auto min-h-[550px] sm:min-h-[600px] md:min-h-[650px] ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.id}
              ref={(el) => (slidesRef.current[slideIndex] = el)}
              className="absolute inset-0 w-full h-full"
              aria-hidden={slideIndex !== currentIndex}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={slide.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
                {/* Semi-transparent overlay to ensure text readability */}
                <div className="absolute inset-0 bg-white/20"></div>
              </div>
              
              <div className="relative w-full h-full flex flex-col z-10">
                {/* Slide Header */}
                <div className="text-center py-6 sm:py-8 md:py-10 px-3 sm:px-4">
                  <h2 className="slide-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-2 sm:mb-3">
                    {slide.title}
                  </h2>
                  <p className="slide-subtitle text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto px-2">
                    {slide.subtitle}
                  </p>
                </div>
                
                {/* Products Container */}
                <div className="flex-1 flex items-center justify-center px-2 sm:px-4 md:px-6 pb-12">
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full max-w-6xl">
                    {slide.products.map((product, index) => (
                      <div key={index} className="product-item flex flex-col items-center">
                        <div className="bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 w-full h-32 sm:h-40 md:h-48 flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={product.url}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <h3 className="text-xs sm:text-sm font-medium text-center px-1">{product.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows - Responsive design */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg z-10 flex items-center justify-center transform transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-600"
            disabled={isAnimating}
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg z-10 flex items-center justify-center transform transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-600"
            disabled={isAnimating}
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots - Improved for mobile */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-red-600 scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 origin-left">
            <div
              ref={progressBarRef}
              className="h-full bg-red-600 origin-left transform scale-x-0"
            />
          </div>
        </div>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="block sm:hidden text-center text-xs text-gray-500 italic py-2">
        Swipe left/right to navigate
      </div>
    </div>
  );
};

export default ProductAutoSlider;