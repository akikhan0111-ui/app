# Biryani Leaf - Taste of Hyderabad
## Product Requirements Document

**Created:** February 22, 2025
**Last Updated:** February 22, 2025 (Version 2.0 - Enhanced Design)

---

## Original Problem Statement

Build a premium, mobile-first website for a cloud kitchen brand named "Biryani Leaf – Taste of Hyderabad".

**Brand Positioning:**
- Premium Hyderabadi dum biryani cloud kitchen serving Kharar and Mohali
- Authentic, slow-cooked, dum-style biryani
- Delivery-only business (no dine-in)
- Available via Swiggy, Zomato, direct call, WhatsApp orders, and online payment

---

## Visual Theme & Design

- **Background:** Deep teal blue (#0a2c2e, #0f3b3f)
- **Typography:** Playfair Display (gold serif) for headings, Inter for body
- **Accent Color:** Gold (#d4af37, #f4e5b0)
- **Design Elements:** Faint Charminar watermark, cinematic food photography
- **Style:** Premium, royal, minimal, authentic Indian feel

---

## User Personas

1. **Local Food Lovers** - Residents in Kharar/Mohali seeking authentic Hyderabadi biryani
2. **Party Hosts** - People planning events, office parties, house gatherings
3. **Convenience Seekers** - Users wanting quick ordering via Swiggy/Zomato/WhatsApp
4. **Premium Quality Seekers** - Customers willing to pay for authentic, slow-cooked food

---

## What's Been Implemented

### Version 2.0 (Feb 22, 2025) - Enhanced Design
- **Larger, Dynamic Logo** in header that shrinks on scroll
- **Redesigned Hero Section** with badge, animated gradient, icons for delivery time/quality/taste
- **Enhanced About Section** with icon cards and logo placed in bottom-right (no overlap)
- **Improved Menu Section** with badges (Bestseller, Most Ordered, Value Pack, etc.)
- **Better Food Images** - accurate images for all dishes
- **Menu Updates:**
  - Split Tikka Butter Masala into Chicken & Paneer versions
  - Corrected images for Chicken Biryani Regular, Family, Chicken 65, Chicken Chilli
  - Added 4th veg item: Paneer Tikka Butter Masala
- **Enhanced Animations:** Hover effects, scale transforms, smooth transitions
- **Improved Typography:** Larger headings, better spacing, section emojis

### Version 1.0 (Feb 22, 2025)

### ✅ Frontend (Fully Functional)
- **Hero Section** with dual CTAs (Swiggy, Zomato, Direct Order)
- **About Section** with 4 key value propositions
- **Menu Section** with category filters (All/Veg/Non-Veg)
  - Non-Veg: 6 items with pricing
  - Veg: 3 items with pricing
  - Portion guide clearly displayed
- **Order Direct Section** with phone numbers, WhatsApp integration, UPI payment
- **Party Orders Section** with bulk order CTA
- **Delivery Coverage Section** with location details + embedded Google Maps
- **Footer** with Instagram link and business info
- **Sticky Order Button** (mobile only)
- **Smooth scroll navigation**
- **Premium image gallery** from Unsplash/Pexels
- **Fully responsive** (mobile-first design)

### Technologies Used
- React 19.0.0
- React Router v7
- Shadcn/UI components (Button, Card)
- Tailwind CSS
- Lucide React icons
- Google Fonts (Playfair Display, Inter)

---

## Core Requirements (Static)

### Functional Requirements
- ✅ Mobile-first responsive design
- ✅ Fast loading with optimized images
- ✅ WhatsApp integration (click-to-open)
- ✅ Click-to-call functionality
- ✅ UPI payment link integration
- ✅ Clean navigation with smooth scrolling
- ✅ Sticky "Order Now" button on mobile
- ✅ Google Maps embedded
- ✅ Instagram social link

### Content Requirements
- ✅ Premium food photography
- ✅ Clear pricing structure
- ✅ Service area information
- ✅ Multiple ordering methods (Swiggy, Zomato, Direct)
- ✅ Contact information (2 phone numbers)
- ✅ Business location with map

---

## Prioritized Backlog

### P0 (Must Have - Completed)
- ✅ All sections implemented
- ✅ Mobile responsiveness
- ✅ Order integration (WhatsApp, Phone, UPI)

### P1 (Should Have - Future)
- [ ] Backend order management system
- [ ] Real UPI QR code generation
- [ ] Admin panel for menu management
- [ ] Order tracking system
- [ ] Customer database
- [ ] Email notifications

### P2 (Nice to Have - Future)
- [ ] Customer reviews/testimonials section
- [ ] Special offers/promotions banner
- [ ] Newsletter subscription
- [ ] Multi-language support (Hindi, Punjabi)
- [ ] Dark mode toggle
- [ ] WhatsApp chatbot integration
- [ ] Online payment gateway (Razorpay/Stripe)
- [ ] Loyalty program
- [ ] Real-time delivery tracking

---

## Next Action Items

1. **Backend Development** (when user requests):
   - Build order management API
   - Integrate MongoDB for order storage
   - Create admin authentication
   - Develop menu CRUD operations

2. **Enhancements**:
   - Replace dummy UPI ID with actual payment details
   - Update Google Maps with precise coordinates
   - Add customer testimonials section
   - Implement special offers banner

3. **SEO Optimization**:
   - Add meta tags for local search
   - Implement schema markup for restaurant
   - Add sitemap.xml
   - Optimize for keywords: "Hyderabadi Biryani Kharar", "Biryani Mohali"

---

## Notes

- Frontend is fully functional with mock data
- No backend required for current version (static website)
- All order methods redirect to external platforms (Swiggy, Zomato) or communication channels (WhatsApp, Phone)
- UPI payment uses deep linking to open payment apps
- Design follows premium, royal aesthetic with deep teal and gold color scheme
- Images sourced from Unsplash and Pexels (free commercial use)


---

## Design Enhancements Made (v2.0)

### Visual Improvements
1. **Logo:** Increased from h-12/h-16 to h-16/h-20/h-24 with scroll-based sizing
2. **Hero Section:** 
   - Added "Now Delivering" badge
   - 3-icon feature grid (Clock, Flame, Award)
   - Animated Charminar watermark
   - Multi-layered blur effects on image
3. **About Section:**
   - 4-card grid layout with icon circles
   - Logo watermark repositioned to bottom-right corner
   - Removed text overlap issues
   - Added hover scale effects
4. **Menu Cards:**
   - Promotional badges (Bestseller, Most Ordered, etc.)
   - Enhanced hover effects with 125% zoom
   - Gradient overlays on images
   - Larger text and better spacing

### Image Updates
- **Chicken Biryani Single:** Restaurant plated biryani
- **Chicken Biryani Regular:** Clay pot authentic presentation  
- **Chicken Biryani Family:** Action shot with fork lift
- **Chicken 65:** Crispy red fried chicken with chilies
- **Chicken Chilli:** Indo-Chinese dark plated presentation
- **Chicken Tikka Butter Masala:** Rich orange curry
- **Paneer Tikka Butter Masala:** Creamy paneer curry (NEW)

