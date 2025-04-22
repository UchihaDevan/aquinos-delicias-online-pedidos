
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const ContatoPage: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Responderemos em breve.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Contato</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-aquinos-red">Fale Conosco</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-aquinos-red mt-1" />
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-gray-700">(00) 00000-0000</p>
                  <p className="text-sm text-gray-500 mt-1">Atendimento: 11h às 22h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-aquinos-red mt-1" />
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-gray-700">contato@aquinosdelicias.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-aquinos-red mt-1" />
                <div>
                  <h3 className="font-semibold">Área de Entrega</h3>
                  <p className="text-gray-700">Consulte as regiões atendidas via WhatsApp</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Redes Sociais</h3>
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
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-aquinos-red">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <Input 
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone/WhatsApp
                </label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea 
                  id="message"
                  placeholder="Escreva sua mensagem aqui"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="bg-aquinos-red hover:bg-red-600 text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContatoPage;
