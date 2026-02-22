import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Instagram, ChevronDown, Clock, Award, Flame } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);

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
        name: 'Veg Biryani', 
        price: '₹180', 
        serves: 'Serves 1',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
        tag: 'Popular'
      },
      { 
        name: 'Paneer 65', 
        price: '₹220', 
        image: 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.png',
        tag: 'Spicy'
      },
      { 
        name: 'Paneer Chilli', 
        price: '₹220', 
        image: 'https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e',
        tag: 'Indo-Chinese'
      },
      { 
        name: 'Paneer Tikka Butter Masala', 
        price: '₹240', 
        image: 'https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg',
        tag: 'Rich & Creamy'
      }
    ],
    nonVeg: [
      { 
        name: 'Chicken Biryani Single', 
        price: '₹120', 
        serves: 'Serves 1',
        image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a',
        tag: 'Bestseller'
      },
      { 
        name: 'Chicken Biryani Regular', 
        price: '₹200', 
        serves: 'Serves 2-3',
        image: 'https://images.pexels.com/photos/33947401/pexels-photo-33947401.jpeg',
        tag: 'Most Ordered'
      },
      { 
        name: 'Chicken Biryani Family', 
        price: '₹450', 
        serves: 'Serves up to 5',
        image: 'https://images.unsplash.com/photo-1705174299330-939dd03cc864',
        tag: 'Value Pack'
      },
      { 
        name: 'Chicken 65', 
        price: '₹220', 
        image: 'https://images.pexels.com/photos/9207044/pexels-photo-9207044.jpeg',
        tag: 'Crispy & Hot'
      },
      { 
        name: 'Chicken Chilli', 
        price: '₹220', 
        image: 'https://images.pexels.com/photos/5339079/pexels-photo-5339079.jpeg',
        tag: 'Indo-Chinese'
      },
      { 
        name: 'Chicken Tikka Butter Masala', 
        price: '₹250', 
        image: 'https://images.unsplash.com/photo-1707448829764-9474458021ed',
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
      <header className={`fixed top-0 w-full z-50 border-b border-[#d4af37]/20 transition-all duration-300 ${
        scrolled ? 'bg-[#0a2c2e]/98 backdrop-blur-md py-2' : 'bg-[#0a2c2e]/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img 
            src="https://customer-assets.emergentagent.com/job_68a4ecf8-ba90-4263-90c1-1d1f08db2c1e/artifacts/6i6kvsxs_biryanileaf.png" 
            alt="Biryani Leaf" 
            className={`transition-all duration-300 ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20 lg:h-24'}`}
          />
          <nav className="hidden md:flex gap-6 text-[#d4af37] font-medium text-lg">
            <button onClick={() => scrollToSection('menu')} className="hover:text-[#f4e5b0] transition-colors hover:scale-105 transform">Menu</button>
            <button onClick={() => scrollToSection('order')} className="hover:text-[#f4e5b0] transition-colors hover:scale-105 transform">Order</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#f4e5b0] transition-colors hover:scale-105 transform">Contact</button>
          </nav>
          <Button 
            onClick={() => scrollToSection('order')}
            className="bg-[#d4af37] text-[#0a2c2e] hover:bg-[#f4e5b0] font-bold px-6 py-3 text-base shadow-lg hover:shadow-[#d4af37]/50"
          >
            Order Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2c2e] via-[#0f3b3f] to-[#0a2c2e] opacity-90" />
        
        {/* Charminar Watermark */}
        <div 
          className="absolute inset-0 opacity-5 animate-pulse"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_68a4ecf8-ba90-4263-90c1-1d1f08db2c1e/artifacts/6i6kvsxs_biryanileaf.png)',
            backgroundSize: '60%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            animationDuration: '4s'
          }}
        />
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <Badge className="bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37] px-4 py-2 text-sm font-semibold mb-4">
                Now Delivering in Kharar & Mohali
              </Badge>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#d4af37] leading-tight animate-fade-in">
              Taste of Hyderabad is Arriving
            </h1>
            <p className="text-2xl md:text-3xl text-[#e8dcc0] font-light">
              Authentic Dum Biryani.<br/>
              <span className="text-[#f4e5b0]">Delivered Hot. Delivered Fresh.</span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
              <Button 
                className="bg-[#ff6b35] hover:bg-[#ff8555] text-white font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-[#ff6b35]/50 transform hover:scale-105 transition-all"
                onClick={() => window.open('https://www.swiggy.com', '_blank')}
              >
                Order on Swiggy
              </Button>
              <Button 
                className="bg-[#e23744] hover:bg-[#f44755] text-white font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-[#e23744]/50 transform hover:scale-105 transition-all"
                onClick={() => window.open('https://www.zomato.com', '_blank')}
              >
                Order on Zomato
              </Button>
            </div>
            
            <Button 
              variant="outline"
              className="w-full sm:w-auto border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a2c2e] px-10 py-7 text-lg font-bold transform hover:scale-105 transition-all"
              onClick={() => scrollToSection('order')}
            >
              Order Direct & Save More
            </Button>
            
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <Clock className="w-8 h-8 text-[#d4af37] mx-auto mb-2" />
                <p className="text-[#e8dcc0] text-sm">45 Min Delivery</p>
              </div>
              <div className="text-center">
                <Flame className="w-8 h-8 text-[#d4af37] mx-auto mb-2" />
                <p className="text-[#e8dcc0] text-sm">Authentic Taste</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-[#d4af37] mx-auto mb-2" />
                <p className="text-[#e8dcc0] text-sm">Premium Quality</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1705174299330-939dd03cc864" 
                alt="Premium Hyderabadi Biryani"
                className="rounded-2xl shadow-2xl w-full border-4 border-[#d4af37]/30"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#d4af37]/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#e23744]/10 rounded-2xl blur-2xl" />
          </div>
        </div>
        
        <ChevronDown 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4af37] w-10 h-10 animate-bounce cursor-pointer hover:text-[#f4e5b0]"
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
                <span className="font-bold text-[#d4af37]">Portion Guide:</span> Single – 1 person | Regular – 2-3 people | Family – Up to 5 people
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
                    <Card key={index} className="bg-[#0f3b3f] border-[#d4af37]/40 overflow-hidden group hover:border-[#d4af37] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/30 cursor-pointer">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3b3f] to-transparent opacity-60" />
                        {item.tag && (
                          <Badge className="absolute top-4 right-4 bg-[#d4af37] text-[#0a2c2e] font-bold px-3 py-1 shadow-lg">
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6 space-y-3">
                        <h4 className="text-2xl font-serif text-[#d4af37]">{item.name}</h4>
                        {item.serves && (
                          <p className="text-sm text-[#e8dcc0] bg-[#0a2c2e]/50 inline-block px-3 py-1 rounded-full">
                            {item.serves}
                          </p>
                        )}
                        <p className="text-3xl font-bold text-[#f4e5b0]">{item.price}</p>
                      </CardContent>
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
                    <Card key={index} className="bg-[#0f3b3f] border-[#d4af37]/40 overflow-hidden group hover:border-[#d4af37] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/30 cursor-pointer">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3b3f] to-transparent opacity-60" />
                        {item.tag && (
                          <Badge className="absolute top-4 right-4 bg-[#d4af37] text-[#0a2c2e] font-bold px-3 py-1 shadow-lg">
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6 space-y-3">
                        <h4 className="text-2xl font-serif text-[#d4af37]">{item.name}</h4>
                        {item.serves && (
                          <p className="text-sm text-[#e8dcc0] bg-[#0a2c2e]/50 inline-block px-3 py-1 rounded-full">
                            {item.serves}
                          </p>
                        )}
                        <p className="text-3xl font-bold text-[#f4e5b0]">{item.price}</p>
                      </CardContent>
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
            <Card className="bg-[#0a2c2e] border-[#d4af37]/30">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-[#d4af37] text-center">Call or WhatsApp</h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:8804081857"
                    className="flex items-center justify-center gap-3 bg-[#0f3b3f] hover:bg-[#d4af37]/20 p-4 rounded-lg transition-colors group"
                  >
                    <Phone className="text-[#d4af37] group-hover:scale-110 transition-transform" />
                    <span className="text-[#e8dcc0] text-lg font-medium">8804081857</span>
                  </a>
                  
                  <a 
                    href="tel:8287767107"
                    className="flex items-center justify-center gap-3 bg-[#0f3b3f] hover:bg-[#d4af37]/20 p-4 rounded-lg transition-colors group"
                  >
                    <Phone className="text-[#d4af37] group-hover:scale-110 transition-transform" />
                    <span className="text-[#e8dcc0] text-lg font-medium">82877 67107</span>
                  </a>
                </div>
                
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-6 text-lg"
                  onClick={() => window.open('https://wa.me/918804081857', '_blank')}
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
              onClick={() => window.open('tel:8804081857', '_self')}
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
                className="h-16 mx-auto md:mx-0 mb-4"
              />
              <p className="text-[#e8dcc0]">Taste of Hyderabad</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-[#d4af37] font-semibold mb-4">Follow Us</h4>
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
              <p className="text-[#e8dcc0] mb-2">Cloud Kitchen | Delivery Only</p>
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