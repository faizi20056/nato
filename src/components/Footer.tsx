import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-nato-navy to-nato-blue-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <img
                src="https://i.ibb.co/8k4JTTn/logo.png"
                alt="MilitaryFares"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-nato-light text-sm leading-relaxed mb-4">
              Exclusive travel discounts for NATO military personnel and families. Built on 20+ years of trusted service through MilitaryFares.com.
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img src="https://seal-newyork.bbb.org/logo/ruhzbul/military-fares-90253409.png" alt="BBB Accredited" className="h-12" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Flights</a></li>
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Hotels</a></li>
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Cars</a></li>
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Vacations</a></li>
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Multi-destination packages</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Cookies Policy</a></li>
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Travel Tips, Stories and Deals</a></li>
              <li><a href="#" className="text-nato-light hover:text-white transition-colors">Military Verification</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-nato-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-nato-light">Live Agent Support</div>
                  <a href="tel:+18558367237" className="text-white hover:text-nato-gold transition-colors">
                    +1 855 836 7237
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Stay Inspired */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Inspired</h3>
            <p className="text-nato-light mb-6">
              Curated travel content to inspire future adventures. Sign up today and let travel dreams run wild.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Please enter Email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-nato-gold"
              />
              <button className="bg-nato-gold hover:bg-nato-gold-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-nato-light">Available in:</span>
            <a href="#" className="text-white hover:text-nato-gold transition-colors font-medium">English</a>
            <span className="text-nato-light">•</span>
            <a href="#" className="text-nato-light hover:text-white transition-colors">Français</a>
            <span className="text-nato-light">•</span>
            <a href="#" className="text-nato-light hover:text-white transition-colors">Deutsch</a>
            <span className="text-nato-light">•</span>
            <a href="#" className="text-nato-light hover:text-white transition-colors">Español</a>
            <span className="text-nato-light">•</span>
            <a href="#" className="text-nato-light hover:text-white transition-colors">Italiano</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-nato-light">
            <div className="text-center md:text-left">
              ©2023 — 2025 Militaryfares.com ™, all rights reserved
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a href="#" className="text-nato-light hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="text-nato-light hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-nato-light hover:text-white transition-colors">California Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
