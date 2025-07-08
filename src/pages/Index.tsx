import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, RefreshCw } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import heroImage from "@/assets/hero-image.jpg";
import { products } from "@/data/products";

const Index = () => {
  const { addToCart } = useCart();
  
  // Get featured products (first 3 products with badges)
  const featuredProducts = products
    .filter(product => product.badge)
    .slice(0, 3);

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment processing"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to
            <span className="block bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              ShopSphere
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Discover premium products and exceptional shopping experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="hero" size="xl" className="min-w-[200px]">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="min-w-[200px] bg-white/10 border-white/20 text-white hover:bg-white/20">
              View Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 border-0 bg-gradient-card">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border-0">
              <Link to={`/product/${product.id}`}>
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    className="absolute top-4 left-4 bg-accent text-accent-foreground"
                  >
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="ml-1 text-sm text-muted-foreground">
                        {product.rating}
                      </span>
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({product.reviews?.toLocaleString() || "1000+"} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      variant="cart" 
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      disabled={!product.inStock}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover your next favorite product
          </p>
          <Link to="/register">
            <Button variant="accent" size="xl">
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
