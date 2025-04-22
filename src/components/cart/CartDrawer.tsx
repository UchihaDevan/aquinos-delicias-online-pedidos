import React, { useState } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useCart } from '@/contexts/CartContext';
import { OrderFormData } from '@/types/cart';
import { ShoppingCart } from 'lucide-react';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { items, addresses, getTotal, addAddress } = useCart();
  const [step, setStep] = useState<'cart' | 'form'>('cart');

  const form = useForm<OrderFormData>({
    defaultValues: {
      name: '',
      whatsapp: '',
      selectedAddressId: undefined,
      street: '',
      number: undefined,
      complement: '',
      neighborhood: '',
      city: '',
      state: ''
    }
  });

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleContinue = () => {
    if (items.length > 0) setStep('form');
  };

  const handleSaveAddress = (data: Omit<OrderFormData, 'name' | 'whatsapp' | 'selectedAddressId'>) => {
    addAddress({
      street: data.street!,
      number: data.number!,
      complement: data.complement,
      neighborhood: data.neighborhood!,
      city: data.city!,
      state: data.state!
    });
    setStep('form');
    form.reset({ ...form.getValues(), selectedAddressId: undefined });
  };

  const handleSubmitOrder = (data: OrderFormData) => {
    const selected = addresses.find(a => a.id === data.selectedAddressId);
    let message = `*Novo Pedido*\n\n`;
    message += `*Nome:* ${data.name}\n`;
    message += `*WhatsApp:* ${data.whatsapp}\n\n`;
    if (selected) {
      message += `*Endereço de Entrega:*\n`;
      message += `${selected.street}, ${selected.number}\n`;
      if (selected.complement) message += `${selected.complement}\n`;
      message += `${selected.neighborhood}\n`;
      message += `${selected.city} - ${selected.state}\n\n`;
    }
    message += `*Pedido:*\n`;
    items.forEach(item => {
      message += `${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `\n*Total: ${formatPrice(getTotal())}*`;

    const url = `https://wa.me/5585991609875?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
    setStep('cart');
    form.reset();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className="h-[85vh] p-0">
        <DrawerHeader>
          <DrawerTitle>{step === 'cart' ? 'Carrinho' : 'Finalizar Pedido'}</DrawerTitle>
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
              {addresses.length === 0 ? (
                <form onSubmit={form.handleSubmit(handleSaveAddress)} className="space-y-4">
                  {/* Formulário de cadastro de endereço */}
                  {['Rua','Numero da casa','Complemento','Bairro','Cidade','Estado'].map(name => (
                    <FormField
                      key={name}
                      control={form.control}
                      name={name as any}
                      rules={name !== 'complement' ? { required: `${name.charAt(0).toUpperCase() + name.slice(1)} é obrigatório` } : undefined}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{name.charAt(0).toUpperCase() + name.slice(1)}</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={name === 'number' ? 'Número' : name.charAt(0).toUpperCase() + name.slice(1)}
                              type={name === 'number' ? 'number' : 'text'}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button type="submit" className="w-full bg-aquinos-red">
                    Salvar Endereço e Continuar
                  </Button>
                </form>
              ) : (
                <form onSubmit={form.handleSubmit(handleSubmitOrder)} className="space-y-4">
                  {/* Formulário de envio de pedido */}
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: 'Nome é obrigatório' }}
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
                    rules={{ required: 'WhatsApp é obrigatório' }}
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
                  <FormField
                    control={form.control}
                    name="selectedAddressId"
                    rules={{ required: 'Selecione um endereço' }}
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Endereço de Entrega</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={val => field.onChange(Number(val))} value={field.value?.toString()}
                            className="space-y-2">
                            {addresses.map(addr => (
                              <div key={addr.id} className="flex items-center space-x-2">
                                <RadioGroupItem id={`addr-${addr.id}`} value={addr.id.toString()} />
                                <Label htmlFor={`addr-${addr.id}`}>{`${addr.street}, ${addr.number} - ${addr.neighborhood}`}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-aquinos-red">
                    Enviar Pedido
                  </Button>
                </form>
              )}
            </Form>
          </div>
        )}

        <DrawerFooter>
          {step === 'cart' && items.length > 0 && (
            <>
              <div className="flex justify-between mb-4 px-4">
                <span className="font-medium">Total:</span>
                <span className="font-bold">{formatPrice(getTotal())}</span>
              </div>
              <Button onClick={handleContinue} className="w-full bg-aquinos-red">
                Continuar
              </Button>
            </>
          )}
          {step === 'form' && (
            <Button variant="outline" onClick={() => setStep('cart')} className="w-full">
              Voltar ao Carrinho
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
