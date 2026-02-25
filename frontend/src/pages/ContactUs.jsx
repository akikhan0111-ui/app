import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowLeft, Send, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Feedback from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:biryanileaf0247@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a2c2e] pt-8 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4e5b0] transition-colors mb-8" data-testid="back-home-link">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <img 
            src="https://customer-assets.emergentagent.com/job_68a4ecf8-ba90-4263-90c1-1d1f08db2c1e/artifacts/6i6kvsxs_biryanileaf.png" 
            alt="Biryani Leaf" 
            className="h-20 mx-auto mb-6"
          />
          <h1 className="font-serif text-4xl sm:text-5xl text-[#d4af37] mb-4">Contact Us</h1>
          <p className="text-[#e8dcc0] text-lg">We take feedbacks very seriously!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <Card className="bg-[#0f3b3f] border-[#d4af37]/30">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-[#d4af37] mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Us Your Feedback
              </h2>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <p className="text-[#e8dcc0] text-lg">Your email client should open now.</p>
                  <p className="text-[#e8dcc0]/70 text-sm">Send the email to complete your feedback.</p>
                  <Button onClick={() => setSubmitted(false)} className="bg-[#d4af37] text-[#0a2c2e] hover:bg-[#f4e5b0] mt-4">
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[#e8dcc0] text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#0a2c2e] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-[#e8dcc0] focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="Enter your name"
                      data-testid="contact-name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#e8dcc0] text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#0a2c2e] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-[#e8dcc0] focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      data-testid="contact-email"
                    />
                  </div>
                  <div>
                    <label className="block text-[#e8dcc0] text-sm mb-2">Your Feedback</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#0a2c2e] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-[#e8dcc0] focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                      placeholder="Share your experience with us..."
                      data-testid="contact-message"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#d4af37] hover:bg-[#f4e5b0] text-[#0a2c2e] font-semibold py-6 text-lg" data-testid="contact-submit">
                    <Send className="w-5 h-5 mr-2" />
                    Send Feedback
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-[#0f3b3f] border-[#d4af37]/30">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-xl font-semibold text-[#d4af37] flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Phone Numbers
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#e8dcc0]">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span>8093186810</span>
                    <span className="text-xs text-[#d4af37] bg-[#d4af37]/20 px-2 py-0.5 rounded">Primary</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#e8dcc0]">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span>8287767197</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#e8dcc0]">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span>9827709402</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0f3b3f] border-[#d4af37]/30">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-xl font-semibold text-[#d4af37] flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </h2>
                <a href="mailto:biryanileaf0247@gmail.com" className="text-[#e8dcc0] hover:text-[#d4af37] transition-colors" data-testid="contact-email-link">
                  biryanileaf0247@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-[#0f3b3f] border-[#d4af37]/30">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-xl font-semibold text-[#d4af37] flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Address
                </h2>
                <p className="text-[#e8dcc0] leading-relaxed">
                  74A, Sector 126, Model Town,<br />
                  Kharar, Sahibzada Ajit Singh Nagar,<br />
                  Punjab 140301
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
