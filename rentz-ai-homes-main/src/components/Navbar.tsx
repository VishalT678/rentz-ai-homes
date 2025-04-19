
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Home, Menu, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Home className="h-6 w-6 text-rentz-purple" />
          <span className="text-2xl font-bold text-gradient">Rentz</span>
        </Link>
        
        {!isMobile ? (
          <div className="flex items-center gap-6">
            <NavLinks className="flex items-center gap-6" />
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="font-medium"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button 
                className="bg-rentz-purple hover:bg-rentz-purple/90 font-medium"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </div>
          </div>
        ) : (
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <NavLinks className="flex flex-col gap-4 mb-4" />
            <div className="flex flex-col gap-3">
              <Button 
                variant="outline" 
                className="w-full font-medium"
                onClick={() => {
                  navigate('/login');
                  setIsMenuOpen(false);
                }}
              >
                Login
              </Button>
              <Button 
                className="w-full bg-rentz-purple hover:bg-rentz-purple/90 font-medium"
                onClick={() => {
                  navigate('/signup');
                  setIsMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  const location = useLocation();
  const isOwner = location.pathname === '/owner-dashboard' || localStorage.getItem('userType') === 'owner';
  
  const links = [
    { name: "Home", href: "/" },
    { name: "Ideal PG", href: "/ideal-pg" },
    { name: "Contact", href: "/contact" },
    ...(isOwner ? [
      { name: "List Your PG", href: "/list-your-pg" },
      { name: "Owner Dashboard", href: "/owner-dashboard" }
    ] : []),
  ];
  
  return (
    <div className={cn("text-gray-700", className)}>
      {links.map(link => (
        <Link 
          key={link.name} 
          to={link.href}
          className="hover:text-rentz-purple transition-colors duration-200 font-medium"
          onClick={() => window.scrollTo(0, 0)}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
