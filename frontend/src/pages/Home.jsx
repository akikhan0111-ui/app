import React, { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Instagram, ChevronDown, ChevronLeft, ChevronRight, Clock, Award, Flame, Utensils, Star, X, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel';
import PhirniImg from "../Images/Phirni.jpg";
import VegBiryaniImg from "../Images/Veg-Biryani.png";
import ChickenBiryaniRegularImg from "../Images/Chicken-Biryani-Regular.png";
import ChickenBiryaniFamilyImg from "../Images/Chicken-Biryani-Family.png";
import ChickenBiryaniSingleImg from "../Images/Chicken-Biryani-Single.png";
import ChickenTikkaMasalaImg from "../Images/Chicken-Tikka-Masala.png";
import Paneer65Img from "../Images/Paneer-65.png";
import PaneerTikkaMasalaImg from "../Images/Paneer-Tikka-Masala.png";
import PaneerChilliImg from "../Images/Paneer-Chilli.png";
import Chicken65Img from "../Images/Chicken-65.png";
import ChickenChilliImg from "../Images/Chicken-Chilli.png";
import BannerImg from "../Images/Banner-image.png";
import ZomatoLogo from "../Images/Zomato-logo.png";
import LogoImg from "../Images/Logo_BiryaniLeaf.png";
import SwiggyLogo from "../Images/swiggy-logo.png";
import UPIQRCodeImg from "../Images/UPI-QR-Code.jpg";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [showCallAnimation, setShowCallAnimation] = useState(false);
  const [carouselApi, setCarouselApi] = useState(null);
  const [showQRModal, setShowQRModal] = useState(false);

  const autoplayPlugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, playOnInit: true }));

  const heroSlides = [
    {
      image: BannerImg,
      title: 'Biryani Leaf',
      subtitle: 'Taste of Hyderabad – Now Open in Kharar, Mohali'
    },
    {
      image: ChickenBiryaniSingleImg,
      title: 'Chicken Dum Biryani',
      subtitle: 'Authentic Hyderabadi slow-cooked perfection'
    },
    {
      image: VegBiryaniImg,
      title: 'Veg Biryani',
      subtitle: 'Fresh vegetables layered with aromatic basmati'
    },
    {
      image: Chicken65Img,
      title: 'Chicken 65',
      subtitle: 'Crispy, spicy & irresistible'
    },
    {
      image: ChickenTikkaMasalaImg,
      title: 'Tikka Butter Masala',
      subtitle: 'Rich, creamy & full of flavor'
    },
    {
      image: ChickenChilliImg,
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
        price: '₹90',
        serves: 'Serves 1',
        image: VegBiryaniImg,
        tag: 'Bestseller'
      },
      {
        name: 'Veg Biryani Regular',
        price: '₹180',
        serves: 'Serves 1-2',
        image: VegBiryaniImg,
        tag: 'Popular'
      },
      {
        name: 'Veg Biryani Family',
        price: '₹400',
        serves: 'Serves 3-4',
        image: VegBiryaniImg,
        tag: 'Value Pack'
      },
      {
        name: 'Paneer 65',
        price: '₹190',
        image: Paneer65Img,
        tag: 'Spicy'
      },
      {
        name: 'Paneer Chilli',
        price: '₹220',
        image: PaneerChilliImg,
        tag: 'Indo-Chinese'
      },
      {
        name: 'Paneer Tikka Butter Masala',
        price: '₹240',
        image: PaneerTikkaMasalaImg,
        tag: 'Rich & Creamy'
      },
      { 
        name: 'Shahi Phirni', 
        price: '₹50', 
        image: PhirniImg,
        tag: 'Dessert',
        category: 'dessert'
      }
    ],
    nonVeg: [
      {
        name: 'Chicken Biryani Single',
        price: '₹110',
        serves: 'Serves 1',
        image: ChickenBiryaniSingleImg,
        tag: 'Bestseller'
      },
      {
        name: 'Chicken Biryani Regular',
        price: '₹220',
        serves: 'Serves 1-2',
        image: ChickenBiryaniRegularImg,
        tag: 'Most Ordered'
      },
      {
        name: 'Chicken Biryani Family',
        price: '₹450',
        serves: 'Serves 3-4',
        image: ChickenBiryaniFamilyImg,
        tag: 'Value Pack'
      },
      {
        name: 'Chicken 65',
        price: '₹220',
        image: Chicken65Img,
        tag: 'Crispy & Hot'
      },
      {
        name: 'Chicken Chilli',
        price: '₹220',
        image: ChickenChilliImg,
        tag: 'Indo-Chinese'
      },
      {
        name: 'Chicken Tikka Butter Masala',
        price: '₹260',
        image: ChickenTikkaMasalaImg,
        tag: 'Chef Special'
      }
    ]
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const MenuCard = ({ item }) => (
    <Card className="bg-gradient-to-br from-[#0f3b3f] to-[#0a2c2e] border-2 border-[#d4af37]/40 overflow-hidden group hover:border-[#d4af37] transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#d4af37]/40 cursor-pointer relative">
      <div className={`relative h-64 overflow-hidden ${(item.name === 'Chicken Chilli' || item.name === 'Chicken 65') ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]' : ''}`}>
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3b3f] via-transparent to-transparent opacity-70" />
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
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/60 transition-colors" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#d4af37]/20 group-hover:border-[#d4af37]/60 transition-colors" />
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#0a2c2e]">
      {/* Header */}
      <header data-testid="site-header" className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a2c2e]/98 backdrop-blur-xl py-2 shadow-[0_4px_30px_rgba(212,175,55,0.15)]' 
          : 'bg-[#0a2c2e]/90 backdrop-blur-md py-3'
      }`}>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={LogoImg}
                alt="Biryani Leaf" 
                data-testid="header-logo"
                className={`transition-all duration-500 ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20 lg:h-24'}`}
              />
              <div className="hidden md:block border-l border-[#d4af37]/40 pl-3">
                <p className="text-[#d4af37] font-serif text-base leading-tight">Taste of Hyderabad</p>
                <p className="text-[#e8dcc0]/80 text-xs flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-[#d4af37]" />
                  Open Daily: 11:30 AM - 2 AM
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
              <span 
                className="hidden lg:flex items-center gap-1.5 text-[#e8dcc0] text-sm border border-[#d4af37]/20 rounded-full px-3 py-1.5"
                data-testid="header-phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                8093186810
              </span>
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
        
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-[#0a2c2e] via-[#0f3b3f] to-[#0a2c2e]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <Badge className="bg-[#d4af37]/20 text-[#d4af37] border-2 border-[#d4af37] px-6 py-2 text-base font-bold mb-4 shadow-lg animate-pulse">
                Now Delivering in Kharar & Mohali
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
                className="bg-[#ff6b35] hover:bg-[#ff8555] text-white font-bold px-8 py-7 text-lg shadow-2xl hover:shadow-[#ff6b35]/50 transform hover:scale-105 transition-all flex items-center gap-3"
                data-testid="swiggy-btn"
                onClick={() => window.open('https://www.swiggy.com', '_blank')}
              >
                <img src={SwiggyLogo} alt="Swiggy" className="w-7 h-7 object-contain" />
                Order on Swiggy
              </Button>
              <Button 
                className="bg-[#e23744] hover:bg-[#f44755] text-white font-bold px-8 py-7 text-lg shadow-2xl hover:shadow-[#e23744]/50 transform hover:scale-105 transition-all flex items-center gap-3"
                data-testid="zomato-btn"
                onClick={() => window.open('https://www.zomato.com/chandigarh/biryani-leaf-kharar-road-mohali/order', '_blank')}
              >
                <img src={ZomatoLogo} alt="Zomato" className="w-7 h-7 object-contain" />
                Order on Zomato
              </Button>
            </div>
            
            <Button 
              variant="outline"
              className="w-full sm:w-auto border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a2c2e] px-10 py-7 text-lg font-bold transform hover:scale-105 transition-all shadow-lg"
              onClick={() => scrollToSection('order')}
            >
              Order Direct & Save More
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
          <div className="relative" data-testid="hero-carousel">
            <Carousel
              opts={{ loop: true }}
              plugins={[autoplayPlugin.current]}
              setApi={setCarouselApi}
              className="rounded-3xl overflow-hidden"
              onMouseEnter={() => autoplayPlugin.current.stop()}
              onMouseLeave={() => autoplayPlugin.current.play()}
            >
              <CarouselContent>
                {heroSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[350px] sm:h-[400px] md:h-[500px]">
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2c2e]/90 via-[#0a2c2e]/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#d4af37] mb-1">{slide.title}</h3>
                        <p className="text-[#e8dcc0] text-sm sm:text-base md:text-lg">{slide.subtitle}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <button onClick={() => carouselApi?.scrollPrev()} data-testid="carousel-prev" className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a2c2e]/70 hover:bg-[#d4af37] border border-[#d4af37]/50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 z-10">
                <ChevronLeft className="w-5 h-5 text-[#d4af37]" />
              </button>
              <button onClick={() => carouselApi?.scrollNext()} data-testid="carousel-next" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a2c2e]/70 hover:bg-[#d4af37] border border-[#d4af37]/50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 z-10">
                <ChevronRight className="w-5 h-5 text-[#d4af37]" />
              </button>
            </Carousel>
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#d4af37]/40 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#d4af37]/40 rounded-br-3xl pointer-events-none" />
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
            <h2 className="font-serif text-5xl md:text-6xl text-[#d4af37] mb-6">Why Biryani Leaf?</h2>
            <p className="text-xl md:text-2xl text-[#e8dcc0] max-w-3xl mx-auto leading-relaxed">
              We are a cloud kitchen focused only on perfecting Hyderabadi dum biryani.
              <br />No dine-in. No distractions.
              <br />Just authentic flavors, slow cooking, and premium ingredients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: <Flame className="w-8 h-8 text-[#d4af37]" />, title: 'Dum Cooked', desc: 'Not rushed. Slow-cooked to perfection with authentic dum technique.' },
              { icon: <Award className="w-8 h-8 text-[#d4af37]" />, title: 'Premium Basmati', desc: 'Only the finest long-grain basmati rice for that authentic taste.' },
              { icon: <span className="text-3xl">🌶️</span>, title: 'Hyderabadi Spices', desc: 'Authentic spice blend sourced directly from Hyderabad.' },
              { icon: <Clock className="w-8 h-8 text-[#d4af37]" />, title: 'Delivery-First', desc: 'Cloud kitchen model ensures hot, fresh biryani at your doorstep.' }
            ].map((card, i) => (
              <Card key={i} className="bg-[#0a2c2e]/70 border-[#d4af37]/40 backdrop-blur-lg hover:border-[#d4af37] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/20">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto">{card.icon}</div>
                  <h3 className="text-2xl font-serif text-[#d4af37]">{card.title}</h3>
                  <p className="text-[#e8dcc0] leading-relaxed">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#0a2c2e] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-[#d4af37] mb-6">Our Menu</h2>
            <div className="inline-block bg-[#0f3b3f] border border-[#d4af37]/30 rounded-full px-8 py-4">
              <p className="text-[#e8dcc0] text-lg">
                <span className="font-bold text-[#d4af37]">Portion Guide:</span> Single – 1 person | Regular – 1-2 people | Family – 3-4 people
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { key: 'all', label: 'All Items' },
              { key: 'veg', label: '🌿 Veg' },
              { key: 'nonVeg', label: '🍗 Non-Veg' }
            ].map(tab => (
              <Button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`${
                  activeCategory === tab.key 
                    ? 'bg-[#d4af37] text-[#0a2c2e] shadow-lg shadow-[#d4af37]/50' 
                    : 'bg-[#0f3b3f] text-[#d4af37] border border-[#d4af37]/30'
                } hover:bg-[#d4af37] hover:text-[#0a2c2e] px-10 py-6 text-lg font-bold transform hover:scale-105 transition-all`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
          
          <div className="space-y-16">
            {(activeCategory === 'all' || activeCategory === 'nonVeg') && (
              <div>
                <h3 className="text-3xl font-serif text-[#d4af37] mb-8 text-center">🍗 Non-Veg Specials</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems.nonVeg.map((item, index) => <MenuCard key={index} item={item} />)}
                </div>
              </div>
            )}
            
            {(activeCategory === 'all' || activeCategory === 'veg') && (
              <div>
                <h3 className="text-3xl font-serif text-[#d4af37] mb-8 text-center">🌿 Veg Delights</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems.veg.filter(i => !i.category).map((item, index) => <MenuCard key={index} item={item} />)}
                </div>
                
                <h3 className="text-3xl font-serif text-[#d4af37] mb-8 mt-16 text-center">🍮 Desserts</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems.veg.filter(i => i.category === 'dessert').map((item, index) => <MenuCard key={index} item={item} />)}
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
                  <div 
                    data-testid="phone-1"
                    className={`flex items-center justify-center gap-3 bg-[#0f3b3f] p-4 rounded-lg transition-all relative overflow-hidden ${showCallAnimation ? 'ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#0a2c2e]' : ''}`}
                  >
                    <div className="relative">
                      <Phone className={`w-5 h-5 text-[#d4af37] ${showCallAnimation ? 'animate-wiggle' : ''}`} />
                      {showCallAnimation && (
                        <>
                          <span className="absolute inset-0 rounded-full border-2 border-[#d4af37] animate-ping" />
                          <span className="absolute -inset-1 rounded-full border border-[#d4af37]/50 animate-pulse" />
                        </>
                      )}
                    </div>
                    <span className="text-[#e8dcc0] text-lg font-medium">8093186810</span>
                    <Badge className="bg-[#d4af37]/20 text-[#d4af37] text-xs border-[#d4af37]/30">Primary</Badge>
                  </div>
                  
                  <div 
                    data-testid="phone-2"
                    className={`flex items-center justify-center gap-3 bg-[#0f3b3f] p-4 rounded-lg transition-all relative overflow-hidden ${showCallAnimation ? 'ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#0a2c2e]' : ''}`}
                  >
                    <div className="relative">
                      <Phone className={`w-5 h-5 text-[#d4af37] ${showCallAnimation ? 'animate-wiggle' : ''}`} />
                      {showCallAnimation && (
                        <>
                          <span className="absolute inset-0 rounded-full border-2 border-[#d4af37] animate-ping" />
                          <span className="absolute -inset-1 rounded-full border border-[#d4af37]/50 animate-pulse" />
                        </>
                      )}
                    </div>
                    <span className="text-[#e8dcc0] text-lg font-medium">8287767107</span>
                  </div>

                  <div 
                    data-testid="phone-3"
                    className={`flex items-center justify-center gap-3 bg-[#0f3b3f] p-4 rounded-lg transition-all relative overflow-hidden ${showCallAnimation ? 'ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#0a2c2e]' : ''}`}
                  >
                    <div className="relative">
                      <Phone className={`w-5 h-5 text-[#d4af37] ${showCallAnimation ? 'animate-wiggle' : ''}`} />
                      {showCallAnimation && (
                        <>
                          <span className="absolute inset-0 rounded-full border-2 border-[#d4af37] animate-ping" />
                          <span className="absolute -inset-1 rounded-full border border-[#d4af37]/50 animate-pulse" />
                        </>
                      )}
                    </div>
                    <span className="text-[#e8dcc0] text-lg font-medium">9827709402</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-6 text-lg"
                  onClick={() => window.open('https://wa.me/918093186810', '_blank')}
                  data-testid="whatsapp-btn"
                >
                  Order via WhatsApp
                </Button>
              </CardContent>
            </Card>
            
            {/* Payment Card */}
            <Card className="bg-[#0a2c2e] border-[#d4af37]/30" data-testid="payment-card">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-[#d4af37] text-center">Pay via UPI</h3>
                
                <div className="bg-white p-4 rounded-lg">
                  <img 
                    src={UPIQRCodeImg} 
                    alt="UPI QR Code" 
                    className="w-full rounded-lg"
                    data-testid="qr-code-img"
                  />
                </div>
                
                <div className="text-center space-y-2">
                  <p className="text-[#e8dcc0]">UPI ID</p>
                  <p className="text-[#d4af37] font-semibold text-lg" data-testid="upi-id">najniparwin14-1@oksbi</p>
                </div>
                
                <Button 
                  className="w-full bg-[#d4af37] hover:bg-[#f4e5b0] text-[#0a2c2e] font-semibold py-6"
                  onClick={() => setShowQRModal(true)}
                  data-testid="pay-now-btn"
                >
                  Pay Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" data-testid="qr-modal" onClick={() => setShowQRModal(false)}>
          <div className="bg-[#0f3b3f] border-2 border-[#d4af37]/50 rounded-2xl max-w-md w-full p-6 relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowQRModal(false)} className="absolute top-4 right-4 text-[#e8dcc0] hover:text-[#d4af37] transition-colors" data-testid="qr-modal-close">
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="font-serif text-2xl text-[#d4af37] text-center mb-4">Scan QR Code to Pay</h3>
            
            <div className="bg-white p-4 rounded-xl mb-4">
              <img 
                src={UPIQRCodeImg} 
                alt="UPI QR Code" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-[#d4af37] font-semibold">UPI ID: najniparwin14-1@oksbi</p>
              <div className="bg-[#0a2c2e] rounded-lg p-4 space-y-2">
                <p className="text-[#e8dcc0] text-sm leading-relaxed">
                  After payment, send screenshot on WhatsApp for confirmation:
                </p>
                <p className="text-[#d4af37] font-bold">8093186810 / 8287767107</p>
              </div>
              <Button 
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-4 mt-2"
                onClick={() => window.open('https://wa.me/918093186810', '_blank')}
              >
                Send Screenshot on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Party Orders Section */}
      <section className="py-20 bg-[#0a2c2e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] mb-6">Party & Bulk Orders</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl text-[#e8dcc0]">
              Planning a house party?<br />Office event?<br />Late night gathering?
            </p>
            <p className="text-lg text-[#e8dcc0]">
              We accept bulk and party orders.<br />Custom quantity available.<br />Advance booking recommended.
            </p>
            <Button 
              className="bg-[#d4af37] hover:bg-[#f4e5b0] text-[#0a2c2e] font-semibold px-12 py-6 text-lg mt-8"
              //onClick={handleBulkOrderClick}
              onClick={() => scrollToSection('order')}
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
          <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] text-center mb-12">Delivery Coverage</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-[#0a2c2e] border-[#d4af37]/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">We Serve</h3>
                  <ul className="space-y-3 text-[#e8dcc0] text-lg">
                    {['Kharar', 'Sector 126', 'Model Town', 'Mohali nearby areas'].map(area => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#d4af37] rounded-full" />{area}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-[#0a2c2e] border-[#d4af37]/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6" />Our Location
                  </h3>
                  <p className="text-[#e8dcc0] text-lg leading-relaxed">
                    74A, Sector 126, Model Town,<br />
                    Kharar, Sahibzada Ajit Singh Nagar,<br />
                    Punjab 140301
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="h-[400px] md:h-full rounded-lg overflow-hidden border-2 border-[#d4af37]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715!2d76.6631295!3d30.7371955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe9ea59657b%3A0xe98f63b73a941c8c!2s74A!5e0!3m2!1sen!2sin!4v1708000000000"
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
            <div 
              //className="grid md:grid-cols-3 gap-8 mb-8">
              className="grid md:grid-cols-3 gap-8 mb-8 items-center">
            <div className="text-center md:text-left">
              <img 
                src={LogoImg} 
                alt="Biryani Leaf" 
                //className="h-24 md:h-28 lg:h-32 mx-auto md:mx-0 mb-4"
                className="h-48 md:h-56 lg:h-64 w-auto mx-auto md:mx-0"
              />
            </div>
            
            <div className="text-center">
              <h4 className="text-[#d4af37] font-semibold mb-4 text-lg">Connect With Us</h4>
              <div className="flex justify-center gap-5 flex-wrap">
                <a href="https://www.instagram.com/biryani.leaf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#e8dcc0] hover:text-[#d4af37] transition-colors" data-testid="footer-instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61583683381585" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#e8dcc0] hover:text-[#d4af37] transition-colors" data-testid="footer-facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://wa.me/918093186810" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#e8dcc0] hover:text-[#d4af37] transition-colors" data-testid="footer-whatsapp">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="https://share.google/SlbLFQ4j1b9VlFi28" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#e8dcc0] hover:text-[#d4af37] transition-colors" data-testid="footer-google">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                </a>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-[#e8dcc0] hover:text-[#d4af37] transition-colors mt-4 text-sm" data-testid="footer-contact-link">
                <Mail className="w-4 h-4" />
                Contact Us / Feedback
              </Link>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-[#e8dcc0] mb-2 text-lg">Cloud Kitchen | Delivery Only</p>
              <p className="text-sm text-[#e8dcc0]">Open Daily: 11:30 AM - 2 AM</p>
            </div>
          </div>
          
          <div className="border-t border-[#d4af37]/20 pt-8 text-center">
            <p className="text-[#e8dcc0]">&copy; 2025 Biryani Leaf. All rights reserved.</p>
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
