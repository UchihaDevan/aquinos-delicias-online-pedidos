
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface DeliveryAddress {
  id: number;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface OrderFormData {
  name: string;
  whatsapp: string;
  selectedAddressId?: number;
}
