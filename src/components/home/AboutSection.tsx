
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sobre Aquinos Delícias</h2>
            <p className="text-gray-700 mb-4">
              O Aquinos Delícias nasceu da paixão pela culinária brasileira e do desejo de levar 
              pratos saborosos diretamente para a mesa dos nossos clientes.
            </p>
            <p className="text-gray-700 mb-6">
              Especializados em escondidinhos, oferecemos uma variedade de sabores preparados com 
              ingredientes frescos e de alta qualidade. Nossa missão é proporcionar uma experiência 
              gastronômica incrível, com atendimento ágil e entrega rápida.
            </p>
            <Button asChild className="bg-aquinos-red hover:bg-red-600 text-white">
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/placeholder.svg" 
              alt="Equipe Aquinos Delícias" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
