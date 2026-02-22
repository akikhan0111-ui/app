# Biryani Leaf - Taste of Hyderabad
## Product Requirements Document

**Created:** February 22, 2025
**Last Updated:** February 22, 2025 (Version 3.0 - UI/UX Enhancements)

---

## Original Problem Statement

Build a premium, mobile-first website for a cloud kitchen brand named "Biryani Leaf - Taste of Hyderabad".

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
- **Style:** Premium, royal, minimal, authentic Indian feel

---

## What's Been Implemented

### Version 3.0 (Feb 22, 2025) - UI/UX Enhancements
- **Hero Image Carousel:** Auto-playing slider (3.5s interval) showing 5 menu items with embla-carousel-react + autoplay plugin. Prev/next arrows on hover.
- **Enhanced Header/Nav Bar:** Gold top accent line, 4 nav links (About, Menu, Order, Contact) with icons on hover, phone number pill, Order Now CTA. No longer looks empty.
- **Bulk Order Scroll + Animation:** "Call Now for Bulk Orders" button smooth-scrolls to contact section and triggers a wiggle animation on phone icons for 4 seconds.
- **Phone Number Fix:** Removed extra space from 2nd phone number (8287767107).
- **Animated Call Icons:** Phone numbers in contact section show wiggle + ring animation when triggered by bulk order button.

### Version 2.0 - Enhanced Design
- Larger, dynamic logo in header that shrinks on scroll
- Redesigned hero section with badge, animated gradient, icons
- Enhanced about section with icon cards
- Improved menu section with badges (Bestseller, Most Ordered, etc.)
- Better food images, menu updates (split Tikka Butter Masala, added Paneer variant)

### Version 1.0 - Initial Build
- All 7 sections: Hero, About, Menu, Order Direct, Party Orders, Delivery Coverage, Footer
- Mobile-first responsive design with sticky Order Now button
- WhatsApp, click-to-call, UPI payment integrations
- Smooth scroll navigation
- Google Maps embedded
- Instagram link

---

## Technologies Used
- React 19, React Router v7, Tailwind CSS
- Shadcn/UI (Button, Card, Badge)
- Lucide React icons
- embla-carousel-react + embla-carousel-autoplay
- Google Fonts (Playfair Display, Inter)

---

## Core Files
- `/app/frontend/src/pages/Home.jsx` - Main page (all sections)
- `/app/frontend/src/App.css` - Custom CSS & animations
- `/app/frontend/src/App.js` - Router setup

---

## Prioritized Backlog

### P1 (Should Have - Upcoming)
- [ ] SEO optimization (meta tags, local keywords, schema markup)
- [ ] Google Maps with precise coordinates
- [ ] Real UPI QR code

### P2 (Nice to Have - Future)
- [ ] Backend order management system
- [ ] Admin panel for menu management
- [ ] Customer reviews/testimonials section
- [ ] Multi-language support (Hindi, Punjabi)
- [ ] WhatsApp chatbot integration
- [ ] Online payment gateway
- [ ] Loyalty program
- [ ] Special offers/promotions banner

### Refactoring
- [ ] Break Home.jsx monolith into smaller components (HeroSection, MenuSection, etc.)

---

## Testing
- **Test Report:** /app/test_reports/iteration_1.json
- **Status:** All 13 test cases passed (100% frontend success rate)
- **Last Tested:** Feb 22, 2025
