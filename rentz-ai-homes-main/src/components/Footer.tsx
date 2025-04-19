
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-rentz-darkPurple text-white pt-16 pb-8", className)}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-rentz-purple" />
              <span className="text-2xl font-bold">Rentz</span>
            </div>
            <p className="text-gray-300 mb-4">
              Finding the perfect PG accommodation has never been easier with our AI-powered rental platform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-rentz-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-rentz-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-rentz-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-rentz-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Properties", "Blog", "Contact Us", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-rentz-purple transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Popular Locations</h3>
            <ul className="space-y-3">
              {["Chandigarh", "Delhi", "Bangalore", "Mumbai", "Pune", "Hyderabad"].map((city) => (
                <li key={city}>
                  <a href="#" className="text-gray-300 hover:text-rentz-purple transition-colors">
                    PGs in {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rentz-purple flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 IT Park Road, Sector 22, Chandigarh, 160022
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rentz-purple flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-rentz-purple transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-rentz-purple flex-shrink-0" />
                <a href="mailto:info@rentz.com" className="text-gray-300 hover:text-rentz-purple transition-colors">
                  info@rentz.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Rentz. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-rentz-purple transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rentz-purple transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-rentz-purple transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
