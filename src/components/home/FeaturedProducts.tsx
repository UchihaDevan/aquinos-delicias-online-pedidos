
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart } from 'lucide-react';

// Mock data for featured products
const products = [
  {
    id: 1,
    name: "Escondidinho de Carne Seca",
    description: "Purê de mandioca cremoso recheado com carne seca desfiada",
    price: 32.90,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Escondidinho de Frango",
    description: "Purê de batata com recheio de frango desfiado e queijo",
    price: 28.90,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Escondidinho Fit",
    description: "Purê de batata doce com recheio de frango light",
    price: 34.90,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Escondidinho Vegetariano",
    description: "Purê de mandioca com recheio de legumes",
    price: 29.90,
    image: "/placeholder.svg"
  }
];

const FeaturedProducts: React.FC = () => {
  const { toast } = useToast();
  
  const handleAddToCart = (product: typeof products[0]) => {
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Destaques do Cardápio</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="product-card">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="price-tag">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-aquinos-red">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-aquinos-red hover:bg-red-600 text-white"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Adicionar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
