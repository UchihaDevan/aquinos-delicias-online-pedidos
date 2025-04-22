
import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aquinos Delícias</h3>
            <p className="text-gray-600 mb-4">
              Especializados em escondidinhos deliciosos, prontos para entrega na sua casa.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-aquinos-red transition-colors"
              >
                <Phone size={18} />
                <span>(00) 00000-0000</span>
              </a>
              <a 
                href="mailto:contato@aquinosdelicias.com" 
                className="flex items-center gap-2 text-gray-600 hover:text-aquinos-red transition-colors"
              >
                <Mail size={18} />
                <span>contato@aquinosdelicias.com</span>
              </a>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-aquinos-red text-aquinos-red hover:bg-aquinos-red hover:text-white"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-aquinos-red text-aquinos-red hover:bg-aquinos-red hover:text-white"
                asChild
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Aquinos Delícias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
