import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/shop';
import { useShop } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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
import wallClockImg from '@/assets/wall-clock.jpg';
import tableLampImg from '@/assets/table-lamp.jpg';
import decorativeVaseImg from '@/assets/decorative-vase.jpg';
import pictureFrameImg from '@/assets/picture-frame.jpg';
import throwPillowImg from '@/assets/throw-pillow.jpg';
import wallArtImg from '@/assets/wall-art.jpg';
import walkingCaneImg from '@/assets/walking-cane.jpg';
import readingGlassesImg from '@/assets/reading-glasses.jpg';
import pillOrganizerImg from '@/assets/pill-organizer.jpg';
import bloodPressureMonitorImg from '@/assets/blood-pressure-monitor.jpg';
import orthopedicCushionImg from '@/assets/orthopedic-cushion.jpg';
import gelPensImg from '@/assets/gel-pens.jpg';
import notebookImg from '@/assets/notebook.jpg';
import deskOrganizerImg from '@/assets/desk-organizer.jpg';
import stickyNotesImg from '@/assets/sticky-notes.jpg';
import fountainPenImg from '@/assets/fountain-pen.jpg';
import staplerImg from '@/assets/stapler.jpg';
import highlightersImg from '@/assets/highlighters.jpg';
import correctionTapeImg from '@/assets/correction-tape.jpg';
import dryFruitsMixImg from '@/assets/dry-fruits-mix.jpg';
import chocolateBoxImg from '@/assets/chocolate-box.jpg';
import honeyJarImg from '@/assets/honey-jar.jpg';
import darkChocolateImg from '@/assets/dark-chocolate.jpg';
import peanutButterImg from '@/assets/peanut-butter.jpg';
import oliveOilImg from '@/assets/olive-oil.jpg';
import giftHamperImg from '@/assets/gift-hamper.jpg';
import scentedCandleImg from '@/assets/scented-candle.jpg';
import greetingCardsImg from '@/assets/greeting-cards.jpg';
import photoAlbumImg from '@/assets/photo-album.jpg';
import jewelryBoxImg from '@/assets/jewelry-box.jpg';

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
  '/src/assets/wall-clock.jpg': wallClockImg,
  '/src/assets/table-lamp.jpg': tableLampImg,
  '/src/assets/decorative-vase.jpg': decorativeVaseImg,
  '/src/assets/picture-frame.jpg': pictureFrameImg,
  '/src/assets/throw-pillow.jpg': throwPillowImg,
  '/src/assets/wall-art.jpg': wallArtImg,
  '/src/assets/walking-cane.jpg': walkingCaneImg,
  '/src/assets/reading-glasses.jpg': readingGlassesImg,
  '/src/assets/pill-organizer.jpg': pillOrganizerImg,
  '/src/assets/blood-pressure-monitor.jpg': bloodPressureMonitorImg,
  '/src/assets/orthopedic-cushion.jpg': orthopedicCushionImg,
  '/src/assets/gel-pens.jpg': gelPensImg,
  '/src/assets/notebook.jpg': notebookImg,
  '/src/assets/desk-organizer.jpg': deskOrganizerImg,
  '/src/assets/sticky-notes.jpg': stickyNotesImg,
  '/src/assets/fountain-pen.jpg': fountainPenImg,
  '/src/assets/stapler.jpg': staplerImg,
  '/src/assets/highlighters.jpg': highlightersImg,
  '/src/assets/correction-tape.jpg': correctionTapeImg,
  '/src/assets/dry-fruits-mix.jpg': dryFruitsMixImg,
  '/src/assets/chocolate-box.jpg': chocolateBoxImg,
  '/src/assets/honey-jar.jpg': honeyJarImg,
  '/src/assets/dark-chocolate.jpg': darkChocolateImg,
  '/src/assets/peanut-butter.jpg': peanutButterImg,
  '/src/assets/olive-oil.jpg': oliveOilImg,
  '/src/assets/gift-hamper.jpg': giftHamperImg,
  '/src/assets/scented-candle.jpg': scentedCandleImg,
  '/src/assets/greeting-cards.jpg': greetingCardsImg,
  '/src/assets/photo-album.jpg': photoAlbumImg,
  '/src/assets/jewelry-box.jpg': jewelryBoxImg,
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useShop();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!", {
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