import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// Import all product images (same as ProductCard)
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
import gamingMouseImg from '@/assets/gaming-mouse.jpg';
import bluetoothSpeakerImg from '@/assets/bluetooth-speaker.jpg';
import usbHubImg from '@/assets/usb-hub.jpg';
import hoodieImg from '@/assets/hoodie.jpg';
import summerDressImg from '@/assets/summer-dress.jpg';
import businessShirtImg from '@/assets/business-shirt.jpg';
import leatherWalletImg from '@/assets/leather-wallet.jpg';
import baseballCapImg from '@/assets/baseball-cap.jpg';
import backpackImg from '@/assets/backpack.jpg';
import whiteSneakersImg from '@/assets/white-sneakers.jpg';
import highHeelsImg from '@/assets/high-heels.jpg';
import cookbookImg from '@/assets/cookbook.jpg';
import fitnessTrackerImg from '@/assets/fitness-tracker.jpg';
import powerBankImg from '@/assets/power-bank.jpg';
import phoneStandImg from '@/assets/phone-stand.jpg';
import legoSetImg from '@/assets/lego-set.jpg';
import teddyBearImg from '@/assets/teddy-bear.jpg';
import rcDroneImg from '@/assets/rc-drone.jpg';
import jigsawPuzzleImg from '@/assets/jigsaw-puzzle.jpg';
import boardGameImg from '@/assets/board-game.jpg';
import basketballImg from '@/assets/basketball.jpg';
import soccerBallImg from '@/assets/soccer-ball.jpg';
import tennisRacketImg from '@/assets/tennis-racket.jpg';
import yogaMatImg from '@/assets/yoga-mat.jpg';
import dumbbellsImg from '@/assets/dumbbells.jpg';
import swimmingGogglesImg from '@/assets/swimming-goggles.jpg';

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
  '/src/assets/gaming-mouse.jpg': gamingMouseImg,
  '/src/assets/bluetooth-speaker.jpg': bluetoothSpeakerImg,
  '/src/assets/usb-hub.jpg': usbHubImg,
  '/src/assets/hoodie.jpg': hoodieImg,
  '/src/assets/summer-dress.jpg': summerDressImg,
  '/src/assets/business-shirt.jpg': businessShirtImg,
  '/src/assets/leather-wallet.jpg': leatherWalletImg,
  '/src/assets/baseball-cap.jpg': baseballCapImg,
  '/src/assets/backpack.jpg': backpackImg,
  '/src/assets/white-sneakers.jpg': whiteSneakersImg,
  '/src/assets/high-heels.jpg': highHeelsImg,
  '/src/assets/cookbook.jpg': cookbookImg,
  '/src/assets/fitness-tracker.jpg': fitnessTrackerImg,
  '/src/assets/power-bank.jpg': powerBankImg,
  '/src/assets/phone-stand.jpg': phoneStandImg,
  '/src/assets/lego-set.jpg': legoSetImg,
  '/src/assets/teddy-bear.jpg': teddyBearImg,
  '/src/assets/rc-drone.jpg': rcDroneImg,
  '/src/assets/jigsaw-puzzle.jpg': jigsawPuzzleImg,
  '/src/assets/board-game.jpg': boardGameImg,
  '/src/assets/basketball.jpg': basketballImg,
  '/src/assets/soccer-ball.jpg': soccerBallImg,
  '/src/assets/tennis-racket.jpg': tennisRacketImg,
  '/src/assets/yoga-mat.jpg': yogaMatImg,
  '/src/assets/dumbbells.jpg': dumbbellsImg,
  '/src/assets/swimming-goggles.jpg': swimmingGogglesImg,
};

export default function Cart() {
  const { cart, total, updateQuantity, removeFromCart } = useShop();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart.",
      });
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    toast({
      title: "Item removed",
      description: `${name} has been removed from your cart.`,
    });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/products">
            <Button className="btn-hero">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-card rounded-lg border border-border p-6">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                    <img
                      src={imageMap[item.image] || item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">{item.category}</p>
                    <p className="text-lg font-semibold text-primary mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Item Total */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Subtotal ({item.quantity} {item.quantity === 1 ? 'item' : 'items'})
                    </span>
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-primary">
                      ${(total * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Link to="/checkout" className="block">
                  <Button className="w-full btn-hero">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}