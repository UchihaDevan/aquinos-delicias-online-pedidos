
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    text: "Os escondidinhos são maravilhosos! O de carne seca é o meu favorito, super recomendo!",
    date: "15/03/2025"
  },
  {
    id: 2,
    name: "João Pereira",
    rating: 5,
    text: "Entrega rápida e comida quentinha. Sempre peço o escondidinho de frango, nunca decepciona.",
    date: "02/04/2025"
  },
  {
    id: 3,
    name: "Ana Costa",
    rating: 4,
    text: "Sabor incrível e porção generosa! O atendimento é excelente.",
    date: "10/04/2025"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={i < rating ? '#FFDD00' : '#E2E8F0'} 
          className="w-5 h-5"
        >
          <path 
            fillRule="evenodd" 
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
            clipRule="evenodd" 
          />
        </svg>
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">O Que Nossos Clientes Dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-aquinos-red">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
