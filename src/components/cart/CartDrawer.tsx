
import React, { useState } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useCart } from "@/contexts/CartContext";
import { OrderFormData } from "@/types/cart";
import { ShoppingCart } from "lucide-react";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { items, addresses, getTotal } = useCart();
  const [step, setStep] = useState<'cart' | 'form'>('cart');
  const form = useForm<OrderFormData>();

  const handleContinue = () => {
    if (items.length === 0) return;
    setStep('form');
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const handleSubmitOrder = (data: OrderFormData) => {
    const selectedAddress = addresses.find(addr => addr.id === data.selectedAddressId);
    
    let message = `*Novo Pedido*\n\n`;
    message += `*Nome:* ${data.name}\n`;
    message += `*WhatsApp:* ${data.whatsapp}\n\n`;
    
    if (selectedAddress) {
      message += `*Endereço de Entrega:*\n`;
      message += `${selectedAddress.street}, ${selectedAddress.number}\n`;
      if (selectedAddress.complement) message += `${selectedAddress.complement}\n`;
      message += `${selectedAddress.neighborhood}\n`;
      message += `${selectedAddress.city} - ${selectedAddress.state}\n\n`;
    }
    
    message += `*Pedido:*\n`;
    items.forEach(item => {
      message += `${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `\n*Total: ${formatPrice(getTotal())}*`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
    setStep('cart');
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader>
          <DrawerTitle>
            {step === 'cart' ? 'Carrinho' : 'Finalizar Pedido'}
          </DrawerTitle>
        </DrawerHeader>

        {step === 'cart' ? (
          <div className="flex-1 overflow-y-auto px-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingCart size={48} />
                <p className="mt-2">Seu carrinho está vazio</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-4">{item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmitOrder)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Nome é obrigatório" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  rules={{ required: "WhatsApp é obrigatório" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="(11) 99999-9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {addresses.length > 0 && (
                  <FormField
                    control={form.control}
                    name="selectedAddressId"
                    rules={{ required: "Selecione um endereço" }}
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Endereço de Entrega</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value?.toString()}
                            className="space-y-2"
                          >
                            {addresses.map(address => (
                              <div key={address.id} className="flex items-center space-x-2">
                                <RadioGroupItem value={address.id.toString()} id={`address-${address.id}`} />
                                <Label htmlFor={`address-${address.id}`}>
                                  {address.street}, {address.number} - {address.neighborhood}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <Button type="submit" className="w-full bg-aquinos-red">
                  Enviar Pedido
                </Button>
              </form>
            </Form>
          </div>
        )}

        <DrawerFooter>
          {step === 'cart' && items.length > 0 && (
            <>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total:</span>
                <span className="font-bold">{formatPrice(getTotal())}</span>
              </div>
              <Button onClick={handleContinue} className="w-full bg-aquinos-red">
                Continuar
              </Button>
            </>
          )}
          {step === 'form' && (
            <Button variant="outline" onClick={() => setStep('cart')}>
              Voltar ao Carrinho
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
