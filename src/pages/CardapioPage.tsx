
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock product data
const products = {
  tradicionais: [
    {
      id: 1,
      name: "Escondidinho de Carne Seca",
      description: "Purê de mandioca cremoso recheado com carne seca desfiada, catupiry e queijo coalho gratinado",
      price: 32.90,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Escondidinho de Frango",
      description: "Purê de batata com recheio de frango desfiado, milho, catupiry e queijo gratinado",
      price: 28.90,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Escondidinho de Carne Moída",
      description: "Purê de batata com recheio de carne moída temperada, ervilhas e queijo gratinado",
      price: 30.90,
      image: "/placeholder.svg"
    }
  ],
  especiais: [
    {
      id: 4,
      name: "Escondidinho do Chef",
      description: "Purê de mandioca com mix de carnes (carne seca, frango e calabresa), queijo especial e temperos da casa",
      price: 38.90,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Escondidinho de Camarão",
      description: "Purê de mandioca com camarões grelhados no alho e óleo, catupiry e queijo gratinado",
      price: 42.90,
      image: "/placeholder.svg"
    }
  ],
  fit: [
    {
      id: 6,
      name: "Escondidinho Fit",
      description: "Purê de batata doce com frango desfiado temperado com ervas, queijo cottage e leve gratinado",
      price: 34.90,
      image: "/placeholder.svg"
    },
    {
      id: 7,
      name: "Escondidinho Vegetariano",
      description: "Purê de mandioca com mix de legumes, proteína de soja e queijo vegano",
      price: 29.90,
      image: "/placeholder.svg"
    }
  ],
  sobremesas: [
    {
      id: 8,
      name: "Pudim de Leite",
      description: "Pudim de leite condensado tradicional com calda de caramelo",
      price: 12.90,
      image: "/placeholder.svg"
    },
    {
      id: 9,
      name: "Mousse de Chocolate",
      description: "Mousse de chocolate cremoso com raspas de chocolate meio amargo",
      price: 10.90,
      image: "/placeholder.svg"
    }
  ]
};

type ProductCategory = keyof typeof products;

const CardapioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProductCategory>("tradicionais");
  const { toast } = useToast();
  
  const handleAddToCart = (product: typeof products.tradicionais[0]) => {
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Nosso Cardápio</h1>
        
        <Tabs defaultValue="tradicionais" onValueChange={(value) => setActiveTab(value as ProductCategory)}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="tradicionais">Tradicionais</TabsTrigger>
            <TabsTrigger value="especiais">Especiais</TabsTrigger>
            <TabsTrigger value="fit">Fit</TabsTrigger>
            <TabsTrigger value="sobremesas">Sobremesas</TabsTrigger>
          </TabsList>
          
          {(Object.keys(products) as ProductCategory[]).map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products[category].map((product) => (
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default CardapioPage;
