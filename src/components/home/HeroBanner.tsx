
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    title: "Escondidinhos Saborosos",
    subtitle: "Uma explosão de sabores em cada garfada",
    image: "/placeholder.svg",
    buttonText: "Ver Cardápio",
    buttonLink: "/cardapio"
  },
  {
    id: 2,
    title: "Promoção da Semana",
    subtitle: "Escondidinho de Carne Seca com 15% de desconto",
    image: "/placeholder.svg",
    buttonText: "Pedir Agora",
    buttonLink: "/cardapio"
  },
  {
    id: 3,
    title: "Entrega Rápida",
    subtitle: "Seu pedido na sua casa em tempo recorde",
    image: "/placeholder.svg",
    buttonText: "Fazer Pedido",
    buttonLink: "/cardapio"
  }
];

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-80 md:h-96 overflow-hidden bg-gray-100">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Banner Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-aquinos-red/80 to-aquinos-red/40"></div>
          </div>
          
          {/* Banner Content */}
          <div className="relative h-full flex flex-col justify-center container mx-auto px-6">
            <div className="max-w-xl animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{banner.title}</h2>
              <p className="text-lg md:text-xl text-white/90 mb-6">{banner.subtitle}</p>
              <Button asChild className="bg-aquinos-yellow text-aquinos-red hover:bg-yellow-400">
                <Link to={banner.buttonLink}>
                  {banner.buttonText}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-aquinos-yellow w-6' 
                : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
