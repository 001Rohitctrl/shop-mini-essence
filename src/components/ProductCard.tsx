import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/shop';
import { useShop } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// Import all product images
import headphonesImg from '@/assets/headphones.jpg';
import smartphoneImg from '@/assets/smartphone.jpg';
import laptopImg from '@/assets/laptop.jpg';
import tshirtImg from '@/assets/tshirt.jpg';
import jeansImg from '@/assets/jeans.jpg';
import jacketImg from '@/assets/jacket.jpg';
import watchImg from '@/assets/watch.jpg';
import sunglassesImg from '@/assets/sunglasses.jpg';
import runningShoesImg from '@/assets/running-shoes.jpg';
import dressShoesImg from '@/assets/dress-shoes.jpg';
import programmingBookImg from '@/assets/programming-book.jpg';
import designBookImg from '@/assets/design-book.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import wirelessChargerImg from '@/assets/wireless-charger.jpg';

const imageMap: Record<string, string> = {
  '/src/assets/headphones.jpg': headphonesImg,
  '/src/assets/smartphone.jpg': smartphoneImg,
  '/src/assets/laptop.jpg': laptopImg,
  '/src/assets/tshirt.jpg': tshirtImg,
  '/src/assets/jeans.jpg': jeansImg,
  '/src/assets/jacket.jpg': jacketImg,
  '/src/assets/watch.jpg': watchImg,
  '/src/assets/sunglasses.jpg': sunglassesImg,
  '/src/assets/running-shoes.jpg': runningShoesImg,
  '/src/assets/dress-shoes.jpg': dressShoesImg,
  '/src/assets/programming-book.jpg': programmingBookImg,
  '/src/assets/design-book.jpg': designBookImg,
  '/src/assets/smartwatch.jpg': smartwatchImg,
  '/src/assets/wireless-charger.jpg': wirelessChargerImg,
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useShop();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="product-card p-6 h-full flex flex-col">
      <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50">
        <img
          src={imageMap[product.image] || product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        
        <p className="text-muted-foreground text-sm mb-3 flex-1 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.rating})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}