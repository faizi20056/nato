import { Menu, X, Phone, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-nato-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+18558367237" className="flex items-center space-x-1 hover:text-nato-light transition-colors">
                <Phone size={14} />
                <span className="hidden sm:inline">Live Agent: +1 855 836 7237</span>
              </a>
              <span className="hidden md:inline text-nato-light">|</span>
              <span className="hidden md:inline text-nato-light">Trusted Since 2002</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center space-x-1 hover:text-nato-light transition-colors"
                >
                  <Globe size={14} />
                  <span>EN</span>
                </button>
                {languageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800">
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-nato-light transition-colors">Sign In</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="https://i.ibb.co/8k4JTTn/logo.png"
                alt="MilitaryFares"
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#flights" className="text-gray-700 hover:text-nato-blue font-medium transition-colors">Flights</a>
            <a href="#hotels" className="text-gray-700 hover:text-nato-blue font-medium transition-colors">Hotels</a>
            <a href="#packages" className="text-gray-700 hover:text-nato-blue font-medium transition-colors">Packages</a>
            <a href="#destinations" className="text-gray-700 hover:text-nato-blue font-medium transition-colors">Destinations</a>
            <a href="#about" className="text-gray-700 hover:text-nato-blue font-medium transition-colors">About</a>
            <button className="bg-nato-gold text-white px-6 py-2.5 rounded-md font-semibold hover:bg-nato-gold-dark transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <a href="#flights" className="block py-2 text-gray-700 hover:text-nato-blue font-medium">Flights</a>
            <a href="#hotels" className="block py-2 text-gray-700 hover:text-nato-blue font-medium">Hotels</a>
            <a href="#packages" className="block py-2 text-gray-700 hover:text-nato-blue font-medium">Packages</a>
            <a href="#destinations" className="block py-2 text-gray-700 hover:text-nato-blue font-medium">Destinations</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-nato-blue font-medium">About</a>
            <button className="w-full bg-nato-gold text-white px-6 py-3 rounded-md font-semibold hover:bg-nato-gold-dark transition-all mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
