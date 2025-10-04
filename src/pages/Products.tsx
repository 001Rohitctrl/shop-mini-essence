import { useState, useMemo, useEffect } from 'react';
import { Search, Mic, MicOff } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Category } from '@/types/shop';
import { useToast } from '@/hooks/use-toast';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();

  const categories: Category[] = ['All', 'Electronics', 'Clothing', 'Accessories', 'Shoes', 'Books', 'Gadgets', 'Toys', 'Sports', 'Home Decor', 'Senior Care'];

  const startVoiceSearch = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      toast({
        title: "Not Supported",
        description: "Voice search is not supported in your browser. Try Chrome or Edge.",
        variant: "destructive"
      });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      toast({
        title: "Listening...",
        description: "Speak now to search for products",
      });
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
      toast({
        title: "Search",
        description: `Searching for "${transcript}"`,
      });
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      toast({
        title: "Error",
        description: "Could not recognize speech. Please try again.",
        variant: "destructive"
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground text-lg">
            Discover amazing products across all categories
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search products... (or use voice)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input pl-10 pr-12"
            />
            <button
              onClick={startVoiceSearch}
              disabled={isListening}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-accent rounded-md transition-colors disabled:opacity-50"
              title="Voice search"
            >
              {isListening ? (
                <MicOff className="w-5 h-5 text-destructive animate-pulse" />
              ) : (
                <Mic className="w-5 h-5 text-muted-foreground hover:text-primary" />
              )}
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or browse different categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}