export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  address: string;
  phone?: string;
}

export type Category = 'All' | 'Electronics' | 'Clothing' | 'Accessories' | 'Shoes' | 'Books' | 'Gadgets' | 'Toys' | 'Sports' | 'Home Decor' | 'Senior Care' | 'Stationary' | 'Food' | 'Gifts';