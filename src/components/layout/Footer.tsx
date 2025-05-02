import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-imperial-purple to-imperial-blue bg-clip-text text-transparent">
                Innovation Imperial
              </h3>
              <p className="text-gray-600 max-w-xs">
                Specializing in developing websites, CRM, HR systems, accounting systems, 
                LMS, loan management systems, e-commerce stores, and AI solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-imperial-blue hover:text-imperial-purple transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-imperial-blue hover:text-imperial-purple transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-imperial-blue hover:text-imperial-purple transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-imperial-blue hover:text-imperial-purple transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-imperial-blue">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="text-gray-600 hover:text-imperial-blue transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-imperial-blue">Our Services</h4>
              <ul className="space-y-2">
                {['Web Development', 'CRM Systems', 'HR Systems', 'E-commerce', 'AI Solutions', 'Accounting Systems'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-imperial-blue transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-imperial-blue">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 text-imperial-blue" size={20} />
                  <span className="text-gray-600">103 burgerstreet waterfall</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 text-imperial-blue" size={20} />
                  <span className="text-gray-600">+27 690 6374</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 text-imperial-blue" size={20} />
                  <span className="text-gray-600">allan@innovationimperial.co.za</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Innovation Imperial. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-imperial-blue text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-imperial-blue text-sm">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-imperial-blue text-sm">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Royal Blue Bottom Bar */}
        <div className="mt-8 py-4 bg-imperial-blue">
          <div className="container mx-auto px-4">
            <div className="text-center text-white text-sm">
              Designed with ❤️ by Innovation Imperial
            </div>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27697906374"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.421h-.001a9.87 9.87 0 0 1-4.988-1.354l-.357-.213-3.714.982.993-3.617-.232-.372a9.86 9.86 0 0 1-1.51-5.19c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.987c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.435.058 12.088c0 2.13.557 4.213 1.615 6.045L0 24l6.064-1.591a11.876 11.876 0 0 0 5.982 1.523h.005c6.554 0 11.889-5.435 11.891-12.088a11.86 11.86 0 0 0-3.485-8.463"/>
        </svg>
      </a>
    </>
  );
};

export default Footer;
