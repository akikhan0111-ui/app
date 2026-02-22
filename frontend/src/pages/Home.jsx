import React, { useState, useEffect, useCallback } from 'react';
import { Phone, MapPin, Instagram, ChevronDown, ChevronLeft, ChevronRight, Clock, Award, Flame, Utensils, Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [showCallAnimation, setShowCallAnimation] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 3500, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const heroSlides = [
    {
      image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/wky1rhav_Chicken%20Biryani%20Single.png',
      title: 'Chicken Dum Biryani',
      subtitle: 'Authentic Hyderabadi slow-cooked perfection'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/w5szl33p_Veg%20Biryani.png',
      title: 'Veg Biryani',
      subtitle: 'Fresh vegetables layered with aromatic basmati'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/ixuif05f_Chicken%2065.png',
      title: 'Chicken 65',
      subtitle: 'Crispy, spicy & irresistible'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/7czvv2qh_Chicken%20Tikka%20Masala.png',
      title: 'Tikka Butter Masala',
      subtitle: 'Rich, creamy & full of flavor'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/r9dnu13k_Chicken%20Chilli.png',
      title: 'Chicken Chilli',
      subtitle: 'Indo-Chinese flavors at their best'
    }
  ];

  const handleBulkOrderClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setShowCallAnimation(true);
    setTimeout(() => setShowCallAnimation(false), 4000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    veg: [
      { 
        name: 'Veg Biryani Single', 
        price: '₹100', 
        serves: 'Serves 1',
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/w5szl33p_Veg%20Biryani.png',
        tag: 'Bestseller'
      },
      { 
        name: 'Veg Biryani Regular', 
        price: '₹180', 
        serves: 'Serves 1-2',
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/w5szl33p_Veg%20Biryani.png',
        tag: 'Popular'
      },
      { 
        name: 'Veg Biryani Family', 
        price: '₹400', 
        serves: 'Serves 3-4',
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/w5szl33p_Veg%20Biryani.png',
        tag: 'Value Pack'
      },
      { 
        name: 'Paneer 65', 
        price: '₹220', 
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/ste7u8s9_Paneer%2065.png',
        tag: 'Spicy'
      },
      { 
        name: 'Paneer Chilli', 
        price: '₹220', 
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/a8jnanhj_Paneer%20Chilli.png',
        tag: 'Indo-Chinese'
      },
      { 
        name: 'Paneer Tikka Butter Masala', 
        price: '₹240', 
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/swonxzvo_Paneer%20Tikka%20Masala.png',
        tag: 'Rich & Creamy'
      }
    ],
    nonVeg: [
      { 
        name: 'Chicken Biryani Single', 
        price: '₹120', 
        serves: 'Serves 1',
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/wky1rhav_Chicken%20Biryani%20Single.png',
        tag: 'Bestseller'
      },
      { 
        name: 'Chicken Biryani Regular', 
        price: '₹200', 
        serves: 'Serves 1-2',
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/85s8ocqw_Chicken%20Biryani%20Regular.png',
        tag: 'Most Ordered'
      },
      { 
        name: 'Chicken Biryani Family', 
        price: '₹450', 
        serves: 'Serves 3-4',
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/t0peu4w7_Chicken%20Biryani%20Family.png',
        tag: 'Value Pack'
      },
      { 
        name: 'Chicken 65', 
        price: '₹220', 
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/ixuif05f_Chicken%2065.png',
        tag: 'Crispy & Hot'
      },
      { 
        name: 'Chicken Chilli', 
        price: '₹220', 
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/r9dnu13k_Chicken%20Chilli.png',
        tag: 'Indo-Chinese'
      },
      { 
        name: 'Chicken Tikka Butter Masala', 
        price: '₹250', 
        image: 'https://customer-assets.emergentagent.com/job_taste-hyderabad/artifacts/7czvv2qh_Chicken%20Tikka%20Masala.png',
        tag: 'Chef Special'
      }
    ]
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a2c2e]">
      {/* Header */}
      <header data-testid="site-header" className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a2c2e]/98 backdrop-blur-xl py-2 shadow-[0_4px_30px_rgba(212,175,55,0.15)]' 
          : 'bg-[#0a2c2e]/90 backdrop-blur-md py-3'
      }`}>
        {/* Gold accent line at very top */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_68a4ecf8-ba90-4263-90c1-1d1f08db2c1e/artifacts/6i6kvsxs_biryanileaf.png" 
                alt="Biryani Leaf" 
                data-testid="header-logo"
                className={`transition-all duration-500 ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20 lg:h-24'}`}
              />
              <div className="hidden md:block border-l border-[#d4af37]/40 pl-3">
                <p className="text-[#d4af37] font-serif text-base leading-tight">Taste of Hyderabad</p>
                <p className="text-[#e8dcc0]/80 text-xs flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-[#d4af37]" />
                  Open 11 AM - 11 PM
                </p>
              </div>
            </div>
            
            <nav data-testid="header-nav" className="hidden md:flex items-center gap-1">
              {[
                { label: 'About', icon: <Star className="w-3.5 h-3.5" />, target: 'about' },
                { label: 'Menu', icon: <Utensils className="w-3.5 h-3.5" />, target: 'menu' },
                { label: 'Order', icon: <Phone className="w-3.5 h-3.5" />, target: 'order' },
                { label: 'Contact', icon: <MapPin className="w-3.5 h-3.5" />, target: 'contact' }
              ].map((item) => (
                <button 
                  key={item.target}
                  onClick={() => scrollToSection(item.target)} 
                  className="relative px-4 py-2 text-[#e8dcc0] hover:text-[#d4af37] transition-all duration-300 group flex items-center gap-1.5 text-sm font-medium"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.icon}</span>
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#d4af37] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <a 
                href="tel:8804081857" 
                className="hidden lg:flex items-center gap-1.5 text-[#e8dcc0] hover:text-[#d4af37] transition-colors text-sm border border-[#d4af37]/20 rounded-full px-3 py-1.5 hover:border-[#d4af37]/50"
                data-testid="header-phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                8804081857
              </a>
              <Button 
                onClick={() => scrollToSection('order')}
                data-testid="header-order-btn"
                className="bg-[#d4af37] text-[#0a2c2e] hover:bg-[#f4e5b0] font-bold px-5 py-2.5 text-sm shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 transition-all duration-300"
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom border glow */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-[#0a2c2e] via-[#0f3b3f] to-[#0a2c2e]">
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <Badge className="bg-[#d4af37]/20 text-[#d4af37] border-2 border-[#d4af37] px-6 py-2 text-base font-bold mb-4 shadow-lg animate-pulse">
                🚀 Now Delivering in Kharar & Mohali
              </Badge>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#d4af37] leading-tight drop-shadow-2xl">
              Taste of Hyderabad – Now Open in Kharar, Mohali
            </h1>
            
            <p className="text-2xl md:text-3xl text-[#e8dcc0] font-light leading-relaxed">
              Authentic Dum Biryani.<br/>
              <span className="text-[#f4e5b0] font-normal">Delivered Hot. Delivered Fresh.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Button 
                className="bg-[#ff6b35] hover:bg-[#ff8555] text-white font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-[#ff6b35]/50 transform hover:scale-105 transition-all"
                onClick={() => window.open('https://www.swiggy.com', '_blank')}
              >
                🛵 Order on Swiggy
              </Button>
              <Button 
                className="bg-[#e23744] hover:bg-[#f44755] text-white font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-[#e23744]/50 transform hover:scale-105 transition-all"
                onClick={() => window.open('https://www.zomato.com', '_blank')}
              >
                🍽️ Order on Zomato
              </Button>
            </div>
            
            <Button 
              variant="outline"
              className="w-full sm:w-auto border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a2c2e] px-10 py-7 text-lg font-bold transform hover:scale-105 transition-all shadow-lg"
              onClick={() => scrollToSection('order')}
            >
              💰 Order Direct & Save More
            </Button>
            
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto border-2 border-[#d4af37]/40 hover:border-[#d4af37] hover:scale-110 transition-all">
                  <Clock className="w-7 h-7 text-[#d4af37]" />
                </div>
                <p className="text-[#e8dcc0] text-sm font-medium">45 Min<br/>Delivery</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto border-2 border-[#d4af37]/40 hover:border-[#d4af37] hover:scale-110 transition-all">
                  <Flame className="w-7 h-7 text-[#d4af37]" />
                </div>
                <p className="text-[#e8dcc0] text-sm font-medium">Authentic<br/>Taste</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto border-2 border-[#d4af37]/40 hover:border-[#d4af37] hover:scale-110 transition-all">
                  <Award className="w-7 h-7 text-[#d4af37]" />
                </div>
                <p className="text-[#e8dcc0] text-sm font-medium">Premium<br/>Quality</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Slider */}
          <div className="relative group" data-testid="hero-carousel">
            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
              <div className="flex">
                {heroSlides.map((slide, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                    <div className="relative h-[350px] sm:h-[400px] md:h-[500px]">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2c2e]/90 via-[#0a2c2e]/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#d4af37] mb-1">{slide.title}</h3>
                        <p className="text-[#e8dcc0] text-sm sm:text-base md:text-lg">{slide.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={scrollPrev}
              data-testid="carousel-prev"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a2c2e]/70 hover:bg-[#d4af37] border border-[#d4af37]/50 hover:border-[#d4af37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-[#d4af37] hover:text-[#0a2c2e]" />
            </button>
            <button 
              onClick={scrollNext}
              data-testid="carousel-next"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a2c2e]/70 hover:bg-[#d4af37] border border-[#d4af37]/50 hover:border-[#d4af37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            >
              <ChevronRight className="w-5 h-5 text-[#d4af37] hover:text-[#0a2c2e]" />
            </button>
            
            {/* Decorative corner frames */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#d4af37]/40 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#d4af37]/40 rounded-br-3xl pointer-events-none" />
            
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#d4af37]/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
        
        <ChevronDown 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4af37] w-10 h-10 animate-bounce cursor-pointer hover:text-[#f4e5b0] hover:scale-110 transition-all"
          onClick={() => scrollToSection('about')}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0f3b3f] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-[#d4af37] mb-6">
              Why Biryani Leaf?
            </h2>
            <p className="text-xl md:text-2xl text-[#e8dcc0] max-w-3xl mx-auto leading-relaxed">
              We are a cloud kitchen focused only on perfecting Hyderabadi dum biryani.
              <br />No dine-in. No distractions.
              <br />Just authentic flavors, slow cooking, and premium ingredients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="bg-[#0a2c2e]/70 border-[#d4af37]/40 backdrop-blur-lg hover:border-[#d4af37] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto">
                  <Flame className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-serif text-[#d4af37]">Dum Cooked</h3>
                <p className="text-[#e8dcc0] leading-relaxed">Not rushed. Slow-cooked to perfection with authentic dum technique.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0a2c2e]/70 border-[#d4af37]/40 backdrop-blur-lg hover:border-[#d4af37] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-serif text-[#d4af37]">Premium Basmati</h3>
                <p className="text-[#e8dcc0] leading-relaxed">Only the finest long-grain basmati rice for that authentic taste.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0a2c2e]/70 border-[#d4af37]/40 backdrop-blur-lg hover:border-[#d4af37] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-3xl">🌶️</div>
                </div>
                <h3 className="text-2xl font-serif text-[#d4af37]">Hyderabadi Spices</h3>
                <p className="text-[#e8dcc0] leading-relaxed">Authentic spice blend sourced directly from Hyderabad.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0a2c2e]/70 border-[#d4af37]/40 backdrop-blur-lg hover:border-[#d4af37] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-serif text-[#d4af37]">Delivery-First</h3>
                <p className="text-[#e8dcc0] leading-relaxed">Cloud kitchen model ensures hot, fresh biryani at your doorstep.</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Logo placement - bottom right corner */}
          <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none hidden lg:block">
            <img 
              src="https://customer-assets.emergentagent.com/job_68a4ecf8-ba90-4263-90c1-1d1f08db2c1e/artifacts/6i6kvsxs_biryanileaf.png" 
              alt="Biryani Leaf" 
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#0a2c2e] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-[#d4af37] mb-6">
              Our Menu
            </h2>
            <div className="inline-block bg-[#0f3b3f] border border-[#d4af37]/30 rounded-full px-8 py-4">
              <p className="text-[#e8dcc0] text-lg">
                <span className="font-bold text-[#d4af37]">Portion Guide:</span> Single – 1 person | Regular – 1-2 people | Family – 3-4 people
              </p>
            </div>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              onClick={() => setActiveCategory('all')}
              className={`${
                activeCategory === 'all' 
                  ? 'bg-[#d4af37] text-[#0a2c2e] shadow-lg shadow-[#d4af37]/50' 
                  : 'bg-[#0f3b3f] text-[#d4af37] border border-[#d4af37]/30'
              } hover:bg-[#d4af37] hover:text-[#0a2c2e] px-10 py-6 text-lg font-bold transform hover:scale-105 transition-all`}
            >
              All Items
            </Button>
            <Button
              onClick={() => setActiveCategory('veg')}
              className={`${
                activeCategory === 'veg' 
                  ? 'bg-[#d4af37] text-[#0a2c2e] shadow-lg shadow-[#d4af37]/50' 
                  : 'bg-[#0f3b3f] text-[#d4af37] border border-[#d4af37]/30'
              } hover:bg-[#d4af37] hover:text-[#0a2c2e] px-10 py-6 text-lg font-bold transform hover:scale-105 transition-all`}
            >
              🌿 Veg
            </Button>
            <Button
              onClick={() => setActiveCategory('nonVeg')}
              className={`${
                activeCategory === 'nonVeg' 
                  ? 'bg-[#d4af37] text-[#0a2c2e] shadow-lg shadow-[#d4af37]/50' 
                  : 'bg-[#0f3b3f] text-[#d4af37] border border-[#d4af37]/30'
              } hover:bg-[#d4af37] hover:text-[#0a2c2e] px-10 py-6 text-lg font-bold transform hover:scale-105 transition-all`}
            >
              🍗 Non-Veg
            </Button>
          </div>
          
          {/* Menu Items */}
          <div className="space-y-16">
            {(activeCategory === 'all' || activeCategory === 'nonVeg') && (
              <div>
                <h3 className="text-3xl font-serif text-[#d4af37] mb-8 text-center">🍗 Non-Veg Specials</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems.nonVeg.map((item, index) => (
                    <Card key={index} className="bg-gradient-to-br from-[#0f3b3f] to-[#0a2c2e] border-2 border-[#d4af37]/40 overflow-hidden group hover:border-[#d4af37] transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#d4af37]/40 cursor-pointer relative">
                      <div className={`relative h-64 overflow-hidden ${(item.name === 'Chicken Chilli' || item.name === 'Chicken 65') ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]' : ''}`}>
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3b3f] via-transparent to-transparent opacity-70" />
                        
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                        </div>
                        
                        {item.tag && (
                          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#d4af37] to-[#f4e5b0] text-[#0a2c2e] font-bold px-4 py-2 shadow-lg text-sm transform group-hover:scale-110 transition-transform">
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6 space-y-3 relative">
                        <h4 className="text-2xl font-serif text-[#d4af37] group-hover:text-[#f4e5b0] transition-colors">{item.name}</h4>
                        {item.serves && (
                          <p className="text-sm text-[#e8dcc0] bg-[#0a2c2e]/70 inline-block px-4 py-2 rounded-full border border-[#d4af37]/30">
                            {item.serves}
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-3xl font-bold text-[#f4e5b0] group-hover:scale-110 transition-transform">{item.price}</p>
                          <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center group-hover:bg-[#d4af37] transition-colors">
                            <span className="text-[#d4af37] group-hover:text-[#0a2c2e] font-bold">+</span>
                          </div>
                        </div>
                      </CardContent>
                      
                      {/* Corner decoration */}
                      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/60 transition-colors" />
                      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/60 transition-colors" />
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {(activeCategory === 'all' || activeCategory === 'veg') && (
              <div>
                <h3 className="text-3xl font-serif text-[#d4af37] mb-8 text-center">🌿 Veg Delights</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems.veg.map((item, index) => (
                    <Card key={index} className="bg-gradient-to-br from-[#0f3b3f] to-[#0a2c2e] border-2 border-[#d4af37]/40 overflow-hidden group hover:border-[#d4af37] transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#d4af37]/40 cursor-pointer relative">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3b3f] via-transparent to-transparent opacity-70" />
                        
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                        </div>
                        
                        {item.tag && (
                          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#d4af37] to-[#f4e5b0] text-[#0a2c2e] font-bold px-4 py-2 shadow-lg text-sm transform group-hover:scale-110 transition-transform">
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6 space-y-3 relative">
                        <h4 className="text-2xl font-serif text-[#d4af37] group-hover:text-[#f4e5b0] transition-colors">{item.name}</h4>
                        {item.serves && (
                          <p className="text-sm text-[#e8dcc0] bg-[#0a2c2e]/70 inline-block px-4 py-2 rounded-full border border-[#d4af37]/30">
                            {item.serves}
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-3xl font-bold text-[#f4e5b0] group-hover:scale-110 transition-transform">{item.price}</p>
                          <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center group-hover:bg-[#d4af37] transition-colors">
                            <span className="text-[#d4af37] group-hover:text-[#0a2c2e] font-bold">+</span>
                          </div>
                        </div>
                      </CardContent>
                      
                      {/* Corner decoration */}
                      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/60 transition-colors" />
                      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/60 transition-colors" />
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Order Direct Section */}
      <section id="order" className="py-20 bg-[#0f3b3f]">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] text-center mb-12">
            Order Direct & Pay Instantly
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Card */}
            <Card className="bg-[#0a2c2e] border-[#d4af37]/30" data-testid="contact-card">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-[#d4af37] text-center">Call or WhatsApp</h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:8804081857"
                    data-testid="phone-1"
                    className={`flex items-center justify-center gap-3 bg-[#0f3b3f] hover:bg-[#d4af37]/20 p-4 rounded-lg transition-all group relative overflow-hidden ${showCallAnimation ? 'ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#0a2c2e]' : ''}`}
                  >
                    <div className="relative">
                      <Phone className={`w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform ${showCallAnimation ? 'animate-wiggle' : ''}`} />
                      {showCallAnimation && (
                        <>
                          <span className="absolute inset-0 rounded-full border-2 border-[#d4af37] animate-ping" />
                          <span className="absolute -inset-1 rounded-full border border-[#d4af37]/50 animate-pulse" />
                        </>
                      )}
                    </div>
                    <span className="text-[#e8dcc0] text-lg font-medium">8804081857</span>
                  </a>
                  
                  <a 
                    href="tel:8287767107"
                    data-testid="phone-2"
                    className={`flex items-center justify-center gap-3 bg-[#0f3b3f] hover:bg-[#d4af37]/20 p-4 rounded-lg transition-all group relative overflow-hidden ${showCallAnimation ? 'ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#0a2c2e]' : ''}`}
                  >
                    <div className="relative">
                      <Phone className={`w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform ${showCallAnimation ? 'animate-wiggle' : ''}`} />
                      {showCallAnimation && (
                        <>
                          <span className="absolute inset-0 rounded-full border-2 border-[#d4af37] animate-ping" />
                          <span className="absolute -inset-1 rounded-full border border-[#d4af37]/50 animate-pulse" />
                        </>
                      )}
                    </div>
                    <span className="text-[#e8dcc0] text-lg font-medium">8287767107</span>
                  </a>
                </div>
                
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-6 text-lg"
                  onClick={() => window.open('https://wa.me/918804081857', '_blank')}
                  data-testid="whatsapp-btn"
                >
                  Order via WhatsApp
                </Button>
              </CardContent>
            </Card>
            
            {/* Payment Card */}
            <Card className="bg-[#0a2c2e] border-[#d4af37]/30">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-[#d4af37] text-center">Pay via UPI</h3>
                
                <div className="bg-white p-6 rounded-lg">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-square flex items-center justify-center rounded-lg">
                    <p className="text-gray-600 text-sm text-center">QR Code<br/>Placeholder</p>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <p className="text-[#e8dcc0]">UPI ID</p>
                  <p className="text-[#d4af37] font-semibold text-lg">biryani.leaf@paytm</p>
                </div>
                
                <Button 
                  className="w-full bg-[#d4af37] hover:bg-[#f4e5b0] text-[#0a2c2e] font-semibold py-6"
                  onClick={() => window.open('upi://pay?pa=biryani.leaf@paytm&pn=BiryaniLeaf&cu=INR', '_blank')}
                >
                  Pay Now
                </Button>
                
                <p className="text-sm text-[#e8dcc0] text-center">
                  After payment, send screenshot on WhatsApp for confirmation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Party Orders Section */}
      <section className="py-20 bg-[#0a2c2e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] mb-6">
            Party & Bulk Orders
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl text-[#e8dcc0]">
              Planning a house party?<br />
              Office event?<br />
              Late night gathering?
            </p>
            
            <p className="text-lg text-[#e8dcc0]">
              We accept bulk and party orders.<br />
              Custom quantity available.<br />
              Advance booking recommended.
            </p>
            
            <Button 
              className="bg-[#d4af37] hover:bg-[#f4e5b0] text-[#0a2c2e] font-semibold px-12 py-6 text-lg mt-8"
              onClick={handleBulkOrderClick}
              data-testid="bulk-order-btn"
            >
              Call Now for Bulk Orders
            </Button>
          </div>
        </div>
      </section>

      {/* Delivery Coverage Section */}
      <section id="contact" className="py-20 bg-[#0f3b3f]">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] text-center mb-12">
            Delivery Coverage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-[#0a2c2e] border-[#d4af37]/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">We Serve</h3>
                  <ul className="space-y-3 text-[#e8dcc0] text-lg">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full" />
                      Kharar
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full" />
                      Sector 126
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full" />
                      Model Town
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full" />
                      Mohali nearby areas
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-[#0a2c2e] border-[#d4af37]/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    Our Location
                  </h3>
                  <p className="text-[#e8dcc0] text-lg leading-relaxed">
                    A74, Nijjar Road Model,<br />
                    Sector 126, Model Town,<br />
                    Kharar
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="h-[400px] md:h-full rounded-lg overflow-hidden border-2 border-[#d4af37]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3!2d76.6472!3d30.7459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzQ1LjIiTiA3NsKwMzgnNTAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Biryani Leaf Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a2c2e] border-t border-[#d4af37]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <img 
                src="https://customer-assets.emergentagent.com/job_68a4ecf8-ba90-4263-90c1-1d1f08db2c1e/artifacts/6i6kvsxs_biryanileaf.png" 
                alt="Biryani Leaf" 
                className="h-24 md:h-28 lg:h-32 mx-auto md:mx-0 mb-4"
              />
              <p className="text-[#e8dcc0] text-lg">Taste of Hyderabad</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-[#d4af37] font-semibold mb-4 text-lg">Follow Us</h4>
              <a 
                href="https://www.instagram.com/biryani.leaf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#e8dcc0] hover:text-[#d4af37] transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span>@biryani.leaf</span>
              </a>
              <p className="text-sm text-[#e8dcc0] mt-4">Follow us for offers</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-[#e8dcc0] mb-2 text-lg">Cloud Kitchen | Delivery Only</p>
              <p className="text-sm text-[#e8dcc0]">Open Daily: 11 AM - 11 PM</p>
            </div>
          </div>
          
          <div className="border-t border-[#d4af37]/20 pt-8 text-center">
            <p className="text-[#e8dcc0]">© 2025 Biryani Leaf. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Order Button (Mobile) */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
        <Button 
          onClick={() => scrollToSection('order')}
          className="w-full bg-[#d4af37] hover:bg-[#f4e5b0] text-[#0a2c2e] font-bold py-4 text-lg shadow-lg"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default Home;