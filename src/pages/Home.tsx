import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Users, Shield, TrendingUp, Gift, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-shopping.jpg';
import promoBanner from '@/assets/promo-banner.jpg';
import lifestyleImage from '@/assets/lifestyle-products.jpg';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern shopping experience with diverse products" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Limited Time Offers Available</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your One-Stop <span className="gradient-text">Shopping Paradise</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore 70+ premium products across 14 categories. From cutting-edge electronics to stylish fashion, 
                delicious gourmet foods to thoughtful gifts – find everything you love in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/products">
                  <Button className="btn-hero">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Start Shopping
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" size="lg">
                    Browse Categories
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">70+</div>
                  <div className="text-sm text-muted-foreground">Premium Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">14</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img 
                src={lifestyleImage} 
                alt="Curated lifestyle products showcase" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={promoBanner} 
              alt="Happy customers with shopping bags and gifts" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent flex items-center">
              <div className="max-w-2xl px-8 md:px-12">
                <div className="inline-flex items-center gap-2 bg-primary px-3 py-1 rounded-full mb-4">
                  <TrendingUp className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">Hot Deals</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Special Offers Just For You
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Discover exclusive deals on electronics, fashion, food, and more. Save big on your favorite items!
                </p>
                <Link to="/products">
                  <Button className="btn-hero">
                    <Gift className="w-5 h-5 mr-2" />
                    Explore Deals
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Shop With Us?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference with our commitment to quality, service, and your satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Handpicked products meeting the highest quality standards
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10K+ Happy Customers</h3>
              <p className="text-muted-foreground">
                Join thousands who trust us for their shopping needs
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
              <p className="text-muted-foreground">
                Your data and payments are protected with top-tier security
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Gifts</h3>
              <p className="text-muted-foreground">
                Exclusive rewards and surprises with every purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Check out our most popular items
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-purple-500/5 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join over 10,000 satisfied customers who have discovered the joy of shopping with us. 
            Premium products, unbeatable prices, and exceptional service await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button className="btn-hero">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Start Shopping Now
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg">
                <Gift className="w-5 h-5 mr-2" />
                View Special Offers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}