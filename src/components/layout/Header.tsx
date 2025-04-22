import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Home, Book, Info, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import CartDrawer from '../cart/CartDrawer';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { name: "Início", path: "/", icon: <Home size={18} /> },
  { name: "Cardápio", path: "/cardapio", icon: <Book size={18} /> },
  { name: "Sobre", path: "/sobre", icon: <Info size={18} /> },
  { name: "Contato", path: "/contato", icon: <Phone size={18} /> },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { toast } = useToast();
  const { items } = useCart();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleCartClick = () => {
    setCartOpen(true);
  };
  
  const handleLoginClick = () => {
    toast({
      title: "Login/Cadastro",
      description: "Esta funcionalidade estará disponível em breve!",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-aquinos-red">Aquinos Delícias</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-gray-700 hover:text-aquinos-red transition-colors duration-200 flex items-center gap-1"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleCartClick}
              className="text-aquinos-red hover:bg-red-50 relative"
            >
              <ShoppingCart size={24} />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-aquinos-yellow text-aquinos-red text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLoginClick}
              className="text-aquinos-red hover:bg-red-50 hidden md:flex"
            >
              <User size={24} />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-aquinos-red hover:bg-red-50 md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-gray-700 hover:text-aquinos-red p-2 flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <Button 
                variant="ghost" 
                onClick={handleLoginClick}
                className="justify-start text-gray-700 hover:text-aquinos-red p-2"
              >
                <User size={18} className="mr-2" />
                <span>Login/Cadastro</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
