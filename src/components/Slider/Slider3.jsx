import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
// Product images
import SprinklerSmall from "../Pages/fwdkrishnatradersproductsmain/SprinklerSmall.jpg";
import chickcrate from "../Pages/fwdkrishnatradersproducts/chickcrate.jpg";
// Background images
import slider1 from "../Slider/sloider1.png";
import slider2 from "../Slider/slider2.png";
import slider3 from "../Slider/slider4.png";

const ProductAutoSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Krishna Poultry Equipments",
      subtitle: "Premium Poultry Equipment Manufacturer & Supplier",
      products: [
        { 
          url: "https://5.imimg.com/data5/SELLER/Default/2025/2/487080775/HY/BU/RP/121581144/poultry-grower-feeder-500x500.jpeg", 
          name: "GROWER DRINKER (8 LTR)",
          description: "High-capacity drinking solution for growing poultry"
        },
        { 
          url: "https://s.alicdn.com/@sc04/kf/H47a0178cf0e9456db6c377e04836b7cep.jpg_720x720q50.jpg", 
          name: "CHICK DRINKER (3 LTR)",
          description: "Perfect for young chicks with easy access"
        },
        { 
          url: "https://5.imimg.com/data5/SELLER/Default/2020/11/XG/II/NK/29753767/poultry-turbo-feeder-500x500.jpg", 
          name: "TURBO FEEDER",
          description: "Efficient feed distribution system"
        },
        { 
          url: "https://5.imimg.com/data5/ANDROID/Default/2025/2/488443208/OF/VR/FO/42736512/product-jpeg-500x500.jpg", 
          name: "ROUND FEEDER (10KG)",
          description: "Large capacity circular feeding solution"
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
          url: "https://m.media-amazon.com/images/I/51q9bCwYuGL.jpg", 
          name: "CHICK FEEDER (3KG)",
          description: "Ideal starter feeder for young poultry"
        },
        { 
          url: "https://img.agriexpo.online/images_ag/photo-mg/184647-12761593.jpg", 
          name: "NIPPLE DRINKER",
          description: "Hygienic water delivery system"
        },
        { 
          url: "https://5.imimg.com/data5/SELLER/Default/2022/4/RF/FN/PD/105972358/plastic-deluxe-auto-poultry-drinker.png", 
          name: "AUTOMATIC DRINKER",
          description: "Self-regulating water supply"
        },
        { 
          url: "https://www.totalplast.in/images/chick-box.jpg", 
          name: "CHICK CRATE",
          description: "Safe transport and handling"
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
          url: "https://5.imimg.com/data5/SELLER/Default/2023/7/322490575/II/VK/XF/26543303/poultry-vaccination-gun-500x500.jpg", 
          name: "VACCINATOR",
          description: "Precision vaccination equipment"
        },
        { 
          url: "https://5.imimg.com/data5/ANDROID/Default/2023/6/318247247/XY/HN/EY/42736512/product-jpeg.jpg", 
          name: "FLAME GUN",
          description: "Sanitation and disinfection tool"
        },
        { 
          url: "https://5.imimg.com/data5/SELLER/Default/2021/2/CW/SF/LS/41984445/plastic-vegetable-crate-25-kg-500x500.jpg", 
          name: "TRANSPORT CRATE",
          description: "Durable poultry transport solution"
        },
        { 
          url: "https://m.media-amazon.com/images/I/51+UjV4dRvL._AC_UF1000,1000_QL80_.jpg", 
          name: "SPRINKLER",
          description: "Cooling and misting system"
        }
      ],
      bgImage: slider3,
    }
  ];

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
        <div className="relative w-full h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
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
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
              </div>
              
              <div className="relative w-full h-full flex flex-col z-10">
                {/* Slide Header */}
                <div className="text-center pt-12 pb-8 md:pt-16 md:pb-12 px-4">
                  <h2 className="slide-title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 tracking-tight leading-tight">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="slide-subtitle text-sm md:text-base text-white/90 max-w-2xl mx-auto font-medium tracking-wide">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
                
                {/* Enhanced Products Grid */}
                <div className="flex-1 flex items-center justify-center px-4 pb-16">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl px-4">
                    {slide.products.map((product, index) => (
                      <div 
                        key={index} 
                        className="product-item flex flex-col items-center group"
                      >
                        {/* Enhanced Product Card with White Background */}
                        <div className="bg-white rounded-xl shadow-lg p-4 w-full h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 overflow-hidden">
                          {/* Image Container with White Background */}
                          <div className="bg-white rounded-lg p-3 flex-1 flex items-center justify-center mb-3">
                            <img
                              src={product.url}
                              alt={product.name}
                              className="max-h-[120px] md:max-h-[150px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          
                          {/* Product Info */}
                          <div className="text-center">
                            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1">
                              {product.name}
                            </h3>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg z-10 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/30"
            disabled={isAnimating}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg z-10 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/30"
            disabled={isAnimating}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
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