import { Product } from '@/types/shop';

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 149.99,
    image: '/src/assets/headphones.jpg',
    category: 'Electronics',
    description: 'Premium wireless headphones with noise cancellation',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Smartphone',
    price: 699.99,
    image: '/src/assets/smartphone.jpg',
    category: 'Electronics',
    description: 'Latest smartphone with advanced camera features',
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Laptop',
    price: 999.99,
    image: '/src/assets/laptop.jpg',
    category: 'Electronics',
    description: 'High-performance laptop for work and gaming',
    rating: 4.9,
  },
  
  // Clothing
  {
    id: '4',
    name: 'Designer T-Shirt',
    price: 29.99,
    image: '/src/assets/tshirt.jpg',
    category: 'Clothing',
    description: 'Comfortable cotton t-shirt with modern design',
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Denim Jeans',
    price: 79.99,
    image: '/src/assets/jeans.jpg',
    category: 'Clothing',
    description: 'Classic denim jeans with perfect fit',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Winter Jacket',
    price: 159.99,
    image: '/src/assets/jacket.jpg',
    category: 'Clothing',
    description: 'Warm winter jacket with waterproof material',
    rating: 4.7,
  },

  // Accessories
  {
    id: '7',
    name: 'Leather Watch',
    price: 199.99,
    image: '/src/assets/watch.jpg',
    category: 'Accessories',
    description: 'Elegant leather watch with Swiss movement',
    rating: 4.8,
  },
  {
    id: '8',
    name: 'Designer Sunglasses',
    price: 89.99,
    image: '/src/assets/sunglasses.jpg',
    category: 'Accessories',
    description: 'Stylish sunglasses with UV protection',
    rating: 4.5,
  },

  // Shoes
  {
    id: '9',
    name: 'Running Shoes',
    price: 119.99,
    image: '/src/assets/running-shoes.jpg',
    category: 'Shoes',
    description: 'Comfortable running shoes with advanced cushioning',
    rating: 4.7,
  },
  {
    id: '10',
    name: 'Dress Shoes',
    price: 149.99,
    image: '/src/assets/dress-shoes.jpg',
    category: 'Shoes',
    description: 'Elegant dress shoes for formal occasions',
    rating: 4.6,
  },

  // Books
  {
    id: '11',
    name: 'Programming Guide',
    price: 39.99,
    image: '/src/assets/programming-book.jpg',
    category: 'Books',
    description: 'Complete guide to modern programming languages',
    rating: 4.8,
  },
  {
    id: '12',
    name: 'Design Principles',
    price: 29.99,
    image: '/src/assets/design-book.jpg',
    category: 'Books',
    description: 'Essential design principles for beginners',
    rating: 4.7,
  },

  // Gadgets
  {
    id: '13',
    name: 'Smart Watch',
    price: 299.99,
    image: '/src/assets/smartwatch.jpg',
    category: 'Gadgets',
    description: 'Feature-rich smartwatch with health tracking',
    rating: 4.8,
  },
  {
    id: '14',
    name: 'Wireless Charger',
    price: 49.99,
    image: '/src/assets/wireless-charger.jpg',
    category: 'Gadgets',
    description: 'Fast wireless charging pad for all devices',
    rating: 4.5,
  },
];